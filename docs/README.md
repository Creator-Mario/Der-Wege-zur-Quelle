# Die Bibel – Glauben der Weg zur Quelle
## Web-App Demo Version

### 🌟 Überblick

Dies ist eine Demo-Version der biblischen Studien-App mit 12 Kapiteln und 120 Lektionen.

### 📂 Dateien

- `index.html` - Hauptseite der Anwendung
- `styles.css` - Styling (Farbschema: Himmelblau, Goldgelb, Beige, Braun)
- `data.js` - Kursdaten mit allen 12 Kapiteln und 120 Lektionen
- `app.js` - Anwendungslogik und Interaktivität

### 🚀 Verwendung

**Option 1: Lokal öffnen (Offline)**
1. Öffnen Sie `index.html` direkt in Ihrem Browser (Doppelklick auf die Datei)
2. Die App funktioniert komplett offline
3. Kopieren Sie den ganzen Ordner auf USB-Stick für mobile Nutzung

**Option 2: Mit einem lokalen Server**
```bash
# Mit Python 3
python3 -m http.server 8000

# Mit Node.js (npx)
npx serve

# Dann öffnen Sie: http://localhost:8000
```

**Option 3: GitHub Pages (Online-Zugriff)**
1. Gehen Sie zu Repository Settings → Pages
2. Wählen Sie den Branch und den `/docs` Ordner
3. Speichern Sie die Einstellungen
4. Ihre App ist dann unter `https://creator-mario.github.io/Der-Wege-zur-Quelle/` verfügbar

Siehe `GITHUB_PAGES_ANLEITUNG.md` für detaillierte Anweisungen.

### ✨ Funktionen

#### ✅ Implementiert (Demo)
- 12 Kapitel mit je 10 Lektionen (120 gesamt)
- Responsive Design für alle Geräte
- Kursübersicht und Navigation
- Lektionsansicht mit Struktur:
  - Einleitung
  - Bibelverse
  - Erklärung
  - Fremdwörter (DE/EN/ID)
  - Anwendung im Alltag
  - Arbeitsauftrag
  - Missionsübung
  - Mini-Test
- Tagesvers-Funktion
- Mehrsprachige Vorbereitung (DE/EN/ID)
- Farbschema gemäß Branding

#### 🔜 Für vollständige Version geplant
- Firebase/Supabase Backend-Integration
- Benutzer-Registrierung und -Anmeldung
- Fortschritts-Tracking
- Vollständige Lektionsinhalte mit spezifischen Bibelversen
- Interaktive Tests mit Sofort-Feedback
- Zertifikate nach Kapitelabschluss
- Chat und Community-Funktionen
- WhatsApp-Integration
- Offline-Modus mit Service Worker
- PDF-Export für Zertifikate

### 📊 Kursstruktur

**Kapitel 1:** Grundlagen der Bibel  
**Kapitel 2:** Der Weg Gottes mit Israel  
**Kapitel 3:** Gottes Weisheit für das Leben  
**Kapitel 4:** Die Propheten und ihre Botschaft  
**Kapitel 5:** Die Geburt des Retters  
**Kapitel 6:** Das Leben und Wirken Jesu  
**Kapitel 7:** Tod und Auferstehung  
**Kapitel 8:** Die Geburt der Gemeinde  
**Kapitel 9:** Leben im Glauben  
**Kapitel 10:** Kampf und Hoffnung  
**Kapitel 11:** Die Offenbarung Gottes  
**Kapitel 12:** Zusammenfassung, Anwendung und Missionstraining  

Jedes Kapitel enthält 10 detaillierte Lektionen.

### 🎨 Design

- **Farbschema:** Himmelblau (#87CEEB), Goldgelb (#DAA520), Beige (#F5F5DC), Braun (#8B4513)
- **Responsive:** Funktioniert auf Desktop, Tablet und Mobile
- **Modern:** Klare Struktur, ansprechende Optik

### 📜 Copyright

© Glauben der Weg zur Quelle – Mario R. Denzer  
Creator & Admin: Mario R. Denzer  
Kontakt: marioreinerdenzer@gmail.com  
Alle Rechte vorbehalten.

### 🔧 Technische Hinweise

Diese Demo-Version ist:
- Rein statisch (HTML/CSS/JavaScript)
- Offline-fähig (nach dem ersten Laden)
- Keine Server-Anforderungen
- Kann auf jedem Webserver gehostet werden

Für die vollständige Version mit Backend-Funktionen empfehle ich:
- **Frontend:** React oder Vue.js
- **Backend:** Firebase (einfacher) oder Supabase (mehr Kontrolle)
- **Hosting:** Vercel, Netlify oder Firebase Hosting
