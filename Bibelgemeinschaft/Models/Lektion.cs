namespace Bibelgemeinschaft.Models;

/// <summary>
/// Repräsentiert eine einzelne Lektion innerhalb eines Themas
/// </summary>
public class Lektion
{
    public int Nummer { get; set; }
    public string Titel { get; set; } = string.Empty;
    public string Beschreibung { get; set; } = string.Empty;
    public List<string> Bibelstellen { get; set; } = new();
    public string Kernvers { get; set; } = string.Empty;
}
