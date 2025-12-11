// Two-Layer Bible Study App - JavaScript

let currentLanguage = 'de';
let translations = {};

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
    loadTranslations();
    checkExistingUser();
});

// Load translations
function loadTranslations() {
    // Assuming translations.js defines the translations object
    if (typeof window.translations !== 'undefined') {
        translations = window.translations;
    }
    updateTranslations();
}

// Update all translated elements
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (let k of keys) {
            if (value && value[k]) {
                value = value[k];
            }
        }
        
        if (typeof value === 'string') {
            el.textContent = value;
        }
    });
}

// Select language
window.selectLanguage = function(lang) {
    currentLanguage = lang;
    localStorage.setItem('bibleStudyLang', lang);
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('selected');
        }
    });
    
    // Update form dropdown if exists
    const sprachSelect = document.getElementById('sprache');
    if (sprachSelect) {
        sprachSelect.value = lang;
    }
    
    updateTranslations();
}

// Check for existing user
function checkExistingUser() {
    const savedLang = localStorage.getItem('bibleStudyLang');
    if (savedLang) {
        selectLanguage(savedLang);
    }
    
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userData = JSON.parse(localStorage.getItem('userData_' + currentUser));
        if (userData) {
            showMainApp(userData);
        }
    }
}

// Show registration overlay
window.showRegistrationOverlay = function() {
    const overlay = document.getElementById('registration-overlay');
    overlay.classList.add('active');
    
    // Set language dropdown to current language
    const sprachSelect = document.getElementById('sprache');
    if (sprachSelect) {
        sprachSelect.value = currentLanguage;
    }
}

// Close registration overlay
window.closeRegistrationOverlay = function() {
    const overlay = document.getElementById('registration-overlay');
    overlay.classList.remove('active');
    
    // Reset form
    document.getElementById('registration-form').reset();
    document.getElementById('password-display').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
}

// Generate secure password
function generatePassword() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Handle registration
window.handleRegistration = function(event) {
    event.preventDefault();
    
    const formData = {
        vorname: document.getElementById('vorname').value,
        nachname: document.getElementById('nachname').value,
        geburtsdatum: document.getElementById('geburtsdatum').value,
        email: document.getElementById('email').value,
        wohnort: document.getElementById('wohnort').value,
        sprache: document.getElementById('sprache').value,
        password: generatePassword(),
        registrationDate: new Date().toISOString(),
        completedChapters: [],
        certificates: []
    };
    
    // Store user data
    localStorage.setItem('userData_' + formData.email, JSON.stringify(formData));
    localStorage.setItem('currentUser', formData.email);
    
    // Hide form, show password
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('password-display').style.display = 'block';
    document.getElementById('generated-password').textContent = formData.password;
    
    console.log('User registered:', formData);
}

// Continue to app after seeing password
window.continueToApp = function() {
    const currentUser = localStorage.getItem('currentUser');
    const userData = JSON.parse(localStorage.getItem('userData_' + currentUser));
    
    closeRegistrationOverlay();
    showMainApp(userData);
}

// Show main app
function showMainApp(userData) {
    // Hide branding layer
    document.getElementById('branding-layer').style.display = 'none';
    
    // Show main app
    const mainApp = document.getElementById('main-app');
    mainApp.style.display = 'block';
    
    // Set user name
    const userName = userData.vorname + ' ' + userData.nachname;
    document.getElementById('user-name').textContent = userName;
    
    // Set language
    if (userData.sprache) {
        selectLanguage(userData.sprache);
    }
}

// Logout
window.logout = function() {
    if (confirm('Möchten Sie sich wirklich abmelden?')) {
        localStorage.removeItem('currentUser');
        location.reload();
    }
}

// Add translations to window object if not already present
if (typeof window.translations === 'undefined') {
    window.translations = {
        de: {
            branding: {
                title: "Die Bibel – Glauben der Weg zur Quelle",
                claim: ""Durch Glauben finden wir die Quelle – ein klarer Weg durch alle 66 Bücher"",
                button: "Anmelden / Registrieren"
            },
            registration: {
                title: "Registrierung",
                firstName: "Vorname",
                lastName: "Nachname",
                dob: "Geburtsdatum",
                email: "E-Mail-Adresse",
                location: "Wohnort / Land",
                language: "Sprache",
                privacy: "Diese Daten werden ausschließlich für dein persönliches Zertifikat genutzt und sind nicht übertragbar.",
                submit: "Registrieren",
                cancel: "Abbrechen",
                passwordTitle: "Ihr Passwort",
                passwordInfo: "Ihr automatisch generiertes Passwort lautet:",
                passwordHint: "Bitte notieren Sie sich dieses Passwort. Sie können es später ändern.",
                continue: "Weiter zur App"
            },
            app: {
                title: "Bibelstudie",
                logout: "Abmelden",
                welcome: "Willkommen zur Bibelstudie-App!"
            }
        },
        en: {
            branding: {
                title: "The Bible – Faith the Way to the Source",
                claim: ""Through faith we find the source – a clear path through all 66 books"",
                button: "Login / Register"
            },
            registration: {
                title: "Registration",
                firstName: "First Name",
                lastName: "Last Name",
                dob: "Date of Birth",
                email: "Email Address",
                location: "Location / Country",
                language: "Language",
                privacy: "This data will be used exclusively for your personal certificate and is not transferable.",
                submit: "Register",
                cancel: "Cancel",
                passwordTitle: "Your Password",
                passwordInfo: "Your automatically generated password is:",
                passwordHint: "Please write down this password. You can change it later.",
                continue: "Continue to App"
            },
            app: {
                title: "Bible Study",
                logout: "Logout",
                welcome: "Welcome to the Bible Study App!"
            }
        },
        id: {
            branding: {
                title: "Alkitab – Iman Jalan Menuju Sumber",
                claim: ""Melalui iman kita menemukan sumber – jalan yang jelas melalui 66 kitab"",
                button: "Masuk / Daftar"
            },
            registration: {
                title: "Pendaftaran",
                firstName: "Nama Depan",
                lastName: "Nama Belakang",
                dob: "Tanggal Lahir",
                email: "Alamat Email",
                location: "Lokasi / Negara",
                language: "Bahasa",
                privacy: "Data ini akan digunakan khusus untuk sertifikat pribadi Anda dan tidak dapat dipindahtangankan.",
                submit: "Daftar",
                cancel: "Batal",
                passwordTitle: "Kata Sandi Anda",
                passwordInfo: "Kata sandi yang dibuat otomatis adalah:",
                passwordHint: "Harap catat kata sandi ini. Anda dapat mengubahnya nanti.",
                continue: "Lanjutkan ke Aplikasi"
            },
            app: {
                title: "Studi Alkitab",
                logout: "Keluar",
                welcome: "Selamat datang di Aplikasi Studi Alkitab!"
            }
        }
    };
    
    translations = window.translations;
}
