using System.Text.Json;
using Bibelgemeinschaft.Models;

namespace Bibelgemeinschaft.Services;

public class BibleService
{
    private BibleData? _bibleData;
    private readonly string _dataPath;

    public BibleService(string dataPath)
    {
        _dataPath = dataPath;
    }

    public async Task LoadBibleDataAsync()
    {
        if (File.Exists(_dataPath))
        {
            string jsonContent = await File.ReadAllTextAsync(_dataPath);
            _bibleData = JsonSerializer.Deserialize<BibleData>(jsonContent);
        }
        else
        {
            throw new FileNotFoundException($"Bible data file not found at: {_dataPath}");
        }
    }

    public BibleMetadata? GetMetadata()
    {
        return _bibleData?.metadata;
    }

    public List<string> GetBookNames()
    {
        if (_bibleData?.verses == null) return new List<string>();
        
        return _bibleData.verses
            .Select(v => v.book_name)
            .Distinct()
            .Where(name => !string.IsNullOrEmpty(name))
            .ToList()!;
    }

    public int GetMaxChapter(string bookName)
    {
        if (_bibleData?.verses == null) return 0;
        
        return _bibleData.verses
            .Where(v => v.book_name == bookName)
            .Select(v => v.chapter)
            .DefaultIfEmpty(0)
            .Max();
    }

    public List<BibleVerse> GetChapter(string bookName, int chapter)
    {
        if (_bibleData?.verses == null) return new List<BibleVerse>();
        
        return _bibleData.verses
            .Where(v => v.book_name == bookName && v.chapter == chapter)
            .OrderBy(v => v.verse)
            .ToList();
    }

    public List<BibleVerse> SearchVerses(string searchText)
    {
        if (_bibleData?.verses == null || string.IsNullOrWhiteSpace(searchText)) 
            return new List<BibleVerse>();
        
        searchText = searchText.ToLower();
        return _bibleData.verses
            .Where(v => v.text != null && v.text.ToLower().Contains(searchText))
            .Take(50) // Limit to 50 results
            .ToList();
    }

    public BibleVerse? GetRandomVerse()
    {
        if (_bibleData?.verses == null || _bibleData.verses.Count == 0) 
            return null;
        
        Random random = new Random();
        int index = random.Next(_bibleData.verses.Count);
        return _bibleData.verses[index];
    }

    public BibleVerse? GetVerse(string bookName, int chapter, int verse)
    {
        if (_bibleData?.verses == null) return null;
        
        return _bibleData.verses
            .FirstOrDefault(v => v.book_name == bookName && 
                                v.chapter == chapter && 
                                v.verse == verse);
    }
}
