using System;
using System.Collections.Generic;

namespace Bibelgemeinschaft;

internal class Program
{
    private const string SeparatorLine = "═══════════════════════════════════════════════════════════════";

    static void Main(string[] args)
    {
        var translator = new Translator();

        var requestedLanguage = args.Length > 0 ? args[0] : null;
        if (!translator.TrySetLanguage(requestedLanguage))
        {
            RequestLanguage(translator);
        }
        else
        {
            Console.WriteLine(translator.Translate("LanguageConfirmed", translator.GetLanguageNativeName(translator.CurrentLanguage)));
            Console.WriteLine();
        }

        DisplayWelcome(translator);
    }

    private static void RequestLanguage(Translator translator)
    {
        Console.WriteLine(translator.Translate("SelectLanguage"));
        foreach (var language in translator.SupportedLanguages)
        {
            Console.WriteLine($"[{language}] {translator.GetLanguageNativeName(language)}");
        }

        Console.Write("> ");
        var input = Console.ReadLine();
        if (!translator.TrySetLanguage(input))
        {
            Console.WriteLine(translator.Translate("FallbackLanguage", translator.GetLanguageNativeName(translator.CurrentLanguage)));
        }
        else
        {
            Console.WriteLine(translator.Translate("LanguageConfirmed", translator.GetLanguageNativeName(translator.CurrentLanguage)));
        }

        Console.WriteLine();
    }

    private static void DisplayWelcome(Translator translator)
    {
        Console.WriteLine(SeparatorLine);
        Console.WriteLine($"  📖 {translator.Translate("AppTitle")}");
        Console.WriteLine(SeparatorLine);
        Console.WriteLine();
        Console.WriteLine($"© {translator.Translate("Author")}");
        Console.WriteLine();
        Console.WriteLine(translator.Translate("PressAnyKey"));
        Console.ReadKey();
    }
}

internal class Translator
{
    private const string DefaultLanguage = "de";

    private readonly Dictionary<string, Dictionary<string, string>> _translations = new(StringComparer.OrdinalIgnoreCase)
    {
        ["de"] = new(StringComparer.Ordinal)
        {
            ["SelectLanguage"] = "Bitte Sprache auswählen:",
            ["LanguageConfirmed"] = "Sprache auf {0} gesetzt.",
            ["FallbackLanguage"] = "Unbekannte Eingabe. Standardsprache {0} wird genutzt.",
            ["AppTitle"] = "Die Bibel – Glauben der Weg zur Quelle",
            ["Author"] = "Mario R. Denzer",
            ["PressAnyKey"] = "Drücken Sie eine Taste..."
        },
        ["en"] = new(StringComparer.Ordinal)
        {
            ["SelectLanguage"] = "Please choose a language:",
            ["LanguageConfirmed"] = "Language set to {0}.",
            ["FallbackLanguage"] = "Unknown input. Default language {0} will be used.",
            ["AppTitle"] = "The Bible – Faith the Way to the Source",
            ["Author"] = "Mario R. Denzer",
            ["PressAnyKey"] = "Press any key..."
        }
    };

    private readonly Dictionary<string, string> _languageNames = new(StringComparer.OrdinalIgnoreCase)
    {
        ["de"] = "Deutsch",
        ["en"] = "English"
    };

    public string CurrentLanguage { get; private set; } = DefaultLanguage;

    public IEnumerable<string> SupportedLanguages => _translations.Keys;

    public bool TrySetLanguage(string? languageCode)
    {
        if (string.IsNullOrWhiteSpace(languageCode))
        {
            return false;
        }

        languageCode = languageCode.Trim().ToLowerInvariant();
        if (!_translations.ContainsKey(languageCode))
        {
            return false;
        }

        CurrentLanguage = languageCode;
        return true;
    }

    public string Translate(string key, params object[] args)
    {
        if (string.IsNullOrWhiteSpace(key))
        {
            return string.Empty;
        }

        if (TryGetTranslation(CurrentLanguage, key, out var value) || TryGetTranslation(DefaultLanguage, key, out value))
        {
            return args.Length > 0 ? string.Format(value, args) : value;
        }

        return string.Empty;
    }

    public string GetLanguageNativeName(string languageCode)
    {
        return _languageNames.TryGetValue(languageCode, out var name) ? name : languageCode;
    }

    private bool TryGetTranslation(string languageCode, string key, out string value)
    {
        value = string.Empty;

        if (!_translations.TryGetValue(languageCode, out var translations))
        {
            return false;
        }

        if (translations.TryGetValue(key, out var foundValue) && foundValue is not null)
        {
            value = foundValue;
            return true;
        }

        return false;
    }
}
