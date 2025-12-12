namespace Bibelgemeinschaft.Models;

/// <summary>
/// Repräsentiert ein Bibelstudium-Thema mit mehreren Lektionen
/// </summary>
public class Thema
{
    public int Nummer { get; set; }
    public string Titel { get; set; } = string.Empty;
    public string Beschreibung { get; set; } = string.Empty;
    public List<Lektion> Lektionen { get; set; } = new();
}
