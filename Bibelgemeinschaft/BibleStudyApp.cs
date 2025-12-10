using Bibelgemeinschaft.Models;
using Bibelgemeinschaft.Services;
using Bibelgemeinschaft.UI;

namespace Bibelgemeinschaft;

public class BibleStudyApp
{
    private readonly BibleService _bibleService;
    private readonly BookmarkService _bookmarkService;
    private bool _isRunning = true;

    public BibleStudyApp(BibleService bibleService, BookmarkService bookmarkService)
    {
        _bibleService = bibleService;
        _bookmarkService = bookmarkService;
    }

    public async Task RunAsync()
    {
        await InitializeAsync();

        while (_isRunning)
        {
            ShowMainMenu();
        }
    }

    private async Task InitializeAsync()
    {
        UIHelper.DisplayHeader("Initialisierung...");
        Console.WriteLine("Lade Bibeldaten...");
        await _bibleService.LoadBibleDataAsync();
        await _bookmarkService.LoadBookmarksAsync();
        UIHelper.DisplaySuccess("Bibeldaten erfolgreich geladen!");
        await Task.Delay(1000);
    }

    private async void ShowMainMenu()
    {
        var metadata = _bibleService.GetMetadata();
        string title = metadata?.name ?? "Die Bibel – Der Weg zur Quelle";

        string[] options = new[]
        {
            "Bibelbücher durchsuchen",
            "Nach Versen suchen",
            "Tagesvers anzeigen",
            "Lesezeichen verwalten",
            "Über diese Bibel",
            "Beenden"
        };

        int choice = UIHelper.DisplayMenu(title, options);

        switch (choice)
        {
            case 1:
                await BrowseBooksAsync();
                break;
            case 2:
                SearchVerses();
                break;
            case 3:
                await ShowDailyVerseAsync();
                break;
            case 4:
                await ManageBookmarksAsync();
                break;
            case 5:
                ShowAbout();
                break;
            case 6:
                _isRunning = false;
                ShowGoodbye();
                break;
            default:
                UIHelper.DisplayError("Ungültige Auswahl. Bitte versuchen Sie es erneut.");
                await Task.Delay(1500);
                break;
        }
    }

    private async Task BrowseBooksAsync()
    {
        var books = _bibleService.GetBookNames();
        if (books.Count == 0)
        {
            UIHelper.DisplayError("Keine Bücher gefunden.");
            UIHelper.PressKeyToContinue();
            return;
        }

        while (true)
        {
            UIHelper.DisplayHeader("Bibelbücher");
            
            Console.WriteLine("Verfügbare Bücher:\n");
            for (int i = 0; i < books.Count; i++)
            {
                if (i % 3 == 0 && i > 0) Console.WriteLine();
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write($"  [{i + 1,2}] ");
                Console.ResetColor();
                Console.Write($"{books[i],-20}");
            }
            
            Console.WriteLine("\n\n  [0] Zurück zum Hauptmenü");
            Console.WriteLine();
            
            string input = UIHelper.GetUserInput("Wählen Sie ein Buch (Nummer): ");
            
            if (int.TryParse(input, out int choice))
            {
                if (choice == 0) return;
                if (choice >= 1 && choice <= books.Count)
                {
                    await SelectChapterAsync(books[choice - 1]);
                }
                else
                {
                    UIHelper.DisplayError("Ungültige Auswahl.");
                    await Task.Delay(1500);
                }
            }
            else
            {
                UIHelper.DisplayError("Bitte geben Sie eine gültige Nummer ein.");
                await Task.Delay(1500);
            }
        }
    }

