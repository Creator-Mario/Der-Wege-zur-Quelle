// Translation Data
const translations = {
    de: {
        verseRef: "2. Timotheus 3,16-17",
        verseText: "Alle Schrift ist von Gott eingegeben und nütze zur Lehre, zur Überführung, zur Zurechtweisung, zur Unterweisung in der Gerechtigkeit, auf daß der Mensch Gottes vollkommen sei, zu jedem guten Werke völlig geschickt.",
        btnEntry: "Anmelden / Registrieren",
        btnAdmin: "Admin Login",
        adminTitle: "Admin Login",
        adminSubmit: "Anmelden",
        adminCancel: "Abbrechen",
        registerTitle: "Registrierung",
        privacyNote: "Diese Daten werden ausschließlich für dein persönliches Zertifikat genutzt.",
        btnSubmit: "Registrieren",
        btnCancel: "Abbrechen",
        passwordTitle: "Ihr Passwort",
        passwordHint: "Bitte notieren Sie dieses Passwort.",
        btnContinue: "Weiter zur App",
        appTitle: "Bibelstudie",
        btnLogout: "Abmelden",
        appWelcome: "Willkommen zur Bibelstudie-App!"
    },
    en: {
        verseRef: "2 Timothy 3:16-17",
        verseText: "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.",
        btnEntry: "Login / Register",
        btnAdmin: "Admin Login",
        adminTitle: "Admin Login",
        adminSubmit: "Login",
        adminCancel: "Cancel",
        registerTitle: "Registration",
        privacyNote: "This data will be used exclusively for your personal certificate.",
        btnSubmit: "Register",
        btnCancel: "Cancel",
        passwordTitle: "Your Password",
        passwordHint: "Please note this password.",
        btnContinue: "Continue to App",
        appTitle: "Bible Study",
        btnLogout: "Logout",
        appWelcome: "Welcome to the Bible Study App!"
    },
    id: {
        verseRef: "2 Timotius 3:16-17",
        verseText: "Segala tulisan yang diilhamkan Allah memang bermanfaat untuk mengajar, untuk menyatakan kesalahan, untuk memperbaiki kelakuan dan untuk mendidik orang dalam kebenaran. Dengan demikian tiap-tiap manusia kepunyaan Allah diperlengkapi untuk setiap perbuatan baik.",
        btnEntry: "Masuk / Daftar",
        btnAdmin: "Login Admin",
        adminTitle: "Login Admin",
        adminSubmit: "Masuk",
        adminCancel: "Batal",
        registerTitle: "Pendaftaran",
        privacyNote: "Data ini akan digunakan secara eksklusif untuk sertifikat pribadi Anda.",
        btnSubmit: "Daftar",
        btnCancel: "Batal",
        passwordTitle: "Kata Sandi Anda",
        passwordHint: "Harap catat kata sandi ini.",
        btnContinue: "Lanjut ke Aplikasi",
        appTitle: "Studi Alkitab",
        btnLogout: "Keluar",
        appWelcome: "Selamat datang di Aplikasi Studi Alkitab!"
    }
};

// Current language
let currentLang = 'de';

// Admin credentials
const ADMIN_USER = 'Mario Denzer';
const ADMIN_PASSWORD = 'Der Weg';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
    updateTranslations();
});

// Page Navigation Functions
function showBranding() {
    console.log('Showing branding page');
    document.getElementById('page-branding').classList.add('active');
    document.getElementById('page-register').classList.remove('active');
    document.getElementById('page-admin').classList.remove('active');
    document.getElementById('page-app').classList.remove('active');
}

function showRegister() {
    console.log('Showing register page');
    document.getElementById('page-branding').classList.remove('active');
    document.getElementById('page-register').classList.add('active');
    document.getElementById('page-admin').classList.remove('active');
    document.getElementById('page-app').classList.remove('active');
    
    // Reset form
    document.getElementById('form-register').style.display = 'block';
    document.getElementById('password-result').style.display = 'none';
}

function showAdminLogin() {
    console.log('Showing admin login page');
    document.getElementById('page-branding').classList.remove('active');
    document.getElementById('page-register').classList.remove('active');
    document.getElementById('page-admin').classList.add('active');
    document.getElementById('page-app').classList.remove('active');
    
    // Reset form
    document.getElementById('form-admin').reset();
    document.getElementById('admin-error').style.display = 'none';
}

function showApp() {
    console.log('Showing app page');
    document.getElementById('page-branding').classList.remove('active');
    document.getElementById('page-register').classList.remove('active');
    document.getElementById('page-admin').classList.remove('active');
    document.getElementById('page-app').classList.add('active');
}

// Language Change
function changeLang(lang) {
    console.log('Changing language to:', lang);
    currentLang = lang;
    
    // Update button states
    const buttons = document.querySelectorAll('.lang-btn[data-lang]');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    updateTranslations();
}

