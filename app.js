// State
let state = {
    currentLesson: null,
    currentStep: 0,
    xp: 0,
    streak: 0,
    completedLessons: [],
    completedChallenges: [],
    completedProjectSteps: [],
    selectedOption: null,
    isNetworkLesson: false,
    currentChallenge: null,
    currentProjectStep: null
};

// Load state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem('jslingo-state');
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            // Ensure arrays exist
            if (!Array.isArray(state.completedLessons)) state.completedLessons = [];
            if (!Array.isArray(state.completedChallenges)) state.completedChallenges = [];
            if (!Array.isArray(state.completedProjectSteps)) state.completedProjectSteps = [];
        }
    } catch (e) {
        console.error('loadState error:', e);
        localStorage.removeItem('jslingo-state');
    }
    updateStats();
}

// Save state
function saveState() {
    localStorage.setItem('jslingo-state', JSON.stringify(state));
}

// Update UI stats
function updateStats() {
    document.getElementById('xp').textContent = state.xp;
    document.getElementById('streak').textContent = state.streak;
    renderOverview();
}

// Render the compact dashboard summary without duplicating progress logic in the markup.
function renderOverview() {
    const overview = document.getElementById('overview-grid');
    if (!overview) return;

    const javascriptLessons = typeof LESSONS !== 'undefined' ? LESSONS : [];
    const networkLessons = typeof NETWORK_LESSONS !== 'undefined' ? NETWORK_LESSONS : [];
    const totalLessons = javascriptLessons.length + networkLessons.length;
    const completedCount = new Set(state.completedLessons).size;
    const progress = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
    const nextLesson = javascriptLessons.find(lesson => !state.completedLessons.includes(lesson.id));

    overview.innerHTML = `
        <article class="overview-card overview-card-highlight">
            <div class="overview-icon">↗</div>
            <div>
                <span class="overview-label">پیشرفت کلی</span>
                <strong>${progress}%</strong>
            </div>
            <div class="mini-progress"><span style="width:${progress}%"></span></div>
        </article>
        <article class="overview-card">
            <div class="overview-icon">✦</div>
            <div>
                <span class="overview-label">امتیاز فعلی</span>
                <strong>${state.xp} <small>XP</small></strong>
            </div>
            <span class="overview-note">هر تمرین، یک قدم</span>
        </article>
        <article class="overview-card">
            <div class="overview-icon">→</div>
            <div>
                <span class="overview-label">قدم بعدی</span>
                <strong class="overview-next">${nextLesson ? nextLesson.title : 'مسیر کامل شد'}</strong>
            </div>
            <span class="overview-note">${completedCount} از ${totalLessons} درس</span>
        </article>
    `;

    const label = document.getElementById('lesson-progress-label');
    if (label) label.textContent = `${progress}% تکمیل شده`;
}

const PAGE_LABELS = {
    lessons: 'مسیر یادگیری',
    network: 'آموزش شبکه',
    project: 'پروژه عملی',
    bugbounty: 'مسیر باگ‌بانتی',
    challenges: 'چلنج‌ها',
    practice: 'تمرین آزاد',
    profile: 'پروفایل من'
};

function setActiveNav(page) {
    document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
        const isActive = link.dataset.page === page;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });

    const label = document.getElementById('active-page-label');
    if (label && PAGE_LABELS[page]) label.textContent = PAGE_LABELS[page];
}

// Show page
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    setActiveNav(page);

    if (page === 'lessons') {
        document.getElementById('lessons-page').classList.add('active');
        renderLessonPath();
    } else if (page === 'bugbounty') {
        document.getElementById('bugbounty-page').classList.add('active');
        // Reset tabs to lessons
        document.getElementById('bb-lessons-tab').style.display = 'block';
        document.getElementById('bb-challenges-tab').style.display = 'none';
        document.getElementById('bb-tab-lessons').classList.add('active');
        document.getElementById('bb-tab-challenges').classList.remove('active');
        renderBugBountyPath();
    } else if (page === 'practice') {
        document.getElementById('practice-page').classList.add('active');
    } else if (page === 'profile') {
        document.getElementById('profile-page').classList.add('active');
        renderProfile();
    }
}