    private async Task SelectChapterAsync(string bookName)
    {
        int maxChapter = _bibleService.GetMaxChapter(bookName);

        while (true)
        {
            UIHelper.DisplayHeader($"{bookName}");
            Console.WriteLine($"Dieses Buch hat {maxChapter} Kapitel.\n");
            Console.WriteLine("  [0] Zurück");
            Console.WriteLine();

            string input = UIHelper.GetUserInput("Kapitel-Nummer (oder 'a' für alle): ");

            if (input.ToLower() == "a")
            {
                // Show all chapters
                for (int i = 1; i <= maxChapter; i++)
                {
                    DisplayChapter(bookName, i);
                    if (i < maxChapter)
                    {
                        Console.WriteLine("\n" + new string('─', 63) + "\n");
                    }
                }
                UIHelper.PressKeyToContinue();
                return;
            }
            else if (input == "0")
            {
                return;
            }
            else if (int.TryParse(input, out int chapter) && chapter >= 1 && chapter <= maxChapter)
            {
                DisplayChapter(bookName, chapter);
                
                Console.WriteLine();
                string bookmark = UIHelper.GetUserInput("Lesezeichen für dieses Kapitel setzen? (j/n): ");
                if (bookmark.ToLower() == "j")
                {
                    string note = UIHelper.GetUserInput("Notiz (optional): ");
                    _bookmarkService.AddBookmark(bookName, chapter, 1, note);
                    await _bookmarkService.SaveBookmarksAsync();
                    UIHelper.DisplaySuccess("Lesezeichen gespeichert!");
                }
                
                UIHelper.PressKeyToContinue();
            }
            else
            {
                UIHelper.DisplayError("Ungültige Kapitelnummer.");
                await Task.Delay(1500);
            }
        }
    }

