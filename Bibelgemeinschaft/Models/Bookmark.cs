namespace Bibelgemeinschaft.Models;

public class Bookmark
{
    public string? BookName { get; set; }
    public int Chapter { get; set; }
    public int Verse { get; set; }
    public string? Note { get; set; }
    public DateTime CreatedDate { get; set; }
}