// Continue from the first incomplete JavaScript lesson.
function startNextLesson() {
    const javascriptLessons = typeof LESSONS !== 'undefined'
        ? LESSONS.filter(lesson => lesson.id <= 40)
        : [];
    const nextLesson = javascriptLessons.find(lesson => !state.completedLessons.includes(lesson.id));

    if (nextLesson) startLesson(nextLesson.id);
    else showPage('lessons');
}

// Render lesson path (Duolingo style) - only JS lessons (id <= 40)
function renderLessonPath() {
    const path = document.getElementById('lesson-path');
    if (!path) return;
    if (typeof LESSONS === 'undefined') {
        console.error('LESSONS not loaded');
        return;
    }
    path.innerHTML = '';

    const jsLessons = LESSONS.filter(l => l.id <= 40);

    jsLessons.forEach((lesson, index) => {
        const isCompleted = state.completedLessons.includes(lesson.id);
        const isCurrent = index === 0 || state.completedLessons.includes(jsLessons[index - 1].id);
        const isLocked = !isCompleted && !isCurrent;

        let statusClass = isCompleted ? 'completed' : (isCurrent ? 'current' : 'locked');

        const node = document.createElement('div');
        node.className = `lesson-node ${statusClass}`;
        node.innerHTML = `
            ${isCompleted ? '✓' : lesson.icon}
            <span class="node-label">${lesson.title}</span>
        `;

        if (!isLocked) {
            node.onclick = () => startLesson(lesson.id);
        }

        path.appendChild(node);

        if (index < jsLessons.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'path-connector';
            path.appendChild(connector);
        }
    });
}

// Render bug bounty path (id > 40)
function renderBugBountyPath() {
    const path = document.getElementById('bugbounty-path');
    path.innerHTML = '';

    const bbLessons = LESSONS.filter(l => l.id > 40);

    bbLessons.forEach((lesson, index) => {
        const isCompleted = state.completedLessons.includes(lesson.id);
        const isCurrent = index === 0 || state.completedLessons.includes(bbLessons[index - 1].id);
        const isLocked = !isCompleted && !isCurrent;

        let statusClass = isCompleted ? 'completed' : (isCurrent ? 'current' : 'locked');

        const node = document.createElement('div');
        node.className = `lesson-node ${statusClass}`;
        node.innerHTML = `
            ${isCompleted ? '✓' : lesson.icon}
            <span class="node-label">${lesson.title}</span>
        `;

        if (!isLocked) {
            node.onclick = () => startLesson(lesson.id);
        }

        path.appendChild(node);

        if (index < bbLessons.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'path-connector';
            path.appendChild(connector);
        }
    });
}

// Go back to correct page
function goBack() {
    if (state.isNetworkLesson) {
        state.isNetworkLesson = false;
        showPage('network');
    } else if (state.currentLesson && state.currentLesson.id > 40 && state.currentLesson.id < 100) {
        showPage('bugbounty');
    } else {
        showPage('lessons');
    }
}

// Start a lesson
function startLesson(lessonId) {
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;

    state.currentLesson = lesson;
    state.currentStep = 0;
    state.selectedOption = null;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('lesson-view').classList.add('active');

    renderStep();
}