// Update Translations
function updateTranslations() {
    const t = translations[currentLang];
    
    // Update text content
    const elements = {
        'verse-ref': t.verseRef,
        'verse-text': t.verseText,
        'btn-entry': t.btnEntry,
        'btn-admin': t.btnAdmin,
        'admin-title': t.adminTitle,
        'btn-admin-submit': t.adminSubmit,
        'btn-admin-cancel': t.adminCancel,
        'register-title': t.registerTitle,
        'privacy-note': t.privacyNote,
        'btn-submit': t.btnSubmit,
        'btn-cancel': t.btnCancel,
        'password-title': t.passwordTitle,
        'password-hint': t.passwordHint,
        'btn-continue': t.btnContinue,
        'app-title': t.appTitle,
        'btn-logout': t.btnLogout,
        'app-welcome': t.appWelcome
    };
    
    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = text;
        }
    }
}

// Registration Form Submit
function submitRegister(event) {
    event.preventDefault();
    console.log('Form submitted');
    
    // Get form data
    const firstname = document.getElementById('input-firstname').value;
    const lastname = document.getElementById('input-lastname').value;
    const dob = document.getElementById('input-dob').value;
    const email = document.getElementById('input-email').value;
    const location = document.getElementById('input-location').value;
    const language = document.getElementById('input-lang').value;
    
    // Generate password
    const password = generatePassword();
    
    // Save to localStorage
    const userData = {
        firstname,
        lastname,
        dob,
        email,
        location,
        language,
        password,
        registrationDate: new Date().toISOString()
    };
    
    localStorage.setItem('userData_' + email, JSON.stringify(userData));
    localStorage.setItem('currentUser', email);
    
    // Show password
    document.getElementById('password-value').textContent = password;
    document.getElementById('form-register').style.display = 'none';
    document.getElementById('password-result').style.display = 'block';
    
    // Update user display
    document.getElementById('user-display').textContent = firstname + ' ' + lastname;
    
    return false;
}

// Generate Password
function generatePassword() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Admin Login
function submitAdminLogin(event) {
    event.preventDefault();
    console.log('Admin login submitted');
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    // Check credentials
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
        // Login successful
        console.log('Admin login successful');
        
        // Save admin session
        localStorage.setItem('currentUser', 'admin');
        localStorage.setItem('isAdmin', 'true');
        
        // Update user display
        document.getElementById('user-display').textContent = 'Admin: ' + username;
        
        // Go to app
        showApp();
    } else {
        // Login failed
        console.log('Admin login failed');
        const errorMsg = document.getElementById('admin-error');
        errorMsg.textContent = currentLang === 'de' ? 'Benutzername oder Passwort falsch' : 
                              currentLang === 'en' ? 'Username or password incorrect' : 
                              'Nama pengguna atau kata sandi salah';
        errorMsg.style.display = 'block';
    }
    
    return false;
}

// Logout
function doLogout() {
    console.log('Logging out');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    document.getElementById('form-register').reset();
    document.getElementById('form-admin').reset();
    showBranding();
}

