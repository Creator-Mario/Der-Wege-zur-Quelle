# Die Bibel – Der Weg zur Quelle

Eine umfassende Bibelstudien-Anwendung auf Basis der Elberfelder (1905) Übersetzung.

## Funktionen

Diese interaktive Konsolenanwendung bietet folgende Möglichkeiten:

### 📖 Bibelbücher durchsuchen
- Durchsuchen Sie alle 66 Bücher der Bibel
- Lesen Sie einzelne Kapitel oder alle Kapitel eines Buches
- Übersichtliche Darstellung mit Versnummern

### 🔍 Verse suchen
- Volltextsuche durch die gesamte Bibel
- Findet bis zu 50 Treffer pro Suche
- Zeigt Buch, Kapitel und Versnummer für jeden Treffer

### ✨ Tagesvers
- Zufälliger Bibelvers zur täglichen Inspiration
- Schöne formatierte Darstellung

### 🔖 Lesezeichen
- Speichern Sie wichtige Verse mit persönlichen Notizen
- Verwalten und durchsuchen Sie Ihre gespeicherten Verse
- Lesezeichen werden persistent gespeichert

### ℹ️ Informationen
- Details zur verwendeten Bibelübersetzung
- Übersicht über alle Funktionen

## Technische Details

- **Sprache**: C# / .NET 10.0
- **Bibelübersetzung**: Elberfelder (1905) - Public Domain
- **Datenspeicherung**: JSON-Format für Bibeldaten und Lesezeichen
- **Plattform**: Plattformübergreifend (Windows, Linux, macOS)

## Installation und Verwendung

### Voraussetzungen
- .NET 10.0 SDK oder höher

### Anwendung starten

```bash
cd Bibelgemeinschaft
dotnet run
```

### Build erstellen

```bash
cd Bibelgemeinschaft
dotnet build -c Release
```

Die Anwendung wird im Verzeichnis `bin/Release/net10.0/` erstellt.

### Eigenständige Ausführung

Nach dem Build können Sie die Anwendung direkt ausführen:

```bash
cd bin/Release/net10.0
./Bibelgemeinschaft  # Linux/macOS
Bibelgemeinschaft.exe  # Windows
```

## Projektstruktur

```
Bibelgemeinschaft/
├── Models/              # Datenmodelle (BibleData, Bookmark)
├── Services/            # Geschäftslogik (BibleService, BookmarkService)
├── UI/                  # Benutzeroberfläche (UIHelper)
├── Data/                # Bibeldaten (JSON)
├── Program.cs           # Einstiegspunkt
└── BibleStudyApp.cs    # Hauptanwendung
```

## Verwendete Daten

Die Anwendung verwendet die **Elberfelder (1905)** Bibelübersetzung, die gemeinfrei ist. Die Daten stammen aus dem "Unbound Bible" Projekt.

## Autor

© Mario R. Denzer

## Lizenz

Siehe LICENSE.txt für Details.
