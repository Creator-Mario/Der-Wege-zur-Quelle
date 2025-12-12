# Benutzerhandbuch - Bibelstudien-App

## Übersicht

Die Bibelstudien-App ist eine umfassende Konsolenanwendung für das Studium der Bibel (Elberfelder 1905). Sie bietet leistungsstarke Funktionen zum Lesen, Suchen und Organisieren Ihrer Bibelstudien.

## Hauptfunktionen

### 1. Bibelbücher durchsuchen

**Wie zu verwenden:**
1. Wählen Sie Option `[1]` im Hauptmenü
2. Wählen Sie ein Buch aus der Liste (1-66)
3. Geben Sie eine Kapitelnummer ein oder `a` für alle Kapitel
4. Optional: Setzen Sie ein Lesezeichen mit Notiz

**Besonderheiten:**
- Alle 66 Bücher der Bibel verfügbar
- Einzelne Kapitel oder alle Kapitel eines Buches anzeigen
- Verse sind nummeriert für einfache Referenz
- Direkt aus der Leseansicht Lesezeichen setzen

### 2. Nach Versen suchen

**Wie zu verwenden:**
1. Wählen Sie Option `[2]` im Hauptmenü
2. Geben Sie einen Suchbegriff ein
3. Die App zeigt bis zu 50 passende Verse

**Suchfunktionen:**
- Volltextsuche durch die gesamte Bibel
- Groß-/Kleinschreibung wird ignoriert
- Zeigt Buch, Kapitel und Versnummer für jeden Treffer
- Schnelle Ergebnisse durch optimierte Suche

**Beispiele für Suchbegriffe:**
- `Liebe` - findet alle Verse mit dem Wort "Liebe"
- `Gott` - findet alle Verse mit "Gott"
- `Himmel` - findet alle Verse über den Himmel

### 3. Tagesvers

**Wie zu verwenden:**
1. Wählen Sie Option `[3]` im Hauptmenü
2. Ein zufälliger Vers wird angezeigt
3. Optional: Setzen Sie ein Lesezeichen für diesen Vers

**Verwendungszweck:**
- Tägliche spirituelle Inspiration
- Entdeckung neuer Verse
- Meditation über Gottes Wort
- Perfekt für tägliche Andachten

### 4. Lesezeichen verwalten

**Wie zu verwenden:**
1. Wählen Sie Option `[4]` im Hauptmenü
2. Sehen Sie alle gespeicherten Lesezeichen
3. Wählen Sie ein Lesezeichen zum Anzeigen
4. Oder löschen Sie mit `d` + Nummer (z.B. `d1` für erstes Lesezeichen)

**Lesezeichen-Funktionen:**
- Speichern Sie wichtige Verse mit Referenzen
- Fügen Sie persönliche Notizen hinzu
- Datum wird automatisch gespeichert
- Lesezeichen bleiben zwischen Sitzungen erhalten

**Beispiel-Workflow:**
1. Finden Sie einen wichtigen Vers beim Lesen
2. Antworten Sie mit `j` auf die Lesezeichen-Frage
3. Geben Sie eine Notiz ein wie "Vers über Hoffnung"
4. Später: Finden Sie alle Ihre Notizen im Lesezeichen-Manager

### 5. Über diese Bibel

**Informationen:**
- Bibelübersetzung: Elberfelder (1905)
- Sprache: Deutsch
- Status: Gemeinfrei (Public Domain)
- Quelle: Unbound Bible Projekt

## Tastaturkürzel und Tipps

### Navigation
- Nummern eingeben für Menüauswahl
- `0` - Zurück zum vorherigen Menü
- `6` - Beenden (im Hauptmenü)

### Bei der Kapiteleingabe
- Zahl eingeben - Zeigt einzelnes Kapitel
- `a` - Zeigt alle Kapitel des Buches
- `0` - Zurück zur Buchauswahl

### Lesezeichen
- `j` - Ja, Lesezeichen setzen
- `n` - Nein, kein Lesezeichen
- `d` + Nummer - Lesezeichen löschen (z.B. `d3`)

## Datenverwaltung

### Wo werden Daten gespeichert?

**Bibeldaten:**
- Gespeichert in: `Data/elberfelder_1905.json`
- Größe: ~6.6 MB
- Enthält: Alle 31.102 Verse der Bibel

**Lesezeichen:**
- Gespeichert in: `bookmarks.json` (im Programmverzeichnis)
- Format: JSON
- Automatisch gespeichert bei jeder Änderung

### Backup

Sie können Ihre Lesezeichen sichern, indem Sie die Datei `bookmarks.json` kopieren:

```bash
# Backup erstellen
cp bookmarks.json bookmarks_backup.json

# Wiederherstellen
cp bookmarks_backup.json bookmarks.json
```

## Häufige Probleme und Lösungen

### Problem: "Bible data file not found"
**Lösung:** Stellen Sie sicher, dass die Datei `Data/elberfelder_1905.json` existiert.

### Problem: Umlaute werden nicht richtig angezeigt
**Lösung:** Die App setzt automatisch UTF-8 Encoding. Wenn Probleme auftreten, überprüfen Sie die Konsolen-Einstellungen.

### Problem: Lesezeichen gehen verloren
**Lösung:** Die `bookmarks.json` Datei muss im gleichen Verzeichnis wie die Anwendung sein.

## Erweiterte Nutzung

### Mehrere Suchbegriffe

Für komplexere Suchen können Sie:
1. Mehrere Suchvorgänge durchführen
2. Lesezeichen für interessante Verse setzen
3. Diese später in der Lesezeichen-Verwaltung überprüfen

### Studienpläne erstellen

Verwenden Sie Lesezeichen-Notizen für:
- Thematische Studien (z.B. "Glaube", "Hoffnung", "Liebe")
- Chronologische Lesepläne
- Persönliche Erkenntnisse
- Gebetsanliegen

**Beispiel-Notizen:**
- "Studium über Gebet - Woche 1"
- "Vers für heute auswendig lernen"
- "Für Andacht am Sonntag verwenden"

## Technische Informationen

### Systemanforderungen
- .NET 10.0 Runtime oder höher
- ~10 MB Speicherplatz
- Konsolenzugriff

### Performance
- Schnelle Ladezeit: ~1-2 Sekunden
- Sofortige Suche in 31.000+ Versen
- Minimaler Speicherverbrauch

### Plattformkompatibilität
- ✅ Windows 10/11
- ✅ Linux (Ubuntu, Debian, etc.)
- ✅ macOS
- ✅ Docker Container

## Support und Feedback

Diese App wurde entwickelt von Mario R. Denzer.

Für Fragen oder Feedback, besuchen Sie das GitHub-Repository:
https://github.com/Creator-Mario/Der-Wege-zur-Quelle

## Spirituelle Nutzung

Diese App soll Ihnen helfen:
- Gottes Wort täglich zu studieren
- Verse für verschiedene Lebenssituationen zu finden
- Persönliche Erkenntnisse zu dokumentieren
- In der Bibel zu wachsen

> "Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege." - Psalm 119:105

---

© Mario R. Denzer | Elberfelder (1905) - Public Domain
