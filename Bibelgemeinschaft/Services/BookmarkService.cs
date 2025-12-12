using System.Text.Json;
using Bibelgemeinschaft.Models;

namespace Bibelgemeinschaft.Services;

public class BookmarkService
{
    private List<Bookmark> _bookmarks;
    private readonly string _bookmarksPath;

    public BookmarkService(string bookmarksPath)
    {
        _bookmarksPath = bookmarksPath;
        _bookmarks = new List<Bookmark>();
    }

    public async Task LoadBookmarksAsync()
    {
        if (File.Exists(_bookmarksPath))
        {
            string jsonContent = await File.ReadAllTextAsync(_bookmarksPath);
            _bookmarks = JsonSerializer.Deserialize<List<Bookmark>>(jsonContent) ?? new List<Bookmark>();
        }
    }

    public async Task SaveBookmarksAsync()
    {
        string jsonContent = JsonSerializer.Serialize(_bookmarks, new JsonSerializerOptions { WriteIndented = true });
        await File.WriteAllTextAsync(_bookmarksPath, jsonContent);
    }

    public void AddBookmark(string bookName, int chapter, int verse, string note = "")
    {
        var bookmark = new Bookmark
        {
            BookName = bookName,
            Chapter = chapter,
            Verse = verse,
            Note = note,
            CreatedDate = DateTime.Now
        };
        _bookmarks.Add(bookmark);
    }

    public List<Bookmark> GetAllBookmarks()
    {
        return _bookmarks.OrderByDescending(b => b.CreatedDate).ToList();
    }

    public void RemoveBookmark(int index)
    {
        if (index >= 0 && index < _bookmarks.Count)
        {
            _bookmarks.RemoveAt(index);
        }
    }
}
