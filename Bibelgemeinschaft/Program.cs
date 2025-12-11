using Bibelgemeinschaft.Services;

namespace Bibelgemeinschaft;

internal class Program
{
    static void Main(string[] args)
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8;
        
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("  📖 Die Bibel – Glauben der Weg zur Quelle");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine();
        Console.WriteLine("© Mario R. Denzer");
        Console.WriteLine();
        
        var service = new BibelstudiumService();
        var themen = service.GetAlleThemen();
        
        Console.WriteLine("╔═══════════════════════════════════════════════════════════════╗");
        Console.WriteLine("║  AUFLISTUNG ALLER THEMEN UND LEKTIONEN                        ║");
        Console.WriteLine("╚═══════════════════════════════════════════════════════════════╝");
        Console.WriteLine();
        Console.WriteLine($"Gesamtanzahl der Themen: {themen.Count}");
        Console.WriteLine($"Gesamtanzahl der Lektionen: {service.GetGesamtanzahlLektionen()}");
        Console.WriteLine();
        Console.WriteLine("─────────────────────────────────────────────────────────────────");
        Console.WriteLine();

        foreach (var thema in themen)
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

        Console.WriteLine();
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine("  Ende der Auflistung");
        Console.WriteLine("═══════════════════════════════════════════════════════════════");
        Console.WriteLine();
        Console.WriteLine("Drücken Sie eine Taste zum Beenden...");
        Console.ReadKey();
    }
}