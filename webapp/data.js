// Course Data - 12 Chapters with 10 Lessons each
const courseData = [
    {
        id: 1,
        title: "Grundlagen der Bibel",
        subtitle: "Ursprung, Aufbau und Bedeutung der Heiligen Schrift",
        lessons: [
            { num: 1, title: "Was ist die Bibel?", desc: "Ursprung, Begriff, Überblick 66 Bücher" },
            { num: 2, title: "Inspiration und Offenbarung", desc: "Unterschied, Autorität der Schrift" },
            { num: 3, title: "Der Kanon der Schrift", desc: "Kriterien AT/NT, Bedeutung" },
            { num: 4, title: "Textüberlieferung", desc: "Masoretischer Text, Septuaginta, Vulgata, Textkritik" },
            { num: 5, title: "Übersetzungen heute", desc: "Elberfelder CSV, Vergleich mit anderen" },
            { num: 6, title: "Die Botschaft der Bibel", desc: "Schöpfung, Fall, Erlösung, Hoffnung" },
            { num: 7, title: "Gottes Wort im Alltag", desc: "Hören, Tun, geistliche Disziplin" },
            { num: 8, title: "Bibel in der Gemeinschaft", desc: "Lehre, Auslegung, Einheit" },
            { num: 9, title: "Warum verbindlich?", desc: "Wahrheit, Zuverlässigkeit, Gehorsam" },
            { num: 10, title: "Bibel und Mission", desc: "Auftrag, Verkündigung, Praxis" }
        ]
    },
    {
        id: 2,
        title: "Der Weg Gottes mit Israel",
        subtitle: "Geschichte und Bund",
        lessons: [
            { num: 1, title: "Abraham und der Bund", desc: "Verheißung, Glaube, Segen für die Nationen" },
            { num: 2, title: "Mose und Exodus", desc: "Befreiung, Identität, Gottes Führung" },
            { num: 3, title: "Sinai und das Gesetz", desc: "Ziel des Gesetzes, Liebe zu Gott" },
            { num: 4, title: "Wüstenzeit", desc: "Prüfung, Treue, Lernen im Prozess" },
            { num: 5, title: "Landnahme (Josua)", desc: "Mut, Verheißung, Gehorsam" },
            { num: 6, title: "Richterzeit", desc: "Zyklen, Ruf zur Umkehr, Gottes Erbarmen" },
            { num: 7, title: "Monarchie", desc: "Saul, David, Salomo (Samuel–Könige)" },
            { num: 8, title: "Reichsteilung und Prophetischer Ruf", desc: "Abfall, Prophetenstimme" },
            { num: 9, title: "Exil und Heimkehr", desc: "Wiederaufbau, Erneuerung (Esra–Nehemia)" },
            { num: 10, title: "Gottes Treue trotz Untreue", desc: "Bundeskonstanz, Hoffnung" }
        ]
    },
    {
        id: 3,
        title: "Gottes Weisheit für das Leben",
        subtitle: "Weisheitsliteratur",
        lessons: [
            { num: 1, title: "Psalmen – Einführung", desc: "Formen des Gebets und Lobpreises" },
            { num: 2, title: "Psalmen – Klage und Vertrauen", desc: "Gott in Leid und Hoffnung" },
            { num: 3, title: "Sprüche – Gottesfurcht", desc: "Anfang der Erkenntnis, Alltagsweisheit" },
            { num: 4, title: "Sprüche – Worte und Taten", desc: "Sprache, Arbeit, Beziehungen" },
            { num: 5, title: "Hiob – Leid und Gottes Souveränität", desc: "Fragen, Begegnung, Demut" },
            { num: 6, title: "Prediger – Sinn und Vergänglichkeit", desc: "unter der Sonne vs. vor Gott" },
            { num: 7, title: "Hoheslied – Liebe und Symbolik", desc: "Treue, Schönheit, Reinheit" },
            { num: 8, title: "Gebet als Lebensstil", desc: "Strukturierte und freie Gebete" },
            { num: 9, title: "Weisheit und Charakterbildung", desc: "Tugenden und Laster" },
            { num: 10, title: "Weisheit missionarisch leben", desc: "Zeugnis durch integren Lebensstil" }
        ]
    },
    {
        id: 4,
        title: "Die Propheten und ihre Botschaft",
        subtitle: "Große und kleine Propheten",
        lessons: [
            { num: 1, title: "Jesaja – Gericht und Hoffnung", desc: "Heiliger Gott, Messiasverheißung" },
            { num: 2, title: "Jeremia – Neuer Bund", desc: "Herz, Umkehr, Treue Gottes" },
            { num: 3, title: "Klagelieder – Trauer mit Hoffnung", desc: "geistliche Verarbeitung von Verlust" },
            { num: 4, title: "Hesekiel – Herrlichkeit Gottes", desc: "Visionen, neues Herz, neuer Geist" },
            { num: 5, title: "Daniel – Treue im Exil", desc: "Mut, Souveränität Gottes über Reiche" },
            { num: 6, title: "Hosea–Amos", desc: "Liebe, Gerechtigkeit, soziale Verantwortung" },
            { num: 7, title: "Jona–Micha", desc: "Barmherzigkeit Gottes, Demut, Gerecht handeln" },
            { num: 8, title: "Nahum–Habakuk", desc: "Gottes Recht, Glaube trotz Fragen" },
            { num: 9, title: "Zefanja–Haggai", desc: "Tag des HERRN, Prioritäten ordnen" },
            { num: 10, title: "Sacharja–Maleachi", desc: "Messias, Vorbereitung, Erwartung" }
        ]
    },
    {
        id: 5,
        title: "Die Geburt des Retters",
        subtitle: "Evangelien – Ursprung",
        lessons: [
            { num: 1, title: "Evangelien – Überblick", desc: "Vier Perspektiven, ein Christus" },
            { num: 2, title: "Inkarnation", desc: "Das Wort wird Fleisch, Bedeutung für die Mission" },
            { num: 3, title: "Geburtsberichte", desc: "Erfüllung der Verheißungen" },
            { num: 4, title: "Johannes der Täufer", desc: "Ruf zur Umkehr, Wegbereiter" },
            { num: 5, title: "Jesu Taufe und Sendung", desc: "Sohnschaft, Geist, Auftrag" },
            { num: 6, title: "Versuchung in der Wüste", desc: "Gehorsam, Schriftgebrauch" },
            { num: 7, title: "Berufung der Jünger", desc: "Nachfolge, Gemeinschaftsbildung" },
            { num: 8, title: "Das Reich Gottes – Verkündigung", desc: "Kernbotschaft, Zeichen" },
            { num: 9, title: "Werte des Reiches (Bergpredigt)", desc: "Seligpreisungen, Herzgehorsam" },
            { num: 10, title: "Jesu Identität", desc: "Sohn Gottes, Messias, Herr" }
        ]
    },
    {
        id: 6,
        title: "Das Leben und Wirken Jesu",
        subtitle: "Lehre, Wunder, Gleichnisse",
        lessons: [
            { num: 1, title: "Gleichnisse – Warum und wie?", desc: "Offenbarung für Hörende" },
            { num: 2, title: "Gleichnisse – Reich Gottes", desc: "Säer, Senfkorn, Sauerteig" },
            { num: 3, title: "Wunder – Zeichen der Herrschaft", desc: "Heilungen, Naturwunder" },
            { num: 4, title: "Begegnungen", desc: "Nikodemus, Samariterin, Zachäus" },
            { num: 5, title: "Jüngerschaft", desc: "Kosten, Frucht, Auftrag" },
            { num: 6, title: "Gebet Jesu", desc: "Vaterunser, Gethsemane" },
            { num: 7, title: "Konflikte mit Leitern", desc: "Wahrheit, Barmherzigkeit, Mut" },
            { num: 8, title: "Ethik des Reiches", desc: "Feindesliebe, Vergebung, Barmherzigkeit" },
            { num: 9, title: "Sendung der Zwölf/Siebzig", desc: "Praxis der Mission" },
            { num: 10, title: "Christus im Zentrum", desc: "Weg, Wahrheit, Leben" }
        ]
    },
    {
        id: 7,
        title: "Tod und Auferstehung",
        subtitle: "Heilsgeschichte",
        lessons: [
            { num: 1, title: "Das letzte Abendmahl", desc: "Neues Bundeszeichen" },
            { num: 2, title: "Prozess und Kreuzigung", desc: "Stellvertretung, Erfüllung" },
            { num: 3, title: "Bedeutung des Kreuzes", desc: "Versöhnung, Rechtfertigung" },
            { num: 4, title: "Auferstehung", desc: "Sieg über Tod, neue Schöpfung" },
            { num: 5, title: "Erscheinungen", desc: "Bestätigung, Auftrag" },
            { num: 6, title: "Himmelfahrt und Verheißung", desc: "Geist und Wiederkunft" },
            { num: 7, title: "Soteriologie kompakt", desc: "Gnade, Glaube, Werke" },
            { num: 8, title: "Evangelium kommunizieren", desc: "Klar, biblisch, verständlich" },
            { num: 9, title: "Persönliches Zeugnis", desc: "Story, Struktur, Sensibilität" },
            { num: 10, title: "Kreuz und Mission", desc: "Motivation, Botschaft, Methode" }
        ]
    },
    {
        id: 8,
        title: "Die Geburt der Gemeinde",
        subtitle: "Apostelgeschichte und Mission",
        lessons: [
            { num: 1, title: "Pfingsten", desc: "Geist, Kraft, Sprachen, Gemeindegeburt" },
            { num: 2, title: "Petrus' Predigten", desc: "Christus im Zentrum, Umkehr, Taufe" },
            { num: 3, title: "Gemeinschaftsleben", desc: "Lehre, Brotbrechen, Gebete, Diakonie" },
            { num: 4, title: "Verfolgung und Standhaftigkeit", desc: "Mut, Gebet, Freude" },
            { num: 5, title: "Ausweitung der Mission", desc: "Juden, Samariter, Heiden" },
            { num: 6, title: "Paulus' Berufung", desc: "Gnade, Sendung, Strategie" },
            { num: 7, title: "Missionsreisen", desc: "Städte, Kulturen, Teams" },
            { num: 8, title: "Konfrontation und Dialog", desc: "Synagoge, Areopag, Häuser" },
            { num: 9, title: "Gemeindegründung", desc: "Kernelemente, Älteste, Lehrzentren" },
            { num: 10, title: "Leitprinzipien", desc: "Geistgeleitet, schriftgebunden, menschenliebend" }
        ]
    },
    {
        id: 9,
        title: "Leben im Glauben",
        subtitle: "Briefe – Lehre und Praxis",
        lessons: [
            { num: 1, title: "Römer – Evangelium und Gerechtigkeit", desc: "Grundlage des Glaubens" },
            { num: 2, title: "1./2. Korinther – Gemeinde und Gaben", desc: "Ordnung, Liebe" },
            { num: 3, title: "Galater – Freiheit in Christus", desc: "Gnade vs. Gesetzlichkeit" },
            { num: 4, title: "Epheser – Identität und Einheit", desc: "himmlische Segnungen" },
            { num: 5, title: "Philipper – Freude im Dienst", desc: "Demut, Ausrichtung" },
            { num: 6, title: "Kolosser – Christus genügt", desc: "Vorrang Christi" },
            { num: 7, title: "Thessalonicher – Hoffnung", desc: "Wiederkunft, Ermutigung" },
            { num: 8, title: "Pastoralbriefe – Leitung", desc: "Älteste, Lehre, Lebensführung" },
            { num: 9, title: "Hebräer – Christus und der neue Bund", desc: "Vollendung" },
            { num: 10, title: "Jakobus/1. Petrus/Judas", desc: "gelebter Glaube: Standhaftigkeit, Heiligkeit" }
        ]
    },
    {
        id: 10,
        title: "Kampf und Hoffnung",
        subtitle: "Prüfung, Standhaftigkeit, Eschatologie",
        lessons: [
            { num: 1, title: "Geistlicher Kampf", desc: "Waffenrüstung, Wachsamkeit" },
            { num: 2, title: "Versuchung und Befreiung", desc: "Wege zum Sieg" },
            { num: 3, title: "Leidensethik", desc: "Mit Christus leiden, mit ihm herrschen" },
            { num: 4, title: "Verfolgung und Zeugnis", desc: "Liebe, Wahrheit, Weisheit" },
            { num: 5, title: "Hoffnungstexte", desc: "Trost, Zusagen, Zukunft" },
            { num: 6, title: "Zeichen der Zeiten", desc: "Nüchternheit, Treue" },
            { num: 7, title: "Wachsam leben", desc: "Gebet, Heiligung, Dienst" },
            { num: 8, title: "Gemeinschaft in Krisen", desc: "Tragen, ermutigen, ordnen" },
            { num: 9, title: "Standhaftigkeit in Mission", desc: "Dranbleiben, Frucht" },
            { num: 10, title: "Der kommende Herr", desc: "Ausrichtung, Erwartung, Treue" }
        ]
    },
    {
        id: 11,
        title: "Die Offenbarung Gottes",
        subtitle: "Offenbarung – Vollendung",
        lessons: [
            { num: 1, title: "Aufbau und Bilder", desc: "Symbolik, Apokalyptik" },
            { num: 2, title: "Briefe an die Gemeinden", desc: "Liebe und Wahrheit" },
            { num: 3, title: "Thronsaal Gottes", desc: "Anbetung, Herrschaft" },
            { num: 4, title: "Kampf der Reiche", desc: "Gericht, Gerechtigkeit" },
            { num: 5, title: "Das Lamm siegt", desc: "Christus, Erlösung, Triumph" },
            { num: 6, title: "Warnung und Ermutigung", desc: "Treue bis zum Ende" },
            { num: 7, title: "Neue Himmel und neue Erde", desc: "Erfüllte Hoffnung" },
            { num: 8, title: "Neues Jerusalem", desc: "Gegenwart Gottes bei seinem Volk" },
            { num: 9, title: "Leben in Erwartung", desc: "Heiligkeit, Mission bis zur Vollendung" },
            { num: 10, title: "Offenbarung verkündigen", desc: "Trost und Ernst gemeinsam tragen" }
        ]
    },
    {
        id: 12,
        title: "Zusammenfassung, Anwendung und Missionstraining",
        subtitle: "Integration und Praxis",
        lessons: [
            { num: 1, title: "Der rote Faden der Bibel", desc: "Schöpfung bis Vollendung" },
            { num: 2, title: "Evangelium klar formulieren", desc: "Inhalte, Metaphern, Fallstricke" },
            { num: 3, title: "Lehr- und Predigtpraxis", desc: "Exegese, Struktur, Anwendung" },
            { num: 4, title: "Kleingruppen leiten", desc: "Fragen, Prozesse, Dynamiken" },
            { num: 5, title: "Apologetische Grundlagen", desc: "Gründe des Glaubens, sanft und klar" },
            { num: 6, title: "Ethik im Alltag", desc: "Liebe, Gerechtigkeit, Wahrhaftigkeit" },
            { num: 7, title: "Geistliche Disziplinen", desc: "Wort, Gebet, Fasten, Gemeinschaft" },
            { num: 8, title: "Missionsplanung lokal", desc: "Analyse, Team, Schritte" },
            { num: 9, title: "Interkulturelle Sensibilität", desc: "Kultur, Sprache, Respekt" },
            { num: 10, title: "Persönlicher Missionsplan", desc: "Ziele, Praxis, Rechenschaft" }
        ]
    }
];

// Sample Bible verses for daily verse feature
const bibleVerses = [
    { text: "Im Anfang schuf Gott die Himmel und die Erde.", ref: "1. Mose 1:1" },
    { text: "Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.", ref: "Johannes 3:16" },
    { text: "Der HERR ist mein Hirte, mir wird nichts mangeln.", ref: "Psalm 23:1" },
    { text: "Vertraut auf den HERRN für immer! Denn in Jah, dem HERRN, ist ein Fels der Ewigkeiten.", ref: "Jesaja 26:4" },
    { text: "Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.", ref: "Psalm 119:105" },
    { text: "Ich vermag alles durch den, der mich kräftigt.", ref: "Philipper 4:13" },
    { text: "Seid fröhlich in Hoffnung, geduldig in Bedrängnis, beharrlich im Gebet!", ref: "Römer 12:12" },
    { text: "Und wir wissen, dass denen, die Gott lieben, alle Dinge zum Guten mitwirken.", ref: "Römer 8:28" },
    { text: "Fürchte dich nicht, denn ich bin mit dir; weiche nicht, denn ich bin dein Gott.", ref: "Jesaja 41:10" },
    { text: "Selig sind, die nicht sehen und doch glauben!", ref: "Johannes 20:29" }
];
