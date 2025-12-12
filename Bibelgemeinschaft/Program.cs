using Bibelgemeinschaft.Services;

namespace Bibelgemeinschaft;

internal class Program
{
    static async Task Main(string[] args)
    {
        // Set console encoding to support special characters
        Console.OutputEncoding = System.Text.Encoding.UTF8;

        // Get the path to the Bible data file
        string dataPath = Path.Combine(AppContext.BaseDirectory, "Data", "elberfelder_1905.json");
        string bookmarksPath = Path.Combine(AppContext.BaseDirectory, "bookmarks.json");

        try
        {
            // Initialize services
            var bibleService = new BibleService(dataPath);
            var bookmarkService = new BookmarkService(bookmarksPath);

            // Create and run the app
            var app = new BibleStudyApp(bibleService, bookmarkService);
            await app.RunAsync();
        }
        catch (FileNotFoundException ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"Fehler: {ex.Message}");
            Console.ResetColor();
            Console.WriteLine("\nStellen Sie sicher, dass die Datei 'elberfelder_1905.json' im Data-Verzeichnis vorhanden ist.");
            Console.WriteLine("Drücken Sie eine Taste zum Beenden...");
            Console.ReadKey();
        }
        catch (Exception ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"Ein unerwarteter Fehler ist aufgetreten: {ex.Message}");
            Console.ResetColor();
            Console.WriteLine("\nDrücken Sie eine Taste zum Beenden...");
            Console.ReadKey();
        }
    }
}