// Curriculum Data Structure
// Lesson Content Data
const lessonContent = {
    de: {
        "1-1": {
            title: "Ursprung der Bibel",
            introduction: `Die Frage nach dem Ursprung der Bibel ist grundlegend für jede theologische Lehre, Predigt und Form christlicher Spiritualität. Alles, was Christen über Gott, Erlösung, Ethik, Gemeinde und Hoffnung wissen, wurzelt in der Schrift. Daher ist die Kernfrage:

**Wie kam Gottes Wort zu uns, und warum können wir dieser Schrift vertrauen?**

Wenn die Bibel nur ein menschliches Werk wäre, wäre sie relativ, kulturell bedingt und ohne absolute Autorität. Stellt man jedoch fest, dass sie göttlichen Ursprungs ist, besitzt sie höchste, universale und zeitlose Autorität.`,
            sections: [
                {
                    heading: "Bedeutung des Themas in Geschichte und Gegenwart",
                    content: `**Historische Bedeutung:**
- Das Volk Israel verstand die heiligen Schriften als göttliche Offenbarung.
- Jesus und die Apostel zitierten das Alte Testament als autoritative Quelle.
- Die frühe Kirche bewahrte die apostolischen Schriften sorgfältig.
- Reformation und Erweckungsbewegungen betonten „sola Scriptura".

**Bedeutung heute:**
In Zeiten von Skepsis, Bibelkritik, moralischem Relativismus und theologischer Verwirrung braucht die Gemeinde Klarheit über den Ursprung und die Autorität der Bibel.`
                },
                {
                    heading: "Warum Gott den Weg der Schrift wählte",
                    content: `**1. Dauerhaftigkeit:** Ein gesprochenes Wort verfliegt, ein geschriebenes Wort bleibt bestehen.

**2. Verbindlichkeit:** Ein schriftlicher Vertrag ist verbindlicher als eine mündliche Zusage.

**3. Schutz vor Verfälschung:** Schriftliche Fixierung schützt die Wahrheit vor Veränderung.

**4. Zugang für alle Generationen:** Die Schrift ermöglicht Menschen aller Zeiten, Gottes Reden zu hören.`
                },
                {
                    heading: "Anschauliche Analogien für den Ursprung des Wortes Gottes",
                    content: `**Der königliche Erlass:** Ein königlicher Erlass trägt dieselbe Autorität wie die Stimme des Königs. So verhält es sich mit der Bibel.

**Die Landkarte des Lebens:** Eine Karte zeigt sichere Wege und Gefahren. Die Bibel leitet den Menschen geistlich sicher.

**Das Orchester:** Viele Instrumente (Autoren), ein Dirigent (Heiliger Geist) – Vielfalt im Stil, Einheit im Inhalt.

**Der Sternenhimmel (Psalm 19):** Die Schöpfung offenbart Gottes Größe, die Schrift seinen Willen.`
                },
                {
                    heading: "Typische Missverständnisse und Klarstellungen",
                    content: `**"Menschen schrieben – also Menschenwort":**
Menschen schrieben, aber Gott leitete sie. Die Schrift ist sowohl göttlich als auch menschlich.

**"Unterschiedliche Stile = unterschiedliche Meinungen":**
Stile spiegeln Persönlichkeit, nicht Widerspruch.

**"Der Text wurde sicher verändert":**
Die Bibel ist das bestbezeugte Schriftwerk der Antike.`
                },
                {
                    heading: "Methodische Zugänge",
                    content: `- **Biblisch-theologisch:** Was sagt die Schrift über sich selbst?
- **Historisch:** Wie entstanden Texte und Manuskripte?
- **Systematisch-theologisch:** Inspiration, Inerranz, Autorität.
- **Hermeneutisch:** Wie interpretiert man ein inspiriertes Dokument?
- **Praktisch-theologisch:** Konsequenzen für Lehre, Predigt und Leben.`
                }
            ],
            learningGoals: [
                "Den Ursprung der Bibel erklären können",
                "Offenbarung und Inspiration unterscheiden",
                "Textüberlieferung und Kanonbildung verstehen",
                "Die Einheit der Schrift begründen können"
            ],
            reflectionQuestions: [
                "Warum sollte Gott ein Buch entstehen lassen?",
                "Was unterscheidet die Bibel von anderen religiösen Texten?",
                "Wie kann ein Text göttlich und menschlich sein?",
                "Wie wissen wir, dass der Text zuverlässig überliefert wurde?"
            ],
            practicalApplication: `- Gottes Wort gibt Orientierung in einer moralisch chaotischen Welt.
- Die Schrift gibt Halt und Sicherheit.
- Sie schützt vor Irrlehre und Selbsttäuschung.
- Sie formt Charakter und Glauben.`
        }
    },
    en: {
        "1-1": {
            title: "Origin of the Bible",
            introduction: "Content will be translated soon...",
            sections: [],
            learningGoals: [],
            reflectionQuestions: [],
            practicalApplication: ""
        }
    },
    id: {
        "1-1": {
            title: "Asal Usul Alkitab",
            introduction: "Konten akan diterjemahkan segera...",
            sections: [],
            learningGoals: [],
            reflectionQuestions: [],
            practicalApplication: ""
        }
    }
};

