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
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(lang.toUpperCase())) {
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
