// Enhanced Bible Study App with Login and Multi-language Support
// Application State
let currentView = 'home';
let currentChapter = null;
let currentLesson = null;
let currentLanguage = 'de';
let userName = '';
let userEmail = '';
let isAdmin = false;

// Device detection
function detectDevice() {
    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isTablet = /iPad|Android/i.test(ua) && !/Mobile/i.test(ua);
    
    document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    
    if (isMobile && !isTablet) {
        document.body.classList.add('device-mobile');
    } else if (isTablet) {
        document.body.classList.add('device-tablet');
    } else {
        document.body.classList.add('device-desktop');
    }
    
    // Also check screen size for better accuracy
    checkScreenSize();
}

function checkScreenSize() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        document.body.classList.add('screen-small');
        document.body.classList.remove('screen-medium', 'screen-large');
    } else if (width <= 1024) {
        document.body.classList.add('screen-medium');
        document.body.classList.remove('screen-small', 'screen-large');
    } else {
        document.body.classList.add('screen-large');
        document.body.classList.remove('screen-small', 'screen-medium');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    detectDevice();
    loadTranslations();
    checkLoginStatus();
});

// Re-detect on window resize
window.addEventListener('resize', function() {
    checkScreenSize();
});

// Load translations script
function loadTranslations() {
    const script = document.createElement('script');
    script.src = 'translations.js';
    script.onload = function() {
        updateTranslations();
    };
    document.head.appendChild(script);
}

// Update all translations on page
function updateTranslations() {
    if (typeof translations === 'undefined') {
        console.log('Translations not loaded yet');
        return;
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (let k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn('Translation key not found:', key);
                return;
            }
        }
        
        if (value) {
            el.textContent = value;
        }
    });
    
    // Update selected language button
    document.querySelectorAll('.lang-btn-float').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('selected');
        }
    });
}

// Check if user is logged in
function checkLoginStatus() {
    const savedUser = localStorage.getItem('bibleStudyUser');
    const savedLang = localStorage.getItem('bibleStudyLang');
    
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        userName = userData.name;
        userEmail = userData.email || '';
        isAdmin = userData.isAdmin || false;
        currentLanguage = savedLang || 'de';
        
        showMainApp();
    } else {
        currentLanguage = savedLang || 'de';
        showLoginPage();
        updateTranslations();
    }
}

// Toggle between registration and login
function toggleRegistration() {
    const regForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const buttons = document.querySelectorAll('.action-btn');
    
    regForm.style.display = 'block';
    loginForm.style.display = 'none';
    
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[0].classList.add('active'); // Register button
}

function toggleLogin() {
    const regForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const buttons = document.querySelectorAll('.action-btn');
    
    regForm.style.display = 'none';
    loginForm.style.display = 'block';
    
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[1].classList.add('active'); // Login button
}

// Handle registration
function handleRegistration(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    
    // Save user data
    const userData = {
        name: username,
        email: email,
        isAdmin: false
    };
    
    localStorage.setItem('bibleStudyUser', JSON.stringify(userData));
    userName = username;
    userEmail = email;
    isAdmin = false;
    
    showMainApp();
}

// Show/hide login tabs
function showLoginTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.login-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    if (tab === 'user') {
        document.getElementById('user-login-form').classList.add('active');
    } else {
        document.getElementById('admin-login-form').classList.add('active');
    }
}

// Show login page
function showLoginPage() {
    document.getElementById('login-page').classList.add('active');
    document.getElementById('main-app').classList.remove('active');
}

// Show main app
function showMainApp() {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('main-app').classList.add('active');
    
    // Initialize app components
    initializeApp();
    
    // Update user display
    document.getElementById('user-name-display').textContent = userName;
}

// Language selection
function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('bibleStudyLang', lang);
    
    // Update selected button (fixed selector)
    document.querySelectorAll('.lang-btn-float').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('selected');
        }
    });
    
    // Update all translations
    updateTranslations();
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    
    userName = usernameInput.value.trim();
    userEmail = emailInput.value.trim();
    isAdmin = false;
    
    if (!userName) {
        alert(currentLanguage === 'de' ? 'Bitte geben Sie einen Benutzernamen ein' :
              currentLanguage === 'en' ? 'Please enter a username' :
              'Silakan masukkan nama pengguna');
        return false;
    }
    
    // Save user data
    const userData = {
        name: userName,
        email: userEmail,
        isAdmin: false,
        loginDate: new Date().toISOString()
    };
    
    localStorage.setItem('bibleStudyUser', JSON.stringify(userData));
    localStorage.setItem('bibleStudyLang', currentLanguage);
    
    // Show main app
    showMainApp();
    
    return false;
}

