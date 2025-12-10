// Application State
let currentView = 'home';
let currentChapter = null;
let currentLesson = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
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
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show selected view
    const view = document.getElementById(viewName + '-view');
    if (view) {
        view.classList.add('active');
        currentView = viewName;
    }
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
            <div class="chapter-lessons">📚 ${chapter.lessons.length} Lektionen</div>
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
                <div class="chapter-number">Kapitel ${chapter.id}</div>
                <h2>${chapter.title}</h2>
                <p style="color: var(--gray); font-size: 1.1rem; font-style: italic;">${chapter.subtitle}</p>
            </div>
            
            <div class="lesson-section">
                <h3>Lektionen</h3>
                <p>Dieses Kapitel enthält 10 Lektionen, die Ihnen helfen, die biblischen Wahrheiten zu verstehen und in Ihrem Leben anzuwenden.</p>
            </div>
            
            <div class="lessons-list">
                ${chapter.lessons.map(lesson => `
                    <div class="lesson-item" onclick="showLesson(${chapter.id}, ${lesson.num})">
                        <span class="lesson-number">L${lesson.num}</span>
                        <div>
                            <div class="lesson-title">${lesson.title}</div>
                            <div class="lesson-desc">${lesson.desc}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="lesson-section" style="margin-top: 40px; background: var(--beige); padding: 20px; border-radius: 10px;">
                <h3>📝 Abschlusstest</h3>
                <p>Nach Abschluss aller 10 Lektionen steht ein Kapiteltest zur Verfügung. Nach erfolgreichem Abschluss erhalten Sie ein Zertifikat.</p>
                <button class="btn btn-secondary" style="margin-top: 10px;" disabled>Test (verfügbar nach allen Lektionen)</button>
            </div>
        </div>
    `;
    
    showView('chapter');
}

// Show Lesson Detail
function showLesson(chapterId, lessonNum) {
    const chapter = courseData.find(c => c.id === chapterId);
    if (!chapter) return;
    
    const lesson = chapter.lessons.find(l => l.num === lessonNum);
    if (!lesson) return;
    
    currentLesson = { chapter, lesson };
    
    const detail = document.getElementById('lesson-detail');
    detail.innerHTML = `
        <div class="lesson-content">
            <div class="lesson-header">
                <div class="chapter-number">Kapitel ${chapter.id} – Lektion ${lesson.num}</div>
                <h2>${lesson.title}</h2>
                <p style="color: var(--gray); font-size: 1.1rem;">${lesson.desc}</p>
            </div>
            
            <div class="lesson-section">
                <h3>📖 Einleitung</h3>
                <p>Diese Lektion führt Sie in das Thema "${lesson.title}" ein und vermittelt wichtige biblische Grundlagen. Sie werden lernen, wie diese Wahrheiten Ihr Leben und Ihren Dienst bereichern können.</p>
            </div>
            
            <div class="lesson-section">
                <h3>📜 Bibelverse</h3>
                <div class="verse-card">
                    <p class="verse-text">Hier würden die relevanten Bibelverse für diese Lektion stehen, die aus der Elberfelder Bibel zitiert werden.</p>
                    <p class="verse-ref">– Beispielvers</p>
                </div>
                <p style="margin-top: 15px;"><em>Hinweis: In der vollständigen Version werden hier spezifische Verse zur Lektion angezeigt.</em></p>
            </div>
            
            <div class="lesson-section">
                <h3>💡 Erklärung</h3>
                <p>Diese Sektion bietet eine ausführliche Erklärung des Lektionsthemas. Sie werden die theologischen und praktischen Aspekte verstehen lernen.</p>
                <p><strong>Schlüsselpunkte:</strong></p>
                <ul>
                    <li>Biblische Grundlage des Themas</li>
                    <li>Historischer und kultureller Kontext</li>
                    <li>Relevanz für das Leben heute</li>
                    <li>Praktische Anwendung im Alltag</li>
                </ul>
            </div>
            
            <div class="lesson-section">
                <h3>🔤 Fremdwörter</h3>
                <p><strong>Mehrsprachiges Glossar (DE/EN/ID):</strong></p>
                <ul>
                    <li><strong>Offenbarung</strong> – Revelation – Wahyu</li>
                    <li><strong>Gnade</strong> – Grace – Kasih karunia</li>
                    <li><strong>Heiligung</strong> – Sanctification – Pengudusan</li>
                </ul>
            </div>
            
            <div class="lesson-section">
                <h3>🌱 Anwendung im Alltag</h3>
                <p>Wie können Sie diese Lektion in Ihrem täglichen Leben umsetzen?</p>
                <ul>
                    <li>Reflektieren Sie über die gelernten Wahrheiten</li>
                    <li>Beten Sie für Weisheit in der Anwendung</li>
                    <li>Teilen Sie Ihre Erkenntnisse mit anderen</li>
                    <li>Setzen Sie konkrete Schritte um</li>
                </ul>
            </div>
            
            <div class="lesson-section">
                <h3>✍️ Arbeitsauftrag</h3>
                <p><strong>Reflexionsfragen:</strong></p>
                <ul>
                    <li>Was hat Sie in dieser Lektion am meisten angesprochen?</li>
                    <li>Wie möchten Sie das Gelernte in Ihrem Leben umsetzen?</li>
                    <li>Welche Herausforderungen sehen Sie dabei?</li>
                </ul>
                <textarea style="width: 100%; min-height: 120px; margin-top: 15px; padding: 15px; border: 2px solid var(--beige); border-radius: 10px; font-size: 1rem;" placeholder="Schreiben Sie hier Ihre Gedanken und Reflexionen..."></textarea>
            </div>
            
            <div class="lesson-section" style="background: linear-gradient(135deg, var(--sky-blue) 0%, #6DB3E8 100%); color: white; padding: 30px; border-radius: 15px;">
                <h3 style="color: white;">🌍 Missionsübung</h3>
                <p><strong>Wie kann ich diese Botschaft weitergeben?</strong></p>
                <p>Überlegen Sie konkret:</p>
                <ul>
                    <li>Mit wem könnten Sie diese Wahrheit teilen?</li>
                    <li>Welche Gelegenheit bietet sich in nächster Zeit?</li>
                    <li>Wie können Sie die Botschaft verständlich kommunizieren?</li>
                </ul>
            </div>
            
            <div class="lesson-section">
                <h3>📝 Mini-Test</h3>
                <p><strong>Überprüfen Sie Ihr Verständnis:</strong></p>
                <div style="background: var(--white); padding: 20px; border-radius: 10px; border-left: 4px solid var(--gold);">
                    <p><strong>Frage 1:</strong> Was ist die Hauptaussage dieser Lektion?</p>
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin: 8px 0; cursor: pointer;">
                            <input type="radio" name="q1" value="a"> Option A
                        </label>
                        <label style="display: block; margin: 8px 0; cursor: pointer;">
                            <input type="radio" name="q1" value="b"> Option B
                        </label>
                        <label style="display: block; margin: 8px 0; cursor: pointer;">
                            <input type="radio" name="q1" value="c"> Option C
                        </label>
                    </div>
                    <button class="btn btn-primary" style="margin-top: 15px;" onclick="alert('Test-Funktion wird in der vollständigen Version verfügbar sein!')">Antwort überprüfen</button>
                </div>
                <p style="margin-top: 15px;"><em>Hinweis: Dies ist ein Demo. Die vollständige Version enthält spezifische Fragen zu jeder Lektion.</em></p>
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
                <button class="btn btn-primary" onclick="completeLesson()" style="font-size: 1.2rem; padding: 15px 40px;">Lektion abschließen ✓</button>
            </div>
        </div>
    `;
    
    showView('lesson');
}

// Go back to chapter
function goBackToChapter() {
    if (currentChapter) {
        showChapter(currentChapter.id);
    } else {
        showView('courses');
    }
}

// Complete lesson
function completeLesson() {
    if (!currentLesson) return;
    
    const { chapter, lesson } = currentLesson;
    
    alert(`✅ Glückwunsch!\n\nSie haben Lektion ${lesson.num} "${lesson.title}" abgeschlossen.\n\nIhre Fortschritte werden in der vollständigen Version gespeichert.`);
    
    // Go back to chapter view
    goBackToChapter();
}

// Daily Verse Functions
function setRandomVerse(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    
    element.innerHTML = `
        <p class="verse-text">"${verse.text}"</p>
        <p class="verse-ref">– ${verse.ref}</p>
    `;
}

function generateNewVerse() {
    setRandomVerse('daily-verse-full');
}

// Language Selector
document.getElementById('language')?.addEventListener('change', function(e) {
    const lang = e.target.value;
    alert(`Sprachauswahl: ${lang}\n\nDie vollständige Version wird Inhalte in Deutsch, English und Bahasa Indonesia anbieten.`);
});

// Log app initialization
console.log('📖 Die Bibel – Glauben der Weg zur Quelle');
console.log('Demo-Version initialisiert');
console.log(`${courseData.length} Kapitel mit insgesamt ${courseData.reduce((sum, ch) => sum + ch.lessons.length, 0)} Lektionen geladen`);
