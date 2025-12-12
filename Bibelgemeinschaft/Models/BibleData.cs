namespace Bibelgemeinschaft.Models;

public class BibleData
{
    public BibleMetadata? metadata { get; set; }
    public List<BibleVerse>? verses { get; set; }
}

public class BibleMetadata
{
    public string? name { get; set; }
    public string? shortname { get; set; }
    public string? lang_short { get; set; }
    public string? year { get; set; }
}

public class BibleVerse
{
    public string? book_name { get; set; }
    public int book { get; set; }
    public int chapter { get; set; }
    public int verse { get; set; }
    public string? text { get; set; }
}
