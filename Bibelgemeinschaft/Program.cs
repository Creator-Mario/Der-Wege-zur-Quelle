using Bibelgemeinschaft.Services;
using Bibelgemeinschaft.Models;

namespace Bibelgemeinschaft;

internal class Program
{
    private static BibelstudiumService? _service;
    private static List<Thema>? _themen;

    static void Main(string[] args)
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8;
        _service = new BibelstudiumService();
        _themen = _service.GetAlleThemen();
        
        ZeigeStartseite();
    }

    static void ZeigeStartseite()
    {
        while (true)
        {
            Console.Clear();
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine("  📖 Die Bibel – Glauben der Weg zur Quelle");
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine();
            Console.WriteLine("© Mario R. Denzer");
            Console.WriteLine();
            Console.WriteLine("─────────────────────────────────────────────────────────────────");
            Console.WriteLine();
            Console.WriteLine("HAUPTMENÜ:");
            Console.WriteLine();
            Console.WriteLine("  [1] Themen anzeigen");
            Console.WriteLine("  [2] Alle Themen und Lektionen auflisten");
            Console.WriteLine("  [3] Übersicht anzeigen");
            Console.WriteLine("  [0] Beenden");
            Console.WriteLine();
            Console.WriteLine("─────────────────────────────────────────────────────────────────");
            Console.Write("\nBitte wählen Sie eine Option: ");

            var input = Console.ReadLine();

            switch (input)
            {
                case "1":
                    ZeigeThemenMenu();
                    break;
                case "2":
                    ZeigeAlleThemenUndLektionen();
                    break;
                case "3":
                    ZeigeUebersicht();
                    break;
                case "0":
                    Console.WriteLine("\nAuf Wiedersehen!");
                    return;
                default:
                    Console.WriteLine("\nUngültige Eingabe. Bitte versuchen Sie es erneut.");
                    Console.WriteLine("Drücken Sie eine Taste...");
                    Console.ReadKey();
                    break;
            }
        }
    }

    static void ZeigeThemenMenu()
    {
        while (true)
        {
            Console.Clear();
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine("  📖 THEMEN");
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine();

            if (_themen != null)
            {
                for (int i = 0; i < _themen.Count; i++)
                {
                    var thema = _themen[i];
                    Console.WriteLine($"  [{i + 1}] {thema.Titel}");
                    Console.WriteLine($"      {thema.Beschreibung}");
                    Console.WriteLine($"      ({thema.Lektionen.Count} Lektionen)");
                    Console.WriteLine();
                }
            }

            Console.WriteLine("  [0] Zurück zum Hauptmenü");
            Console.WriteLine();
            Console.WriteLine("─────────────────────────────────────────────────────────────────");
            Console.Write("\nBitte wählen Sie ein Thema: ");

            var input = Console.ReadLine();

            if (input == "0")
            {
                return;
            }

            if (int.TryParse(input, out int themaIndex) && themaIndex > 0 && themaIndex <= (_themen?.Count ?? 0))
            {
                ZeigeLektionenMenu(_themen![themaIndex - 1]);
            }
            else
            {
                Console.WriteLine("\nUngültige Eingabe. Bitte versuchen Sie es erneut.");
                Console.WriteLine("Drücken Sie eine Taste...");
                Console.ReadKey();
            }
        }
    }

    static void ZeigeLektionenMenu(Thema thema)
    {
        while (true)
        {
            Console.Clear();
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine($"  📖 THEMA {thema.Nummer}: {thema.Titel}");
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine();
            Console.WriteLine($"Beschreibung: {thema.Beschreibung}");
            Console.WriteLine();
            Console.WriteLine("LEKTIONEN:");
            Console.WriteLine();

            for (int i = 0; i < thema.Lektionen.Count; i++)
            {
                var lektion = thema.Lektionen[i];
                Console.WriteLine($"  [{i + 1}] Lektion {thema.Nummer}.{lektion.Nummer}: {lektion.Titel}");
            }

            Console.WriteLine();
            Console.WriteLine("  [0] Zurück zur Themenübersicht");
            Console.WriteLine();
            Console.WriteLine("─────────────────────────────────────────────────────────────────");
            Console.Write("\nBitte wählen Sie eine Lektion: ");

            var input = Console.ReadLine();

            if (input == "0")
            {
                return;
            }

            if (int.TryParse(input, out int lektionIndex) && lektionIndex > 0 && lektionIndex <= thema.Lektionen.Count)
            {
                ZeigeLektionDetails(thema, thema.Lektionen[lektionIndex - 1]);
            }
            else
            {
                Console.WriteLine("\nUngültige Eingabe. Bitte versuchen Sie es erneut.");
                Console.WriteLine("Drücken Sie eine Taste...");
                Console.ReadKey();
            }
        }
    }

    static void ZeigeLektionDetails(Thema thema, Lektion lektion)
    {
        Console.Clear();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine($"  📖 Lektion {thema.Nummer}.{lektion.Nummer}: {lektion.Titel}");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine();
        Console.WriteLine($"Thema: {thema.Titel}");
        Console.WriteLine();
        Console.WriteLine($"Beschreibung:");
        Console.WriteLine($"  {lektion.Beschreibung}");
        Console.WriteLine();
        Console.WriteLine($"Bibelstellen:");
        foreach (var stelle in lektion.Bibelstellen)
        {
            Console.WriteLine($"  • {stelle}");
        }
        Console.WriteLine();
        Console.WriteLine($"Kernvers:");
        Console.WriteLine($"  {lektion.Kernvers}");
        Console.WriteLine();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("\nDrücken Sie eine Taste, um zurückzukehren...");
        Console.ReadKey();
    }

    static void ZeigeAlleThemenUndLektionen()
    {
        Console.Clear();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("  📖 AUFLISTUNG ALLER THEMEN UND LEKTIONEN");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine();
        Console.WriteLine($"Gesamtanzahl der Themen: {_themen?.Count ?? 0}");
        Console.WriteLine($"Gesamtanzahl der Lektionen: {_service?.GetGesamtanzahlLektionen() ?? 0}");
        Console.WriteLine();
        Console.WriteLine("─────────────────────────────────────────────────────────────────");
        Console.WriteLine();

        if (_themen != null)
        {
            foreach (var thema in _themen)
            {
                Console.WriteLine($"╔═ THEMA {thema.Nummer}: {thema.Titel}");
                Console.WriteLine($"║  {thema.Beschreibung}");
                Console.WriteLine($"║  Anzahl der Lektionen: {thema.Lektionen.Count}");
                Console.WriteLine("╚═════════════════════════════════════════════════════════════");
                Console.WriteLine();

                foreach (var lektion in thema.Lektionen)
                {
                    Console.WriteLine($"  📖 Lektion {thema.Nummer}.{lektion.Nummer}: {lektion.Titel}");
                    Console.WriteLine($"     └─ {lektion.Beschreibung}");
                    Console.WriteLine($"     └─ Bibelstellen: {string.Join(", ", lektion.Bibelstellen)}");
                    Console.WriteLine($"     └─ Kernvers: {lektion.Kernvers}");
                    Console.WriteLine();
                }
                
                Console.WriteLine("─────────────────────────────────────────────────────────────────");
                Console.WriteLine();
            }
        }

        Console.WriteLine();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("  Ende der Auflistung");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("\nDrücken Sie eine Taste, um zurückzukehren...");
        Console.ReadKey();
    }

    static void ZeigeUebersicht()
    {
        Console.Clear();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("  📖 ÜBERSICHT");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine();
        Console.WriteLine($"Gesamtanzahl der Themen: {_themen?.Count ?? 0}");
        Console.WriteLine($"Gesamtanzahl der Lektionen: {_service?.GetGesamtanzahlLektionen() ?? 0}");
        Console.WriteLine();
        Console.WriteLine("THEMEN:");
        Console.WriteLine();

        if (_themen != null)
        {
            foreach (var thema in _themen)
            {
                Console.WriteLine($"  {thema.Nummer}. {thema.Titel}");
                Console.WriteLine($"     └─ {thema.Lektionen.Count} Lektionen");
            }
        }

        Console.WriteLine();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("\nDrücken Sie eine Taste, um zurückzukehren...");
        Console.ReadKey();
    }
}