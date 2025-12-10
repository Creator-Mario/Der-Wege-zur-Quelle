# GitHub Pages Setup - Schritt-für-Schritt Anleitung

## So veröffentlichen Sie die Web-App auf GitHub Pages

### Schritt 1: Gehen Sie zu Repository Settings

1. Öffnen Sie Ihr Repository auf GitHub: `https://github.com/Creator-Mario/Der-Wege-zur-Quelle`
2. Klicken Sie oben rechts auf **Settings** (Einstellungen)

![GitHub Settings](https://docs.github.com/assets/cb-28266/mw-1440/images/help/repository/repo-actions-settings.webp)

---

### Schritt 2: Navigieren Sie zu Pages

1. Im linken Menü scrollen Sie nach unten
2. Klicken Sie auf **Pages** (unter "Code and automation")

![Pages Menu](https://docs.github.com/assets/cb-40166/mw-1440/images/help/pages/pages-tab.webp)

---

### Schritt 3: Branch auswählen

Konfigurieren Sie die Quelle für GitHub Pages:

1. **Source**: Wählen Sie "Deploy from a branch"
2. **Branch**: Wählen Sie `copilot/create-working-study-app` aus dem Dropdown
3. **Folder**: Wählen Sie `/webapp` aus dem zweiten Dropdown (nicht `/root`)
4. Klicken Sie auf **Save**

```
┌─────────────────────────────────────────────────────┐
│ Source                                               │
│ ○ Deploy from a branch                              │
│                                                      │
│ Branch                                               │
│ ┌─────────────────────┐  ┌────────────┐            │
│ │ copilot/create-working-study-app ▼│  │ /webapp ▼ │            │
│ └─────────────────────┘  └────────────┘            │
│                                                      │
│               [Save]                                 │
└─────────────────────────────────────────────────────┘
```

![Branch Selection](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/select-branch-and-folder.webp)

---

### Schritt 4: Warten Sie auf die Veröffentlichung

1. Nach dem Speichern wird GitHub Pages Ihre Website erstellen
2. Dies dauert etwa 1-2 Minuten
3. Aktualisieren Sie die Seite nach einer Minute

Sie sehen dann eine grüne Box mit dem Text:
```
✓ Your site is live at https://creator-mario.github.io/Der-Wege-zur-Quelle/
```

---

### Schritt 5: Ihre App ist online!

Öffnen Sie die URL in Ihrem Browser:

**https://creator-mario.github.io/Der-Wege-zur-Quelle/**

Die Web-App ist jetzt für jeden zugänglich!

---

## Wichtige Hinweise

### ✅ Richtige Einstellungen:
- **Branch**: `copilot/create-working-study-app`
- **Folder**: `/webapp` (WICHTIG: Nicht `/root` oder `/ (root)`)

### ❌ Häufige Fehler:
- Wenn Sie `/root` oder `/ (root)` wählen, wird die App NICHT funktionieren
- Die Dateien müssen im `/webapp` Ordner sein
- Der Branch muss `copilot/create-working-study-app` sein (nicht `main` oder `master`)

### 🔄 Bei Änderungen:
- Wenn Sie Dateien im `/webapp` Ordner ändern und committen
- Wird GitHub Pages automatisch nach 1-2 Minuten aktualisiert
- Kein weiteres Setup nötig

---

## Visuelle Zusammenfassung

```
Repository Settings
    ↓
  Pages
    ↓
Source: Deploy from a branch
    ↓
Branch: copilot/create-working-study-app
    ↓
Folder: /webapp
    ↓
  [Save]
    ↓
Warten 1-2 Minuten
    ↓
✓ Site live!
```

---

## Alternative: Lokales Testen

Wenn Sie die App lokal testen möchten (ohne GitHub Pages):

1. Gehen Sie zum Ordner: `Der-Wege-zur-Quelle/webapp/`
2. Doppelklicken Sie auf `index.html`
3. Die App öffnet sich in Ihrem Standard-Browser

Oder mit einem lokalen Server:

```bash
cd webapp
python3 -m http.server 8000
# Öffnen Sie: http://localhost:8000
```

---

## Probleme?

Falls die Seite nach 5 Minuten nicht erscheint:

1. Überprüfen Sie, ob der Branch `copilot/create-working-study-app` existiert
2. Überprüfen Sie, ob der Ordner `/webapp` im Branch existiert
3. Gehen Sie zu "Actions" Tab und prüfen Sie, ob der "pages build and deployment" erfolgreich war
4. Bei Fehlern: Wählen Sie Settings → Pages erneut und speichern Sie die Einstellungen

---

**Viel Erfolg! 🎉**