    private void DisplayChapter(string bookName, int chapter)
    {
        var verses = _bibleService.GetChapter(bookName, chapter);

        if (verses.Count == 0)
        {
            UIHelper.DisplayError($"Keine Verse in {bookName} Kapitel {chapter} gefunden.");
            return;
        }

        UIHelper.DisplayHeader($"{bookName} - Kapitel {chapter}");

        foreach (var verse in verses)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.Write($"{verse.verse}. ");
            Console.ResetColor();
            Console.WriteLine(verse.text);
            Console.WriteLine();
        }
    }

    private void SearchVerses()
    {
        UIHelper.DisplayHeader("Verse suchen");
        
        string searchText = UIHelper.GetUserInput("Suchbegriff eingeben: ");
        
        if (string.IsNullOrWhiteSpace(searchText))
        {
            UIHelper.DisplayError("Bitte geben Sie einen Suchbegriff ein.");
            UIHelper.PressKeyToContinue();
            return;
        }

        Console.WriteLine("\nSuche läuft...\n");
        var results = _bibleService.SearchVerses(searchText);

        if (results.Count == 0)
        {
            UIHelper.DisplayError($"Keine Verse mit '{searchText}' gefunden.");
        }
        else
        {
            UIHelper.DisplaySuccess($"{results.Count} Verse gefunden:\n");
            
            foreach (var verse in results)
            {
                UIHelper.DisplayVerse(verse.book_name ?? "", verse.chapter, verse.verse, verse.text ?? "");
                Console.WriteLine();
            }
        }

        UIHelper.PressKeyToContinue();
    }

    private async Task ShowDailyVerseAsync()
    {
        UIHelper.DisplayHeader("Tagesvers");

        var verse = _bibleService.GetRandomVerse();

        if (verse != null)
        {
            Console.WriteLine();
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("┌─────────────────────────────────────────────────────────────┐");
            Console.WriteLine("│                        TAGESVERS                            │");
            Console.WriteLine("└─────────────────────────────────────────────────────────────┘");
            Console.ResetColor();
            Console.WriteLine();
            
            UIHelper.DisplayVerse(verse.book_name ?? "", verse.chapter, verse.verse, verse.text ?? "");
            
            Console.WriteLine();
            string bookmark = UIHelper.GetUserInput("\nLesezeichen setzen? (j/n): ");
            if (bookmark.ToLower() == "j")
            {
                string note = UIHelper.GetUserInput("Notiz (optional): ");
                _bookmarkService.AddBookmark(verse.book_name ?? "", verse.chapter, verse.verse, note);
                await _bookmarkService.SaveBookmarksAsync();
                UIHelper.DisplaySuccess("Lesezeichen gespeichert!");
            }
        }
        else
        {
            UIHelper.DisplayError("Kein Vers verfügbar.");
        }

        UIHelper.PressKeyToContinue();
    }

    private async Task ManageBookmarksAsync()
    {
        while (true)
        {
            var bookmarks = _bookmarkService.GetAllBookmarks();

            UIHelper.DisplayHeader("Lesezeichen");

            if (bookmarks.Count == 0)
            {
                Console.WriteLine("Keine Lesezeichen vorhanden.\n");
                UIHelper.PressKeyToContinue();
                return;
            }

            for (int i = 0; i < bookmarks.Count; i++)
            {
                var bm = bookmarks[i];
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write($"  [{i + 1}] ");
                Console.ResetColor();
                Console.Write($"{bm.BookName} {bm.Chapter}:{bm.Verse}");
                
                if (!string.IsNullOrEmpty(bm.Note))
                {
                    Console.ForegroundColor = ConsoleColor.DarkGray;
                    Console.Write($" - {bm.Note}");
                    Console.ResetColor();
                }
                
                Console.ForegroundColor = ConsoleColor.DarkGray;
                Console.WriteLine($" ({bm.CreatedDate:dd.MM.yyyy})");
                Console.ResetColor();
            }

            Console.WriteLine("\n  [0] Zurück");
            Console.WriteLine();
            
            string input = UIHelper.GetUserInput("Lesezeichen auswählen (oder 'd' + Nummer zum Löschen): ");

            if (input == "0")
            {
                return;
            }
            else if (input.ToLower().StartsWith("d"))
            {
                string numStr = input.Substring(1).Trim();
                if (int.TryParse(numStr, out int delIndex) && delIndex >= 1 && delIndex <= bookmarks.Count)
                {
                    _bookmarkService.RemoveBookmark(delIndex - 1);
                    await _bookmarkService.SaveBookmarksAsync();
                    UIHelper.DisplaySuccess("Lesezeichen gelöscht!");
                    await Task.Delay(1000);
                }
            }
            else if (int.TryParse(input, out int index) && index >= 1 && index <= bookmarks.Count)
            {
                var bm = bookmarks[index - 1];
                var verse = _bibleService.GetVerse(bm.BookName ?? "", bm.Chapter, bm.Verse);
                
                UIHelper.DisplayHeader($"{bm.BookName} {bm.Chapter}:{bm.Verse}");
                
                if (verse != null)
                {
                    UIHelper.DisplayVerse(verse.book_name ?? "", verse.chapter, verse.verse, verse.text ?? "");
                }
                
                if (!string.IsNullOrEmpty(bm.Note))
                {
                    Console.WriteLine();
                    Console.ForegroundColor = ConsoleColor.Cyan;
                    Console.WriteLine($"Notiz: {bm.Note}");
                    Console.ResetColor();
                }
                
                UIHelper.PressKeyToContinue();
            }
            else
            {
                UIHelper.DisplayError("Ungültige Eingabe.");
                await Task.Delay(1500);
            }
        }
    }

    private void ShowAbout()
    {
        var metadata = _bibleService.GetMetadata();

        UIHelper.DisplayHeader("Über diese Bibel");

        if (metadata != null)
        {
            Console.WriteLine($"Name: {metadata.name}");
            Console.WriteLine($"Kurzname: {metadata.shortname}");
            Console.WriteLine($"Jahr: {metadata.year}");
            Console.WriteLine($"Sprache: {metadata.lang_short}");
        }

        Console.WriteLine("\n═══════════════════════════════════════════════════════════════");
        Console.WriteLine("Diese Bibelstudien-App ermöglicht:");
        Console.WriteLine("  • Durchsuchen aller Bibelbücher und Kapitel");
        Console.WriteLine("  • Suche nach Versen");
        Console.WriteLine("  • Tägliche Verse zur Inspiration");
        Console.WriteLine("  • Lesezeichen mit Notizen");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");

        UIHelper.DisplayFooter();
        UIHelper.PressKeyToContinue();
    }

    private void ShowGoodbye()
    {
        UIHelper.DisplayHeader("Auf Wiedersehen");
        Console.WriteLine();
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine("  Möge Gottes Wort Sie auf Ihrem Weg begleiten! 🙏");
        Console.ResetColor();
        Console.WriteLine();
        UIHelper.DisplayFooter();
        Console.WriteLine();
    }
}