// Handle admin login
function handleAdminLogin(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('admin-username');
    const passwordInput = document.getElementById('admin-password');
    
    const adminUsername = usernameInput.value.trim();
    const adminPassword = passwordInput.value;
    
    if (!adminUsername) {
        alert(currentLanguage === 'de' ? 'Bitte geben Sie einen Benutzernamen ein' :
              currentLanguage === 'en' ? 'Please enter a username' :
              'Silakan masukkan nama pengguna');
        return false;
    }
    
    // Check admin password
    if (adminPassword !== 'Der Weg') {
        alert(currentLanguage === 'de' ? 'Falsches Passwort!' :
              currentLanguage === 'en' ? 'Wrong password!' :
              'Kata sandi salah!');
        passwordInput.value = '';
        passwordInput.focus();
        return false;
    }
    
    // Save admin data
    userName = adminUsername + ' (Admin)';
    userEmail = '';
    isAdmin = true;
    
    const userData = {
        name: userName,
        email: '',
        isAdmin: true,
        loginDate: new Date().toISOString()
    };
    
    localStorage.setItem('bibleStudyUser', JSON.stringify(userData));
    localStorage.setItem('bibleStudyLang', currentLanguage);
    
    // Show main app
    showMainApp();
    
    return false;
}

// Logout
function logout() {
    const confirmMsg = currentLanguage === 'de' ? 'Möchten Sie sich wirklich abmelden?' :
                       currentLanguage === 'en' ? 'Do you really want to log out?' :
                       'Apakah Anda benar-benar ingin keluar?';
    
    if (confirm(confirmMsg)) {
        localStorage.removeItem('bibleStudyUser');
        userName = '';
        userEmail = '';
        showLoginPage();
    }
}

// Initialize main app
function initializeApp() {
    // Update translations
    updateTranslations();
    
    // Render chapters grid
    renderChaptersGrid();
    
    // Set initial daily verse
    setRandomVerse('daily-verse-preview');
    setRandomVerse('daily-verse-full');
    
    // Show home view
    showView('home');
}

// View Management
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.main .view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show selected view
    const view = document.getElementById(viewName + '-view');
    if (view) {
        view.classList.add('active');
        currentView = viewName;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Chapters Grid
function renderChaptersGrid() {
    const grid = document.getElementById('chapters-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    courseData.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.onclick = () => showChapter(chapter.id);
        
        card.innerHTML = `
            <div class="chapter-number">Kapitel ${chapter.id}</div>
            <h3 class="chapter-title">${chapter.title}</h3>
            <p class="chapter-subtitle">${chapter.subtitle}</p>
            <div class="chapter-lessons">${chapter.lessons.length} Lektionen</div>
        `;
        
        grid.appendChild(card);
    });
}

