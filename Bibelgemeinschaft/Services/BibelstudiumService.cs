using Bibelgemeinschaft.Models;

namespace Bibelgemeinschaft.Services;

/// <summary>
/// Service zur Verwaltung von Bibelstudium-Themen und Lektionen
/// </summary>
public class BibelstudiumService
{
    /// <summary>
    /// Gibt alle verfügbaren Themen mit ihren Lektionen zurück
    /// </summary>
    public List<Thema> GetAlleThemen()
    {
        return new List<Thema>
        {
            new Thema
            {
                Nummer = 1,
                Titel = "Die Grundlagen des Glaubens",
                Beschreibung = "Eine Einführung in die fundamentalen Wahrheiten des christlichen Glaubens",
                Lektionen = new List<Lektion>
                {
                    new Lektion
                    {
                        Nummer = 1,
                        Titel = "Wer ist Gott?",
                        Beschreibung = "Die Natur und Eigenschaften Gottes verstehen",
                        Bibelstellen = new List<string> { "1. Mose 1,1", "Johannes 1,1-3", "Psalm 90,2" },
                        Kernvers = "Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott. (Johannes 1,1)"
                    },
                    new Lektion
                    {
                        Nummer = 2,
                        Titel = "Die Dreieinigkeit",
                        Beschreibung = "Vater, Sohn und Heiliger Geist - Ein Gott in drei Personen",
                        Bibelstellen = new List<string> { "Matthäus 28,19", "2. Korinther 13,13", "Johannes 14,16-17" },
                        Kernvers = "Die Gnade des Herrn Jesus Christus und die Liebe Gottes und die Gemeinschaft des Heiligen Geistes sei mit euch allen! (2. Korinther 13,13)"
                    },
                    new Lektion
                    {
                        Nummer = 3,
                        Titel = "Die Schöpfung",
                        Beschreibung = "Gott als Schöpfer des Himmels und der Erde",
                        Bibelstellen = new List<string> { "1. Mose 1", "Psalm 19,2", "Römer 1,20" },
                        Kernvers = "Im Anfang schuf Gott die Himmel und die Erde. (1. Mose 1,1)"
                    },
                    new Lektion
                    {
                        Nummer = 4,
                        Titel = "Der Sündenfall",
                        Beschreibung = "Wie die Sünde in die Welt kam und ihre Folgen",
                        Bibelstellen = new List<string> { "1. Mose 3", "Römer 5,12", "Römer 3,23" },
                        Kernvers = "Denn alle haben gesündigt und erlangen nicht die Herrlichkeit Gottes. (Römer 3,23)"
                    },
                    new Lektion
                    {
                        Nummer = 5,
                        Titel = "Jesus Christus - Der Erlöser",
                        Beschreibung = "Die Person und das Werk Jesu Christi",
                        Bibelstellen = new List<string> { "Johannes 3,16", "1. Timotheus 2,5", "Apostelgeschichte 4,12" },
                        Kernvers = "Denn so hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit jeder, der an ihn glaubt, nicht verloren geht, sondern ewiges Leben hat. (Johannes 3,16)"
                    }
                }
            },
            new Thema
            {
                Nummer = 2,
                Titel = "Der Weg zur Quelle - Leben mit Gott",
                Beschreibung = "Wie wir eine lebendige Beziehung zu Gott aufbauen und pflegen",
                Lektionen = new List<Lektion>
                {
                    new Lektion
                    {
                        Nummer = 1,
                        Titel = "Buße und Umkehr",
                        Beschreibung = "Der erste Schritt zur Errettung",
                        Bibelstellen = new List<string> { "Apostelgeschichte 3,19", "Lukas 15,7", "2. Korinther 7,10" },
                        Kernvers = "So tut nun Buße und bekehrt euch, dass eure Sünden ausgetilgt werden. (Apostelgeschichte 3,19)"
                    },
                    new Lektion
                    {
                        Nummer = 2,
                        Titel = "Der Glaube",
                        Beschreibung = "Was bedeutet es, an Jesus zu glauben?",
                        Bibelstellen = new List<string> { "Hebräer 11,1", "Epheser 2,8-9", "Römer 10,9-10" },
                        Kernvers = "Denn aus Gnade seid ihr errettet durch Glauben, und das nicht aus euch, Gottes Gabe ist es. (Epheser 2,8)"
                    },
                    new Lektion
                    {
                        Nummer = 3,
                        Titel = "Die Taufe",
                        Beschreibung = "Das Zeugnis des neuen Lebens",
                        Bibelstellen = new List<string> { "Matthäus 28,19", "Apostelgeschichte 2,38", "Römer 6,3-4" },
                        Kernvers = "Geht nun hin und macht alle Nationen zu Jüngern, und tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes. (Matthäus 28,19)"
                    },
                    new Lektion
                    {
                        Nummer = 4,
                        Titel = "Das Gebet",
                        Beschreibung = "Kommunikation mit Gott",
                        Bibelstellen = new List<string> { "Matthäus 6,9-13", "Philipper 4,6", "1. Thessalonicher 5,17" },
                        Kernvers = "Seid in nichts besorgt, sondern in allem lasst durch Gebet und Flehen mit Danksagung eure Anliegen vor Gott kundwerden. (Philipper 4,6)"
                    },
                    new Lektion
                    {
                        Nummer = 5,
                        Titel = "Das Bibelstudium",
                        Beschreibung = "Gottes Wort verstehen und anwenden",
                        Bibelstellen = new List<string> { "2. Timotheus 3,16-17", "Psalm 119,105", "Josua 1,8" },
                        Kernvers = "Alle Schrift ist von Gott eingegeben und nützlich zur Belehrung, zur Überführung, zur Zurechtweisung, zur Erziehung in der Gerechtigkeit. (2. Timotheus 3,16)"
                    },
                    new Lektion
                    {
                        Nummer = 6,
                        Titel = "Die Gemeinschaft der Gläubigen",
                        Beschreibung = "Die Bedeutung der Gemeinde",
                        Bibelstellen = new List<string> { "Apostelgeschichte 2,42", "Hebräer 10,24-25", "1. Korinther 12,12-27" },
                        Kernvers = "Und lasst uns aufeinander achthaben, um uns zur Liebe und zu guten Werken anzureizen. (Hebräer 10,24)"
                    }
                }
            },
            new Thema
            {
                Nummer = 3,
                Titel = "Das Leben als Christ",
                Beschreibung = "Praktische Anleitung für den christlichen Alltag",
                Lektionen = new List<Lektion>
                {
                    new Lektion
                    {
                        Nummer = 1,
                        Titel = "Die Frucht des Geistes",
                        Beschreibung = "Charakterentwicklung durch den Heiligen Geist",
                        Bibelstellen = new List<string> { "Galater 5,22-23", "Johannes 15,5", "Epheser 5,9" },
                        Kernvers = "Die Frucht des Geistes aber ist: Liebe, Freude, Friede, Langmut, Freundlichkeit, Güte, Treue, Sanftmut, Enthaltsamkeit. (Galater 5,22-23)"
                    },
                    new Lektion
                    {
                        Nummer = 2,
                        Titel = "Vergebung üben",
                        Beschreibung = "Wie wir anderen vergeben können",
                        Bibelstellen = new List<string> { "Matthäus 6,14-15", "Epheser 4,32", "Kolosser 3,13" },
                        Kernvers = "Seid aber zueinander gütig, mitleidig, und vergebt einander, so wie auch Gott in Christus euch vergeben hat. (Epheser 4,32)"
                    },
                    new Lektion
                    {
                        Nummer = 3,
                        Titel = "Nächstenliebe praktizieren",
                        Beschreibung = "Liebe in Aktion zeigen",
                        Bibelstellen = new List<string> { "Matthäus 22,39", "1. Johannes 3,18", "Jakobus 2,14-17" },
                        Kernvers = "Kinder, lasst uns nicht lieben mit Worten noch mit der Zunge, sondern in Tat und Wahrheit! (1. Johannes 3,18)"
                    },
                    new Lektion
                    {
                        Nummer = 4,
                        Titel = "Mit Versuchungen umgehen",
                        Beschreibung = "Strategien zur Überwindung von Versuchungen",
                        Bibelstellen = new List<string> { "1. Korinther 10,13", "Jakobus 1,12-15", "Matthäus 26,41" },
                        Kernvers = "Es hat euch bisher nur menschliche Versuchung betroffen. Gott aber ist treu; er wird nicht zulassen, dass ihr über euer Vermögen versucht werdet. (1. Korinther 10,13)"
                    },
                    new Lektion
                    {
                        Nummer = 5,
                        Titel = "Zeugnis geben",
                        Beschreibung = "Den Glauben mit anderen teilen",
                        Bibelstellen = new List<string> { "Matthäus 28,18-20", "1. Petrus 3,15", "Apostelgeschichte 1,8" },
                        Kernvers = "Seid aber allezeit bereit zur Verantwortung jedem gegenüber, der Rechenschaft von euch über die Hoffnung in euch fordert. (1. Petrus 3,15)"
                    }
                }
            },
            new Thema
            {
                Nummer = 4,
                Titel = "Die Verheißungen Gottes",
                Beschreibung = "Was Gott uns zusagt und verspricht",
                Lektionen = new List<Lektion>
                {
                    new Lektion
                    {
                        Nummer = 1,
                        Titel = "Ewiges Leben",
                        Beschreibung = "Die Gewissheit der Erlösung",
                        Bibelstellen = new List<string> { "Johannes 3,16", "1. Johannes 5,11-13", "Römer 8,38-39" },
                        Kernvers = "Und dies ist das Zeugnis: dass Gott uns ewiges Leben gegeben hat, und dieses Leben ist in seinem Sohn. (1. Johannes 5,11)"
                    },
                    new Lektion
                    {
                        Nummer = 2,
                        Titel = "Gottes Führung",
                        Beschreibung = "Er leitet uns auf dem richtigen Weg",
                        Bibelstellen = new List<string> { "Sprüche 3,5-6", "Psalm 32,8", "Jesaja 30,21" },
                        Kernvers = "Vertraue auf den HERRN mit deinem ganzen Herzen und stütze dich nicht auf deinen Verstand. Erkenne ihn auf allen deinen Wegen, und er wird deine Pfade ebnen. (Sprüche 3,5-6)"
                    },
                    new Lektion
                    {
                        Nummer = 3,
                        Titel = "Friede in Christus",
                        Beschreibung = "Der Friede, der allen Verstand übersteigt",
                        Bibelstellen = new List<string> { "Johannes 14,27", "Philipper 4,7", "Jesaja 26,3" },
                        Kernvers = "Frieden lasse ich euch, meinen Frieden gebe ich euch; nicht wie die Welt gibt, gebe ich euch. (Johannes 14,27)"
                    },
                    new Lektion
                    {
                        Nummer = 4,
                        Titel = "Kraft in Schwachheit",
                        Beschreibung = "Gottes Kraft wird in unserer Schwachheit vollkommen",
                        Bibelstellen = new List<string> { "2. Korinther 12,9", "Philipper 4,13", "Jesaja 40,29-31" },
                        Kernvers = "Alles vermag ich in dem, der mich kräftigt. (Philipper 4,13)"
                    },
                    new Lektion
                    {
                        Nummer = 5,
                        Titel = "Die Wiederkunft Christi",
                        Beschreibung = "Die gesegnete Hoffnung der Gläubigen",
                        Bibelstellen = new List<string> { "Johannes 14,1-3", "1. Thessalonicher 4,16-17", "Offenbarung 22,20" },
                        Kernvers = "Und wenn ich hingehe und euch eine Stätte bereite, so komme ich wieder und werde euch zu mir nehmen, damit auch ihr seid, wo ich bin. (Johannes 14,3)"
                    }
                }
            },
            new Thema
            {
                Nummer = 5,
                Titel = "Der Heilige Geist",
                Beschreibung = "Die dritte Person der Dreieinigkeit und sein Wirken",
                Lektionen = new List<Lektion>
                {
                    new Lektion
                    {
                        Nummer = 1,
                        Titel = "Wer ist der Heilige Geist?",
                        Beschreibung = "Die Person und Natur des Heiligen Geistes",
                        Bibelstellen = new List<string> { "Johannes 14,16-17", "Apostelgeschichte 5,3-4", "2. Korinther 3,17" },
                        Kernvers = "Der Herr aber ist der Geist; wo aber der Geist des Herrn ist, da ist Freiheit. (2. Korinther 3,17)"
                    },
                    new Lektion
                    {
                        Nummer = 2,
                        Titel = "Die Taufe im Heiligen Geist",
                        Beschreibung = "Erfüllt werden mit dem Heiligen Geist",
                        Bibelstellen = new List<string> { "Apostelgeschichte 2,1-4", "Apostelgeschichte 1,8", "Epheser 5,18" },
                        Kernvers = "Aber ihr werdet Kraft empfangen, wenn der Heilige Geist auf euch gekommen ist; und ihr werdet meine Zeugen sein. (Apostelgeschichte 1,8)"
                    },
                    new Lektion
                    {
                        Nummer = 3,
                        Titel = "Die Gaben des Geistes",
                        Beschreibung = "Geistliche Gaben zum Dienst an anderen",
                        Bibelstellen = new List<string> { "1. Korinther 12,4-11", "Römer 12,6-8", "1. Petrus 4,10" },
                        Kernvers = "Es gibt aber Verschiedenheiten von Gnadengaben, aber es ist derselbe Geist. (1. Korinther 12,4)"
                    },
                    new Lektion
                    {
                        Nummer = 4,
                        Titel = "Vom Geist geleitet werden",
                        Beschreibung = "Auf die Stimme des Geistes hören",
                        Bibelstellen = new List<string> { "Römer 8,14", "Galater 5,16", "Johannes 16,13" },
                        Kernvers = "Denn so viele durch den Geist Gottes geleitet werden, die sind Söhne Gottes. (Römer 8,14)"
                    }
                }
            },
            new Thema
            {
                Nummer = 6,
                Titel = "Die Bergpredigt",
                Beschreibung = "Die Lehren Jesu über das Reich Gottes",
                Lektionen = new List<Lektion>
                {
                    new Lektion
                    {
                        Nummer = 1,
                        Titel = "Die Seligpreisungen",
                        Beschreibung = "Wer ist wahrhaft gesegnet?",
                        Bibelstellen = new List<string> { "Matthäus 5,1-12" },
                        Kernvers = "Glückselig die Armen im Geist, denn ihrer ist das Reich der Himmel. (Matthäus 5,3)"
                    },
                    new Lektion
                    {
                        Nummer = 2,
                        Titel = "Salz und Licht",
                        Beschreibung = "Unsere Berufung in der Welt",
                        Bibelstellen = new List<string> { "Matthäus 5,13-16" },
                        Kernvers = "Ihr seid das Licht der Welt. Eine Stadt, die auf einem Berg liegt, kann nicht verborgen sein. (Matthäus 5,14)"
                    },
                    new Lektion
                    {
                        Nummer = 3,
                        Titel = "Das Vaterunser",
                        Beschreibung = "Das Mustergebet Jesu",
                        Bibelstellen = new List<string> { "Matthäus 6,9-13" },
                        Kernvers = "Unser Vater, der du bist in den Himmeln, geheiligt werde dein Name. (Matthäus 6,9)"
                    },
                    new Lektion
                    {
                        Nummer = 4,
                        Titel = "Sorgt euch nicht",
                        Beschreibung = "Vertrauen auf Gottes Versorgung",
                        Bibelstellen = new List<string> { "Matthäus 6,25-34" },
                        Kernvers = "Trachtet aber zuerst nach dem Reich Gottes und nach seiner Gerechtigkeit! Und dies alles wird euch hinzugefügt werden. (Matthäus 6,33)"
                    },
                    new Lektion
                    {
                        Nummer = 5,
                        Titel = "Die goldene Regel",
                        Beschreibung = "Wie wir andere behandeln sollen",
                        Bibelstellen = new List<string> { "Matthäus 7,12" },
                        Kernvers = "Alles nun, was ihr wollt, dass euch die Menschen tun, das tut auch ihr ihnen ebenso! (Matthäus 7,12)"
                    }
                }
            }
        };
    }

    /// <summary>
    /// Gibt die Gesamtanzahl aller Lektionen zurück
    /// </summary>
    public int GetGesamtanzahlLektionen()
    {
        return GetAlleThemen().Sum(t => t.Lektionen.Count);
    }
}
