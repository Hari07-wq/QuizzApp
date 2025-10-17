/* ========== MAIN APPLICATION LOGIC ========== */
let currentSubject = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Initialize the application
function init() {
    displaySubjects();
    setupEventListeners();
}

// Display all subjects on home page
function displaySubjects() {
    const subjectGrid = document.getElementById('subjectGrid');
    subjectGrid.innerHTML = '';

    for (const [key, subject] of Object.entries(quizData)) {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
        `;
        card.onclick = () => startQuiz(key);
        subjectGrid.appendChild(card);
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('backBtn').addEventListener('click', goHome);
    document.getElementById('restartBtn').addEventListener('click', goHome);
}

// Start quiz for selected subject
function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById('homePage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    document.getElementById('resultPage').style.display = 'none';

    document.getElementById('subjectTitle').textContent = quizData[subjectKey].name + ' Quiz';
    document.getElementById('totalQuestions').textContent = quizData[subjectKey].questions.length;

    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = quizData[currentSubject].questions[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option${index}" value="${index}">
            <label for="option${index}">${option}</label>
        `;
        
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    selectedAnswer = null;
    document.getElementById('nextBtn').disabled = true;
}

// Select an option
function selectOption(index, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection to clicked option
    element.classList.add('selected');
    document.getElementById(`option${index}`).checked = true;
    
    selectedAnswer = index;
    document.getElementById('nextBtn').disabled = false;
}

// Go to next question
function nextQuestion() {
    if (selectedAnswer === null) return;

    // Check if answer is correct
    const question = quizData[currentSubject].questions[currentQuestionIndex];
    if (selectedAnswer === question.correct) {
        score++;
    }

    currentQuestionIndex++;

    // Check if quiz is complete
    if (currentQuestionIndex >= quizData[currentSubject].questions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

// Show quiz results
function showResults() {
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';

    const totalQuestions = quizData[currentSubject].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    document.getElementById('scoreDisplay').textContent = `${score} / ${totalQuestions}`;

    let message = '';
    if (percentage >= 90) {
        message = '🏆 Excellent! You\'re a master!';
    } else if (percentage >= 70) {
        message = '🎉 Great job! Well done!';
    } else if (percentage >= 50) {
        message = '👍 Good effort! Keep learning!';
    } else {
        message = '📚 Keep practicing! You\'ll improve!';
    }

    document.getElementById('resultMessage').textContent = message + ` You scored ${percentage}%`;
}

// Go back to home page
function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'none';
    
    currentSubject = null;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
}

// Start the application when page loads
window.onload = init;
