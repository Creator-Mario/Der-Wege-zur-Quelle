namespace Bibelgemeinschaft.UI;

public static class UIHelper
{
    public static void DisplayHeader(string title)
    {
        Console.Clear();
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine($"  📖 {title}");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.ResetColor();
        Console.WriteLine();
    }

    public static void DisplayFooter()
    {
        Console.WriteLine();
        Console.ForegroundColor = ConsoleColor.DarkGray;
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("© Mario R. Denzer");
        Console.ResetColor();
    }

    public static void DisplayMessage(string message, ConsoleColor color = ConsoleColor.White)
    {
        Console.ForegroundColor = color;
        Console.WriteLine(message);
        Console.ResetColor();
    }

    public static void DisplayVerse(string bookName, int chapter, int verse, string text, bool showReference = true)
    {
        if (showReference)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.Write($"{bookName} {chapter}:{verse} - ");
            Console.ResetColor();
        }
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine(text);
        Console.ResetColor();
    }

    public static int DisplayMenu(string title, string[] options)
    {
        DisplayHeader(title);
        
        for (int i = 0; i < options.Length; i++)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write($"  [{i + 1}] ");
            Console.ResetColor();
            Console.WriteLine(options[i]);
        }
        
        Console.WriteLine();
        Console.Write("Wählen Sie eine Option: ");
        
        if (int.TryParse(Console.ReadLine(), out int choice) && choice >= 1 && choice <= options.Length)
        {
            return choice;
        }
        
        return -1;
    }

    public static string GetUserInput(string prompt)
    {
        Console.Write(prompt);
        return Console.ReadLine() ?? "";
    }

    public static void PressKeyToContinue()
    {
        Console.WriteLine();
        Console.ForegroundColor = ConsoleColor.DarkGray;
        Console.WriteLine("Drücken Sie eine Taste zum Fortfahren...");
        Console.ResetColor();
        Console.ReadKey();
    }

    public static void DisplayError(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"❌ Fehler: {message}");
        Console.ResetColor();
    }

    public static void DisplaySuccess(string message)
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine($"✓ {message}");
        Console.ResetColor();
    }
}