// Render current step
function renderStep() {
    const lesson = state.currentLesson;
    const step = lesson.steps[state.currentStep];
    const content = document.getElementById('lesson-content');
    const progress = document.getElementById('lesson-progress');
    const counter = document.getElementById('step-counter');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');

    // Update progress
    const progressPercent = ((state.currentStep + 1) / lesson.steps.length) * 100;
    progress.style.width = progressPercent + '%';
    counter.textContent = `${state.currentStep + 1}/${lesson.steps.length}`;

    // Hide feedback
    feedback.classList.add('hidden');
    feedback.classList.remove('success', 'error');

    // Reset buttons
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    state.selectedOption = null;

    if (step.type === 'teach') {
        content.innerHTML = `<h3>${step.title}</h3>${step.content}`;
        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    } else if (step.type === 'quiz') {
        content.innerHTML = `
            <h3>${step.title}</h3>
            <div class="quiz-options">
                ${step.options.map((opt, i) => `
                    <div class="quiz-option" onclick="selectOption(${i})" data-index="${i}">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        `;
    } else if (step.type === 'code') {
        content.innerHTML = `
            <h3>${step.title}</h3>
            <p>${step.instruction}</p>
            <textarea class="code-input" id="code-answer" placeholder="کد خودت رو اینجا بنویس..."></textarea>
        `;
    }
}

// Select quiz option
function selectOption(index) {
    state.selectedOption = index;
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

// Check answer
function checkAnswer() {
    const lesson = state.currentLesson;
    const step = lesson.steps[state.currentStep];
    const feedback = document.getElementById('feedback');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    let isCorrect = false;

    if (step.type === 'quiz') {
        if (state.selectedOption === null) return;
        isCorrect = state.selectedOption === step.correct;

        document.querySelectorAll('.quiz-option').forEach((opt, i) => {
            if (i === step.correct) opt.classList.add('correct');
            if (i === state.selectedOption && !isCorrect) opt.classList.add('wrong');
        });
    } else if (step.type === 'code') {
        const code = document.getElementById('code-answer').value.trim();
        if (!code) return;
        isCorrect = step.validate(code);
    }

    // Show feedback
    feedback.classList.remove('hidden');
    if (isCorrect) {
        feedback.classList.add('success');
        feedback.textContent = '✓ آفرین! درسته!';
        state.xp += 10;
        updateStats();
        saveState();
    } else {
        feedback.classList.add('error');
        feedback.textContent = '✗ اشتباهه! دوباره تلاش کن.';
    }

    if (isCorrect) {
        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }
}

// Next step
function nextStep() {
    const lesson = state.currentLesson;
    state.currentStep++;

    if (state.currentStep >= lesson.steps.length) {
        // Lesson complete!
        if (!state.completedLessons.includes(lesson.id)) {
            state.completedLessons.push(lesson.id);
            state.xp += 50;
            updateStats();
        }
        saveState();
        showLessonComplete();
    } else {
        renderStep();
    }
}

// Show lesson complete screen
function showLessonComplete() {
    const content = document.getElementById('lesson-content');
    content.innerHTML = `
        <div style="text-align:center; padding: 40px 0;">
            <div style="font-size:64px; margin-bottom:20px;">🎉</div>
            <h3 style="font-size:24px; margin-bottom:16px;">آفرین! درس تموم شد!</h3>
            <p style="font-size:18px; color:var(--primary);">+50 XP</p>
        </div>
    `;
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    setTimeout(() => {
        if (state.isNetworkLesson) {
            state.isNetworkLesson = false;
            showPage('network');
        } else if (state.currentLesson && state.currentLesson.id > 40 && state.currentLesson.id < 100) {
            showPage('bugbounty');
        } else {
            showPage('lessons');
        }
    }, 2500);
}

// Run playground code
function runPlayground() {
    const code = document.getElementById('playground-code').value;
    const output = document.getElementById('playground-output');

    if (!code.trim()) {
        output.style.color = '#ffcf70';
        output.textContent = 'اول کمی کد بنویس.';
        return;
    }

    if (typeof Worker === 'undefined') {
        output.style.color = '#ff6b6b';
        output.textContent = 'مرورگر این محیط اجرای جداگانه را پشتیبانی نمی‌کند.';
        return;
    }

    output.style.color = '#9fb2ca';
    output.textContent = 'در حال اجرا…';

    // Keep user code off the main page and stop runaway loops after a short timeout.
    const workerSource = `
        const format = value => {
            if (typeof value === 'string') return value;
            try {
                const json = JSON.stringify(value);
                return json === undefined ? String(value) : json;
            } catch (error) {
                return String(value);
            }
        };

        self.onmessage = ({ data: source }) => {
            const logs = [];
            const sandboxConsole = {
                log: (...args) => logs.push(args.map(format).join(' ')),
                info: (...args) => logs.push(args.map(format).join(' ')),
                warn: (...args) => logs.push('Warning: ' + args.map(format).join(' '))
            };

            try {
                const result = Function('console', '"use strict"; return eval(arguments[1]);')(sandboxConsole, source);
                if (result !== undefined && logs.length === 0) logs.push(format(result));
                self.postMessage({ ok: true, output: logs.join('\\n') || 'اجرا شد (خروجی‌ای نداشت)' });
            } catch (error) {
                self.postMessage({ ok: false, output: 'خطا: ' + error.message });
            }
        };
    `;

    const workerUrl = URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' }));
    const worker = new Worker(workerUrl);
    let finished = false;
    const finish = (ok, message) => {
        if (finished) return;
        finished = true;
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        output.style.color = ok ? '#a0f0a0' : '#ff6b6b';
        output.textContent = message;
    };

    worker.onmessage = event => finish(event.data.ok, event.data.output);
    worker.onerror = event => finish(false, 'خطا: ' + (event.message || 'خطای ناشناخته'));
    worker.postMessage(code);
    setTimeout(() => finish(false, 'اجرا بیشتر از حد مجاز طول کشید.'), 1500);
}

// Render profile
function renderProfile() {
    const stats = document.getElementById('profile-stats');
    const completedCount = state.completedLessons.length;
    const totalLessons = LESSONS.length + (typeof NETWORK_LESSONS !== 'undefined' ? NETWORK_LESSONS.length : 0);
    const percent = Math.round((completedCount / totalLessons) * 100);

    stats.innerHTML = `
        <div class="profile-card">
            <div class="value">⭐ ${state.xp}</div>
            <div class="label">امتیاز کل</div>
        </div>
        <div class="profile-card">
            <div class="value">🔥 ${state.streak}</div>
            <div class="label">روز متوالی</div>
        </div>
        <div class="profile-card">
            <div class="value">📚 ${completedCount}/${totalLessons}</div>
            <div class="label">درس‌های تکمیل شده</div>
        </div>
        <div class="profile-card">
            <div class="value">📊 ${percent}%</div>
            <div class="label">پیشرفت کلی</div>
        </div>
    `;
}

// Initialize
loadState();
renderLessonPath();
renderOverview();
setActiveNav('lessons');

// ===== CHALLENGES =====

function showPage_challenges() {
    renderChallenges();
}

function renderChallenges() {
    const list = document.getElementById('challenges-list');
    if (!list) return;
    list.innerHTML = '';

    CHALLENGES.forEach(ch => {
        const solved = state.completedChallenges && state.completedChallenges.includes(ch.id);
        const card = document.createElement('div');
        card.className = 'challenge-card' + (solved ? ' completed-challenge' : '');
        card.innerHTML = `
            <div class="challenge-header">
                <span class="challenge-title">${ch.title}</span>
                <span class="challenge-company">${ch.company}</span>
            </div>
            <div class="challenge-desc">${ch.desc}</div>
            <div class="challenge-tags">
                <span class="challenge-tag ${ch.difficulty === 'medium' ? 'medium' : ch.difficulty === 'hard' ? 'hard' : ''}">${ch.difficulty}</span>
                ${ch.tags.map(t => '<span class="challenge-tag">' + t + '</span>').join('')}
            </div>
        `;
        card.onclick = () => openChallenge(ch.id);
        list.appendChild(card);
    });
}

function openChallenge(id) {
    const ch = CHALLENGES.find(c => c.id === id);
    if (!ch) return;

    state.currentChallenge = ch;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('lesson-view').classList.add('active');

    const content = document.getElementById('lesson-content');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const progress = document.getElementById('lesson-progress');
    const counter = document.getElementById('step-counter');

    progress.style.width = '0%';
    counter.textContent = ch.company + ' | ' + ch.difficulty;
    feedback.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    checkBtn.textContent = '▶ اجرا و بررسی';
    checkBtn.onclick = checkChallenge;
    nextBtn.classList.add('hidden');

    content.innerHTML = `
        <h3>${ch.title}</h3>
        ${ch.instruction}
        <textarea class="code-input" id="challenge-code" style="min-height:150px;">${ch.starterCode}</textarea>
        <details style="margin-top:16px;">
            <summary style="cursor:pointer; color:var(--text-muted); font-size:13px;">💡 نمایش راه‌حل</summary>
            <pre style="margin-top:8px;"><code>${ch.solution}</code></pre>
        </details>
    `;
}

function checkChallenge() {
    const ch = state.currentChallenge;
    if (!ch) return;

    const code = document.getElementById('challenge-code').value;
    const feedback = document.getElementById('feedback');
    const checkBtn = document.getElementById('check-btn');
    const progress = document.getElementById('lesson-progress');

    let isCorrect = false;
    try {
        isCorrect = ch.validate(code);
    } catch(e) {
        isCorrect = false;
    }

    feedback.classList.remove('hidden', 'success', 'error');
    if (isCorrect) {
        feedback.classList.add('success');
        feedback.textContent = '✓ آفرین! چلنج حل شد! +30 XP';
        progress.style.width = '100%';

        if (!state.completedChallenges) state.completedChallenges = [];
        if (!state.completedChallenges.includes(ch.id)) {
            state.completedChallenges.push(ch.id);
            state.xp += 30;
            updateStats();
            saveState();
        }
    } else {
        feedback.classList.add('error');
        feedback.textContent = '✗ هنوز درست نیست. دوباره تلاش کن!';
    }
}

// Override showPage to handle challenges
const _originalShowPage = showPage;
showPage = function(page) {
    if (page === 'challenges') {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('challenges-page').classList.add('active');
        setActiveNav(page);
        renderChallenges();
    } else if (page === 'project') {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('project-page').classList.add('active');
        setActiveNav(page);
        renderProjectSteps();
    } else if (page === 'network') {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('network-page').classList.add('active');
        setActiveNav(page);
        renderNetworkPath();
    } else {
        _originalShowPage(page);
    }
};

function renderNetworkPath() {
    const path = document.getElementById('network-path');
    if (!path) return;
    path.innerHTML = '';

    if (typeof NETWORK_LESSONS === 'undefined') return;

    NETWORK_LESSONS.forEach((lesson, index) => {
        const isCompleted = state.completedLessons.includes(lesson.id);
        const isCurrent = index === 0 || state.completedLessons.includes(NETWORK_LESSONS[index - 1].id);
        const isLocked = !isCompleted && !isCurrent;

        let statusClass = isCompleted ? 'completed' : (isCurrent ? 'current' : 'locked');

        const node = document.createElement('div');
        node.className = `lesson-node ${statusClass}`;
        node.innerHTML = `
            ${isCompleted ? '✓' : lesson.icon}
            <span class="node-label">${lesson.title}</span>
        `;

        if (!isLocked) {
            node.onclick = () => startNetworkLesson(lesson.id);
        }

        path.appendChild(node);

        if (index < NETWORK_LESSONS.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'path-connector';
            path.appendChild(connector);
        }
    });
}

function startNetworkLesson(lessonId) {
    const lesson = NETWORK_LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;

    state.currentLesson = lesson;
    state.currentStep = 0;
    state.selectedOption = null;
    state.isNetworkLesson = true;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('lesson-view').classList.add('active');

    renderStep();
}

// Override goBack for challenges
const _originalGoBack = goBack;
goBack = function() {
    if (state.currentChallenge) {
        const isBB = state.currentChallenge.id && state.currentChallenge.id.startsWith('bb');
        state.currentChallenge = null;
        document.getElementById('check-btn').textContent = 'بررسی';
        document.getElementById('check-btn').onclick = checkAnswer;
        if (isBB) {
            showPage('bugbounty');
        } else {
            showPage('challenges');
        }
    } else if (state.currentProjectStep) {
        state.currentProjectStep = null;
        showPage('project');
    } else {
        _originalGoBack();
    }
};

// ===== PROJECT =====
function renderProjectSteps() {
    const container = document.getElementById('project-steps');
    if (!container) return;
    container.innerHTML = '';

    if (!state.completedProjectSteps) state.completedProjectSteps = [];

    PROJECT_STEPS.forEach(step => {
        const done = state.completedProjectSteps.includes(step.id);
        const div = document.createElement('div');
        div.className = 'project-step' + (done ? ' completed-step' : '');
        div.innerHTML = `
            <span class="step-icon">${step.icon}</span>
            <span class="step-title">${step.title}</span>
            ${done ? '<span class="step-check">✓</span>' : ''}
        `;
        div.onclick = () => openProjectStep(step.id);
        container.appendChild(div);
    });
}

function openProjectStep(id) {
    const step = PROJECT_STEPS.find(s => s.id === id);
    if (!step) return;

    state.currentProjectStep = step;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('lesson-view').classList.add('active');

    const content = document.getElementById('lesson-content');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const progress = document.getElementById('lesson-progress');
    const counter = document.getElementById('step-counter');

    const idx = PROJECT_STEPS.findIndex(s => s.id === id);
    progress.style.width = ((idx + 1) / PROJECT_STEPS.length * 100) + '%';
    counter.textContent = (idx + 1) + '/' + PROJECT_STEPS.length;
    feedback.classList.add('hidden');

    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = 'خوندم ✓';
    nextBtn.onclick = () => completeProjectStep(id);

    content.innerHTML = step.content;
}

function completeProjectStep(id) {
    if (!state.completedProjectSteps) state.completedProjectSteps = [];
    if (!state.completedProjectSteps.includes(id)) {
        state.completedProjectSteps.push(id);
        state.xp += 20;
        updateStats();
        saveState();
    }

    // Go to next step or back
    const idx = PROJECT_STEPS.findIndex(s => s.id === id);
    if (idx < PROJECT_STEPS.length - 1) {
        openProjectStep(PROJECT_STEPS[idx + 1].id);
    } else {
        showPage('project');
    }
}

// Bug Bounty tab switching
function showBBTab(tab) {
    document.getElementById('bb-tab-lessons').classList.remove('active');
    document.getElementById('bb-tab-challenges').classList.remove('active');
    if (tab === 'lessons') {
        document.getElementById('bb-lessons-tab').style.display = 'block';
        document.getElementById('bb-challenges-tab').style.display = 'none';
        document.getElementById('bb-tab-lessons').classList.add('active');
    } else {
        document.getElementById('bb-lessons-tab').style.display = 'none';
        document.getElementById('bb-challenges-tab').style.display = 'block';
        document.getElementById('bb-tab-challenges').classList.add('active');
        renderBBChallenges();
    }
}

// Render bug bounty challenges
function renderBBChallenges() {
    const list = document.getElementById('bb-challenges-list');
    if (!list) return;
    list.innerHTML = '';

    BB_CHALLENGES.forEach(ch => {
        const solved = state.completedChallenges && state.completedChallenges.includes(ch.id);
        const card = document.createElement('div');
        card.className = 'challenge-card' + (solved ? ' completed-challenge' : '');
        card.innerHTML = `
            <div class="challenge-header">
                <span class="challenge-title">${ch.title}</span>
                <span class="challenge-company">${ch.company}</span>
            </div>
            <div class="challenge-desc">${ch.desc}</div>
            <div class="challenge-tags">
                <span class="challenge-tag ${ch.difficulty === 'medium' ? 'medium' : ch.difficulty === 'hard' ? 'hard' : ''}">${ch.difficulty}</span>
                ${ch.tags.map(t => '<span class="challenge-tag">' + t + '</span>').join('')}
            </div>
        `;
        card.onclick = () => openChallenge(ch.id);
        list.appendChild(card);
    });
}

// Update openChallenge to handle BB challenges too
const _originalOpenChallenge = openChallenge;
openChallenge = function(id) {
    const ch = CHALLENGES.find(c => c.id === id) || (typeof BB_CHALLENGES !== 'undefined' && BB_CHALLENGES.find(c => c.id === id));
    if (!ch) return;

    state.currentChallenge = ch;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('lesson-view').classList.add('active');

    const content = document.getElementById('lesson-content');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const progress = document.getElementById('lesson-progress');
    const counter = document.getElementById('step-counter');

    progress.style.width = '0%';
    counter.textContent = ch.company + ' | ' + ch.difficulty;
    feedback.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    checkBtn.textContent = '▶ اجرا و بررسی';
    checkBtn.onclick = checkChallenge;
    nextBtn.classList.add('hidden');

    content.innerHTML = `
        <h3>${ch.title}</h3>
        ${ch.instruction}
        <textarea class="code-input" id="challenge-code" style="min-height:150px;">${ch.starterCode}</textarea>
        <details style="margin-top:16px;">
            <summary style="cursor:pointer; color:var(--text-muted); font-size:13px;">💡 نمایش راه‌حل</summary>
            <pre style="margin-top:8px;"><code>${ch.solution}</code></pre>
        </details>
    `;
};