const curriculumData = {
    de: [
        {
            id: 1,
            title: "Grundlagen der Bibel",
            subtitle: "Ursprung, Aufbau und Bedeutung der Heiligen Schrift",
            lessons: [
                "Ursprung der Bibel",
                "Inspiration und Offenbarung",
                "Der Kanon der Schrift",
                "Textüberlieferung und Übersetzungen",
                "Autorität der Bibel",
                "Aufbau von Altem und Neuem Testament",
                "Einheit der Bibel",
                "Gottes Wort als Wegweiser",
                "Verbindlichkeit der Bibel",
                "Die Bibel und Mission"
            ]
        },
        {
            id: 2,
            title: "Umgang mit der Bibel",
            subtitle: "Methoden und praktische Anwendung",
            lessons: [
                "Methoden des Bibellesens",
                "Historischer Kontext verstehen",
                "Literarische Gattungen erkennen",
                "Exegese und Hermeneutik",
                "Schlüsselbegriffe und Fremdwörter",
                "Anwendung im Alltag",
                "Bibel im Gebet",
                "Bibel in der Gemeinschaft",
                "Persönliche Leitung durch die Bibel",
                "Weitergabe der Bibel"
            ]
        },
        {
            id: 3,
            title: "Taufe durch den Heiligen Geist",
            subtitle: "Verheißung, Pfingsten und geistliches Leben",
            lessons: [
                "Verheißung der Geistestaufe",
                "Pfingsten als Erfüllung",
                "Zeugnis der Geistestaufe",
                "Beispiele in der Apostelgeschichte",
                "Zeichen der Geistestaufe",
                "Unterschied Wiedergeburt und Geistestaufe",
                "Geistestaufe und Mission",
                "Geistestaufe und Gebet",
                "Geistestaufe und Einheit",
                "Geistestaufe heute"
            ]
        },
        {
            id: 4,
            title: "Wassertaufe",
            subtitle: "Bedeutung, Vorbild und Praxis",
            lessons: [
                "Bedeutung der Taufe",
                "Jesu Taufe als Vorbild",
                "Taufe und Buße",
                "Taufe und Glaubensbekenntnis",
                "Taufe und Gemeindeaufnahme",
                "Taufe und Mission",
                "Taufe und Heiligung",
                "Taufe und Identität in Christus",
                "Taufe und Einheit der Gläubigen",
                "Taufe heute"
            ]
        },
        {
            id: 5,
            title: "Pentateuch",
            subtitle: "Genesis bis Deuteronomium",
            lessons: [
                "Genesis – Schöpfung und Bund",
                "Exodus – Befreiung und Gesetz",
                "Levitikus – Heiligkeit und Opfer",
                "Numeri – Wüstenwanderung",
                "Deuteronomium – Gesetz und Erneuerung",
                "Überblick Pentateuch",
                "Schlüsselverse Pentateuch",
                "Gottes Bundestreue",
                "Anwendung heute",
                "Reflexion Pentateuch"
            ]
        },
        {
            id: 6,
            title: "Geschichtsbücher",
            subtitle: "Josua bis Esther",
            lessons: [
                "Josua – Landnahme",
                "Richter – Zyklen von Treue und Abfall",
                "Ruth – Treue und Erlösung",
                "Samuel – Königreich entsteht",
                "Könige – Höhen und Tiefen",
                "Chronik – Perspektive des Tempels",
                "Esra und Nehemia – Wiederaufbau",
                "Esther – Gottes Vorsehung",
                "Überblick Geschichtsbücher",
                "Reflexion Geschichte Israels"
            ]
        },
        {
            id: 7,
            title: "Weisheitsliteratur",
            subtitle: "Hiob, Psalmen, Sprüche, Prediger, Hohelied",
            lessons: [
                "Psalmen – Einführung",
                "Psalmen – Klage und Vertrauen",
                "Sprüche – Gottesfurcht",
                "Sprüche – Worte und Taten",
                "Hiob – Leid und Gottes Souveränität",
                "Prediger – Sinn und Vergänglichkeit",
                "Hohelied – Liebe und Gemeinschaft",
                "Überblick Weisheitsliteratur",
                "Anwendung Weisheit heute",
                "Reflexion Weisheit"
            ]
        },
        {
            id: 8,
            title: "Propheten",
            subtitle: "Jesaja bis Maleachi",
            lessons: [
                "Jesaja – Heiligkeit und Erlösung",
                "Jeremia – Gericht und Hoffnung",
                "Hesekiel – Vision und Wiederherstellung",
                "Daniel – Treue in der Fremde",
                "Kleine Propheten Teil 1 (Hosea-Micha)",
                "Kleine Propheten Teil 2 (Nahum-Maleachi)",
                "Überblick Propheten",
                "Messiaserwartung",
                "Prophetische Botschaft heute",
                "Reflexion Propheten"
            ]
        },
        {
            id: 9,
            title: "Evangelien",
            subtitle: "Matthäus, Markus, Lukas, Johannes",
            lessons: [
                "Matthäus – Jesus als König",
                "Markus – Jesus als Knecht",
                "Lukas – Jesus als Menschensohn",
                "Johannes – Jesus als Gottes Sohn",
                "Geburt und Kindheit Jesu",
                "Wirken Jesu",
                "Gleichnisse Jesu",
                "Wunder Jesu",
                "Überblick Evangelien",
                "Reflexion Jesus Christus"
            ]
        },
        {
            id: 10,
            title: "Apostelgeschichte & Paulusbriefe",
            subtitle: "Gemeindegründung und Lehre",
            lessons: [
                "Apostelgeschichte – Kirche entsteht",
                "Römer – Rechtfertigung durch Glauben",
                "Korinther – Gemeindeleben",
                "Galater – Freiheit in Christus",
                "Epheser – Einheit in Christus",
                "Philipper – Freude im Herrn",
                "Kolosser – Fülle in Christus",
                "Thessalonicher – Wiederkunft Christi",
                "Pastoralbriefe – Gemeindeleitung",
                "Reflexion Paulus"
            ]
        },
        {
            id: 11,
            title: "Allgemeine Briefe",
            subtitle: "Hebräer bis Judas",
            lessons: [
                "Hebräer – Christus der Hohepriester",
                "Jakobus – Glaube und Werke",
                "Petrus – Hoffnung in Verfolgung",
                "Johannes – Liebe und Wahrheit",
                "Judas – Warnung vor Irrlehre",
                "Überblick Allgemeine Briefe",
                "Ermutigung für Gläubige",
                "Praktisches Christenleben",
                "Gemeinde heute",
                "Reflexion Briefe"
            ]
        },
        {
            id: 12,
            title: "Offenbarung & Zusammenfassung",
            subtitle: "Endzeit und Vollendung",
            lessons: [
                "Offenbarung – Vision der Endzeit",
                "Sieben Gemeinden",
                "Siegel, Posaunen, Schalen",
                "Das Lamm und der Drache",
                "Gottes endgültiger Sieg",
                "Neue Himmel und neue Erde",
                "Zusammenfassung Gesamtbibel",
                "Einheit der Schrift",
                "Leben mit der Bibel",
                "Ausblick und Mission"
            ]
        }
    ],
    en: [
        {
            id: 1,
            title: "Foundations of the Bible",
            subtitle: "Origin, Structure and Meaning of Holy Scripture",
            lessons: [
                "Origin of the Bible",
                "Inspiration and Revelation",
                "The Canon of Scripture",
                "Text Transmission and Translations",
                "Authority of the Bible",
                "Structure of Old and New Testament",
                "Unity of the Bible",
                "God's Word as a Guide",
                "Binding Nature of the Bible",
                "The Bible and Mission"
            ]
        },
        {
            id: 2,
            title: "Working with the Bible",
            subtitle: "Methods and Practical Application",
            lessons: [
                "Methods of Bible Reading",
                "Understanding Historical Context",
                "Recognizing Literary Genres",
                "Exegesis and Hermeneutics",
                "Key Terms and Foreign Words",
                "Application in Daily Life",
                "Bible in Prayer",
                "Bible in Community",
                "Personal Guidance through the Bible",
                "Passing on the Bible"
            ]
        },
        {
            id: 3,
            title: "Baptism in the Holy Spirit",
            subtitle: "Promise, Pentecost and Spiritual Life",
            lessons: [
                "Promise of Spirit Baptism",
                "Pentecost as Fulfillment",
                "Testimony of Spirit Baptism",
                "Examples in Acts",
                "Signs of Spirit Baptism",
                "Difference: Rebirth and Spirit Baptism",
                "Spirit Baptism and Mission",
                "Spirit Baptism and Prayer",
                "Spirit Baptism and Unity",
                "Spirit Baptism Today"
            ]
        },
        {
            id: 4,
            title: "Water Baptism",
            subtitle: "Meaning, Model and Practice",
            lessons: [
                "Meaning of Baptism",
                "Jesus' Baptism as Model",
                "Baptism and Repentance",
                "Baptism and Confession of Faith",
                "Baptism and Church Membership",
                "Baptism and Mission",
                "Baptism and Sanctification",
                "Baptism and Identity in Christ",
                "Baptism and Unity of Believers",
                "Baptism Today"
            ]
        },
        {
            id: 5,
            title: "Pentateuch",
            subtitle: "Genesis to Deuteronomy",
            lessons: [
                "Genesis – Creation and Covenant",
                "Exodus – Liberation and Law",
                "Leviticus – Holiness and Sacrifice",
                "Numbers – Wilderness Journey",
                "Deuteronomy – Law and Renewal",
                "Overview Pentateuch",
                "Key Verses Pentateuch",
                "God's Covenant Faithfulness",
                "Application Today",
                "Reflection Pentateuch"
            ]
        },
        {
            id: 6,
            title: "Historical Books",
            subtitle: "Joshua to Esther",
            lessons: [
                "Joshua – Conquest",
                "Judges – Cycles of Faithfulness and Apostasy",
                "Ruth – Faithfulness and Redemption",
                "Samuel – Kingdom Emerges",
                "Kings – Highs and Lows",
                "Chronicles – Temple Perspective",
                "Ezra and Nehemiah – Rebuilding",
                "Esther – God's Providence",
                "Overview Historical Books",
                "Reflection History of Israel"
            ]
        },
        {
            id: 7,
            title: "Wisdom Literature",
            subtitle: "Job, Psalms, Proverbs, Ecclesiastes, Song of Songs",
            lessons: [
                "Psalms – Introduction",
                "Psalms – Lament and Trust",
                "Proverbs – Fear of God",
                "Proverbs – Words and Deeds",
                "Job – Suffering and God's Sovereignty",
                "Ecclesiastes – Meaning and Transience",
                "Song of Songs – Love and Fellowship",
                "Overview Wisdom Literature",
                "Applying Wisdom Today",
                "Reflection Wisdom"
            ]
        },
        {
            id: 8,
            title: "Prophets",
            subtitle: "Isaiah to Malachi",
            lessons: [
                "Isaiah – Holiness and Salvation",
                "Jeremiah – Judgment and Hope",
                "Ezekiel – Vision and Restoration",
                "Daniel – Faithfulness in Exile",
                "Minor Prophets Part 1 (Hosea-Micah)",
                "Minor Prophets Part 2 (Nahum-Malachi)",
                "Overview Prophets",
                "Messianic Expectation",
                "Prophetic Message Today",
                "Reflection Prophets"
            ]
        },
        {
            id: 9,
            title: "Gospels",
            subtitle: "Matthew, Mark, Luke, John",
            lessons: [
                "Matthew – Jesus as King",
                "Mark – Jesus as Servant",
                "Luke – Jesus as Son of Man",
                "John – Jesus as Son of God",
                "Birth and Childhood of Jesus",
                "Ministry of Jesus",
                "Parables of Jesus",
                "Miracles of Jesus",
                "Overview Gospels",
                "Reflection Jesus Christ"
            ]
        },
        {
            id: 10,
            title: "Acts & Paul's Letters",
            subtitle: "Church Planting and Teaching",
            lessons: [
                "Acts – Church is Born",
                "Romans – Justification by Faith",
                "Corinthians – Church Life",
                "Galatians – Freedom in Christ",
                "Ephesians – Unity in Christ",
                "Philippians – Joy in the Lord",
                "Colossians – Fullness in Christ",
                "Thessalonians – Christ's Return",
                "Pastoral Letters – Church Leadership",
                "Reflection Paul"
            ]
        },
        {
            id: 11,
            title: "General Letters",
            subtitle: "Hebrews to Jude",
            lessons: [
                "Hebrews – Christ the High Priest",
                "James – Faith and Works",
                "Peter – Hope in Persecution",
                "John – Love and Truth",
                "Jude – Warning against False Teaching",
                "Overview General Letters",
                "Encouragement for Believers",
                "Practical Christian Living",
                "Church Today",
                "Reflection Letters"
            ]
        },
        {
            id: 12,
            title: "Revelation & Summary",
            subtitle: "End Times and Completion",
            lessons: [
                "Revelation – Vision of the End Times",
                "Seven Churches",
                "Seals, Trumpets, Bowls",
                "The Lamb and the Dragon",
                "God's Final Victory",
                "New Heaven and New Earth",
                "Summary Entire Bible",
                "Unity of Scripture",
                "Living with the Bible",
                "Outlook and Mission"
            ]
        }
    ],
    id: [
        {
            id: 1,
            title: "Dasar-dasar Alkitab",
            subtitle: "Asal, Struktur dan Makna Kitab Suci",
            lessons: [
                "Asal Alkitab",
                "Inspirasi dan Wahyu",
                "Kanon Kitab Suci",
                "Transmisi Teks dan Terjemahan",
                "Otoritas Alkitab",
                "Struktur Perjanjian Lama dan Baru",
                "Kesatuan Alkitab",
                "Firman Tuhan sebagai Pemandu",
                "Sifat Mengikat Alkitab",
                "Alkitab dan Misi"
            ]
        },
        {
            id: 2,
            title: "Bekerja dengan Alkitab",
            subtitle: "Metode dan Aplikasi Praktis",
            lessons: [
                "Metode Pembacaan Alkitab",
                "Memahami Konteks Historis",
                "Mengenali Genre Sastra",
                "Eksegesis dan Hermeneutika",
                "Istilah Kunci dan Kata Asing",
                "Aplikasi dalam Kehidupan Sehari-hari",
                "Alkitab dalam Doa",
                "Alkitab dalam Komunitas",
                "Bimbingan Pribadi melalui Alkitab",
                "Meneruskan Alkitab"
            ]
        },
        {
            id: 3,
            title: "Baptisan dalam Roh Kudus",
            subtitle: "Janji, Pentakosta dan Kehidupan Rohani",
            lessons: [
                "Janji Baptisan Roh",
                "Pentakosta sebagai Penggenapan",
                "Kesaksian Baptisan Roh",
                "Contoh dalam Kisah Para Rasul",
                "Tanda-tanda Baptisan Roh",
                "Perbedaan: Kelahiran Baru dan Baptisan Roh",
                "Baptisan Roh dan Misi",
                "Baptisan Roh dan Doa",
                "Baptisan Roh dan Kesatuan",
                "Baptisan Roh Hari Ini"
            ]
        },
        {
            id: 4,
            title: "Baptisan Air",
            subtitle: "Makna, Model dan Praktik",
            lessons: [
                "Makna Baptisan",
                "Baptisan Yesus sebagai Model",
                "Baptisan dan Pertobatan",
                "Baptisan dan Pengakuan Iman",
                "Baptisan dan Keanggotaan Gereja",
                "Baptisan dan Misi",
                "Baptisan dan Pengudusan",
                "Baptisan dan Identitas dalam Kristus",
                "Baptisan dan Kesatuan Orang Percaya",
                "Baptisan Hari Ini"
            ]
        },
        {
            id: 5,
            title: "Pentateukh",
            subtitle: "Kejadian sampai Ulangan",
            lessons: [
                "Kejadian – Penciptaan dan Perjanjian",
                "Keluaran – Pembebasan dan Hukum",
                "Imamat – Kekudusan dan Korban",
                "Bilangan – Perjalanan Gurun",
                "Ulangan – Hukum dan Pembaruan",
                "Tinjauan Pentateukh",
                "Ayat Kunci Pentateukh",
                "Kesetiaan Perjanjian Tuhan",
                "Aplikasi Hari Ini",
                "Refleksi Pentateukh"
            ]
        },
        {
            id: 6,
            title: "Kitab Sejarah",
            subtitle: "Yosua sampai Ester",
            lessons: [
                "Yosua – Penaklukan",
                "Hakim-hakim – Siklus Kesetiaan dan Kemurtadan",
                "Rut – Kesetiaan dan Penebusan",
                "Samuel – Kerajaan Muncul",
                "Raja-raja – Pasang Surut",
                "Tawarikh – Perspektif Bait Suci",
                "Ezra dan Nehemia – Pembangunan Kembali",
                "Ester – Providensi Tuhan",
                "Tinjauan Kitab Sejarah",
                "Refleksi Sejarah Israel"
            ]
        },
        {
            id: 7,
            title: "Sastra Hikmat",
            subtitle: "Ayub, Mazmur, Amsal, Pengkhotbah, Kidung Agung",
            lessons: [
                "Mazmur – Pengantar",
                "Mazmur – Ratapan dan Kepercayaan",
                "Amsal – Takut akan Tuhan",
                "Amsal – Perkataan dan Perbuatan",
                "Ayub – Penderitaan dan Kedaulatan Tuhan",
                "Pengkhotbah – Makna dan Kefanaan",
                "Kidung Agung – Kasih dan Persekutuan",
                "Tinjauan Sastra Hikmat",
                "Menerapkan Hikmat Hari Ini",
                "Refleksi Hikmat"
            ]
        },
        {
            id: 8,
            title: "Nabi-nabi",
            subtitle: "Yesaya sampai Maleakhi",
            lessons: [
                "Yesaya – Kekudusan dan Keselamatan",
                "Yeremia – Penghakiman dan Harapan",
                "Yehezkiel – Penglihatan dan Pemulihan",
                "Daniel – Kesetiaan dalam Pembuangan",
                "Nabi-nabi Kecil Bagian 1 (Hosea-Mikha)",
                "Nabi-nabi Kecil Bagian 2 (Nahum-Maleakhi)",
                "Tinjauan Nabi-nabi",
                "Pengharapan Mesias",
                "Pesan Kenabian Hari Ini",
                "Refleksi Nabi-nabi"
            ]
        },
        {
            id: 9,
            title: "Injil",
            subtitle: "Matius, Markus, Lukas, Yohanes",
            lessons: [
                "Matius – Yesus sebagai Raja",
                "Markus – Yesus sebagai Hamba",
                "Lukas – Yesus sebagai Anak Manusia",
                "Yohanes – Yesus sebagai Anak Allah",
                "Kelahiran dan Masa Kanak-kanak Yesus",
                "Pelayanan Yesus",
                "Perumpamaan Yesus",
                "Mukjizat Yesus",
                "Tinjauan Injil",
                "Refleksi Yesus Kristus"
            ]
        },
        {
            id: 10,
            title: "Kisah Para Rasul & Surat-surat Paulus",
            subtitle: "Penanaman Gereja dan Pengajaran",
            lessons: [
                "Kisah Para Rasul – Gereja Lahir",
                "Roma – Pembenaran oleh Iman",
                "Korintus – Kehidupan Gereja",
                "Galatia – Kebebasan dalam Kristus",
                "Efesus – Kesatuan dalam Kristus",
                "Filipi – Sukacita dalam Tuhan",
                "Kolose – Kepenuhan dalam Kristus",
                "Tesalonika – Kedatangan Kristus",
                "Surat-surat Pastoral – Kepemimpinan Gereja",
                "Refleksi Paulus"
            ]
        },
        {
            id: 11,
            title: "Surat-surat Umum",
            subtitle: "Ibrani sampai Yudas",
            lessons: [
                "Ibrani – Kristus Imam Besar",
                "Yakobus – Iman dan Perbuatan",
                "Petrus – Harapan dalam Penganiayaan",
                "Yohanes – Kasih dan Kebenaran",
                "Yudas – Peringatan terhadap Ajaran Sesat",
                "Tinjauan Surat-surat Umum",
                "Dorongan bagi Orang Percaya",
                "Kehidupan Kristen Praktis",
                "Gereja Hari Ini",
                "Refleksi Surat-surat"
            ]
        },
        {
            id: 12,
            title: "Wahyu & Ringkasan",
            subtitle: "Akhir Zaman dan Penyelesaian",
            lessons: [
                "Wahyu – Penglihatan Akhir Zaman",
                "Tujuh Gereja",
                "Meterai, Sangkakala, Cawan",
                "Anak Domba dan Naga",
                "Kemenangan Akhir Tuhan",
                "Langit Baru dan Bumi Baru",
                "Ringkasan Seluruh Alkitab",
                "Kesatuan Kitab Suci",
                "Hidup dengan Alkitab",
                "Pandangan dan Misi"
            ]
        }
    ]
};