// Show Chapter Detail
function showChapter(chapterId) {
    const chapter = courseData.find(c => c.id === chapterId);
    if (!chapter) return;
    
    currentChapter = chapter;
    
    const detail = document.getElementById('chapter-detail');
    detail.innerHTML = `
        <div class="lesson-content">
            <div class="lesson-header">
                <h2 class="chapter-title">${chapter.title}</h2>
                <p class="chapter-subtitle">${chapter.subtitle}</p>
            </div>
            
            <div class="lessons-list">
                ${chapter.lessons.map(lesson => `
                    <div class="lesson-item" onclick="showLesson(${chapterId}, ${lesson.id})">
                        <span class="lesson-number">L${lesson.id}:</span>
                        <span class="lesson-title">${lesson.title}</span>
                        <p class="lesson-desc">${lesson.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    showView('chapter');
}

// Show Lesson Detail
function showLesson(chapterId, lessonId) {
    const chapter = courseData.find(c => c.id === chapterId);
    if (!chapter) return;
    
    const lesson = chapter.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    currentLesson = lesson;
    currentChapter = chapter;
    
    const detail = document.getElementById('lesson-detail');
    detail.innerHTML = `
        <div class="lesson-content">
            <div class="lesson-header">
                <div class="chapter-number">Kapitel ${chapterId} - Lektion ${lessonId}</div>
                <h2>${lesson.title}</h2>
                <p class="lesson-desc">${lesson.description}</p>
            </div>
            
            <div class="lesson-section">
                <h3>📖 Einleitung</h3>
                <p>${lesson.content.intro}</p>
            </div>
            
            <div class="lesson-section">
                <h3>📜 Bibelverse</h3>
                <div class="verse-card">
                    <p class="verse-text">${lesson.content.verses}</p>
                </div>
            </div>
            
            <div class="lesson-section">
                <h3>💡 Erklärung</h3>
                <p>${lesson.content.explanation}</p>
            </div>
            
            <div class="lesson-section">
                <h3>🌍 Fremdwörter / Foreign Words / Kata Asing</h3>
                <ul>
                    ${lesson.content.glossary.map(item => `
                        <li><strong>${item.term}:</strong> DE: ${item.de} | EN: ${item.en} | ID: ${item.id}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="lesson-section">
                <h3>🎯 Anwendung im Alltag</h3>
                <p>${lesson.content.application}</p>
            </div>
            
            <div class="lesson-section">
                <h3>✍️ Arbeitsauftrag</h3>
                <p>${lesson.content.assignment}</p>
            </div>
            
            <div class="lesson-section">
                <h3>🚀 Missionsübung</h3>
                <p>${lesson.content.missionExercise}</p>
                <p><em>"Wie kann ich diese Botschaft weitergeben?"</em></p>
            </div>
            
            <div class="lesson-section">
                <h3>📝 Mini-Test</h3>
                <ol>
                    ${lesson.content.quiz.map(q => `
                        <li>${q}</li>
                    `).join('')}
                </ol>
            </div>
        </div>
    `;
    
    showView('lesson');
}

// Go back to chapter from lesson
function goBackToChapter() {
    if (currentChapter) {
        showChapter(currentChapter.id);
    } else {
        showView('courses');
    }
}

// Set random verse
function setRandomVerse(elementId) {
    const verses = [
        {
            text: '"Im Anfang schuf Gott die Himmel und die Erde."',
            ref: '1. Mose 1:1'
        },
        {
            text: '"Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben."',
            ref: 'Johannes 3:16'
        },
        {
            text: '"Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Weg."',
            ref: 'Psalm 119:105'
        },
        {
            text: '"Vertraut auf den HERRN allezeit, denn in Jah, dem HERRN, ist ein Fels der Ewigkeiten!"',
            ref: 'Jesaja 26:4'
        },
        {
            text: '"Ich vermag alles in dem, der mich kräftigt."',
            ref: 'Philipper 4:13'
        },
        {
            text: '"Fürchte dich nicht, denn ich bin mit dir; schau nicht ängstlich umher, denn ich bin dein Gott!"',
            ref: 'Jesaja 41:10'
        },
        {
            text: '"Seid stark und mutig, fürchtet euch nicht und erschreckt nicht vor ihnen! Denn der HERR, dein Gott, er ist es, der mit dir geht; er wird dich nicht aufgeben und dich nicht verlassen."',
            ref: '5. Mose 31:6'
        },
        {
            text: '"Dem König der Zeitalter aber, dem unvergänglichen, unsichtbaren, alleinigen Gott, sei Ehre und Herrlichkeit von Ewigkeit zu Ewigkeit! Amen."',
            ref: '1. Timotheus 1:17'
        },
        {
            text: '"Und wir wissen, dass denen, die Gott lieben, alle Dinge zum Guten mitwirken, denen, die nach seinem Vorsatz berufen sind."',
            ref: 'Römer 8:28'
        },
        {
            text: '"Naht euch Gott, und er wird sich euch nahen!"',
            ref: 'Jakobus 4:8'
        }
    ];
    
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    const element = document.getElementById(elementId);
    
    if (element) {
        element.innerHTML = `
            <p class="verse-text">${randomVerse.text}</p>
            <p class="verse-ref">– ${randomVerse.ref}</p>
        `;
    }
}

// Generate new verse
function generateNewVerse() {
    setRandomVerse('daily-verse-full');
}