// Curriculum Rendering and Navigation
function renderCurriculum() {
    const container = document.getElementById('curriculum-content');
    if (!container) return;
    
    const chapters = curriculumData[currentLang];
    container.innerHTML = '';
    
    chapters.forEach((chapter, idx) => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="chapter-header" onclick="toggleChapter(${idx})">
                <span class="toggle-icon" id="icon-${idx}">►</span>
                <span><strong>Kapitel ${chapter.id}:</strong> ${chapter.title}</span>
            </div>
            <div class="chapter-subtitle">${chapter.subtitle}</div>
            <div class="chapter-content" id="content-${idx}" style="display:none;">
                <ul class="lesson-list">
                    ${chapter.lessons.map((lesson, lessonIdx) => 
                        `<li onclick="openLesson(${chapter.id}, ${lessonIdx + 1}, '${escapeHtml(chapter.title)}', '${escapeHtml(lesson)}')">${lessonIdx + 1}. ${lesson}</li>`
                    ).join('')}
                </ul>
            </div>
        `;
        container.appendChild(card);
    });
}

function escapeHtml(text) {
    return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function toggleChapter(idx) {
    const content = document.getElementById(`content-${idx}`);
    const icon = document.getElementById(`icon-${idx}`);
    
    if (content.style.display === 'none') {
        // Close all others
        document.querySelectorAll('.chapter-content').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.toggle-icon').forEach(el => el.textContent = '►');
        
        // Open this one
        content.style.display = 'block';
        icon.textContent = '▼';
    } else {
        content.style.display = 'none';
        icon.textContent = '►';
    }
}

function openLesson(chapterId, lessonNum, chapterTitle, lessonTitle) {
    const overviewDiv = document.getElementById('curriculum-overview');
    const lessonDiv = document.getElementById('lesson-view');
    
    if (!overviewDiv || !lessonDiv) return;
    
    overviewDiv.style.display = 'none';
    lessonDiv.style.display = 'block';
    
    // Get lesson content
    const lessonKey = `${chapterId}-${lessonNum}`;
    const content = lessonContent[currentLang] && lessonContent[currentLang][lessonKey];
    
    let contentHTML = '';
    
    if (content) {
        // Build content with all sections
        contentHTML = `
            <div class="lesson-introduction">
                <h4>${currentLang === 'de' ? 'Einleitung' : currentLang === 'en' ? 'Introduction' : 'Pendahuluan'}</h4>
                <p>${content.introduction.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        // Add sections
        if (content.sections && content.sections.length > 0) {
            content.sections.forEach(section => {
                contentHTML += `
                    <div class="lesson-section">
                        <h4>${section.heading}</h4>
                        <p>${section.content.replace(/\n/g, '<br>')}</p>
                    </div>
                `;
            });
        }
        
        // Add learning goals
        if (content.learningGoals && content.learningGoals.length > 0) {
            contentHTML += `
                <div class="lesson-goals">
                    <h4>${currentLang === 'de' ? 'Lernziele' : currentLang === 'en' ? 'Learning Goals' : 'Tujuan Pembelajaran'}</h4>
                    <ul>
                        ${content.learningGoals.map(goal => `<li>${goal}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Add reflection questions
        if (content.reflectionQuestions && content.reflectionQuestions.length > 0) {
            contentHTML += `
                <div class="lesson-reflection">
                    <h4>${currentLang === 'de' ? 'Reflexionsfragen' : currentLang === 'en' ? 'Reflection Questions' : 'Pertanyaan Refleksi'}</h4>
                    <ul>
                        ${content.reflectionQuestions.map(q => `<li>${q}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Add practical application
        if (content.practicalApplication) {
            contentHTML += `
                <div class="lesson-application">
                    <h4>${currentLang === 'de' ? 'Praktische Anwendung' : currentLang === 'en' ? 'Practical Application' : 'Aplikasi Praktis'}</h4>
                    <p>${content.practicalApplication.replace(/\n/g, '<br>')}</p>
                </div>
            `;
        }
    } else {
        // Fallback content
        const contentText = currentLang === 'de' ? 'Inhalt folgt bald...' :
                            currentLang === 'en' ? 'Content coming soon...' :
                            'Konten segera hadir...';
        contentHTML = `<p>${contentText}</p>`;
    }
    
    lessonDiv.innerHTML = `
        <div class="lesson-header">
            <h2>${currentLang === 'de' ? 'Kapitel' : currentLang === 'en' ? 'Chapter' : 'Bab'} ${chapterId}: ${chapterTitle}</h2>
            <h3>${currentLang === 'de' ? 'Lektion' : currentLang === 'en' ? 'Lesson' : 'Pelajaran'} ${lessonNum}: ${lessonTitle}</h3>
        </div>
        <div class="lesson-content">
            ${contentHTML}
        </div>
        <button class="btn-back" onclick="closeLesson()">${currentLang === 'de' ? 'Zurück zur Übersicht' : currentLang === 'en' ? 'Back to Overview' : 'Kembali ke Ikhtisar'}</button>
    `;
}

function closeLesson() {
    const overviewDiv = document.getElementById('curriculum-overview');
    const lessonDiv = document.getElementById('lesson-view');
    
    if (!overviewDiv || !lessonDiv) return;
    
    lessonDiv.style.display = 'none';
    overviewDiv.style.display = 'block';
}

// Update show app to render curriculum
const originalShowApp = showApp;
showApp = function() {
    originalShowApp();
    setTimeout(() => renderCurriculum(), 100);
};
