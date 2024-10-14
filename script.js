const questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the main component of the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen"
    },
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    optionsContainer.innerHTML = '';
    nextButton.classList.add('hidden');
    timeLeft = 10;
    timerElement.innerText = timeLeft;
}

function selectOption(selectedOption) {
    clearInterval(timer);
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was: " + correctAnswer);
    }

    // Show next button after answering
    nextButton.classList.remove('hidden');
    nextButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert("Quiz finished!");
            currentQuestionIndex = 0; // Reset for next time
            startQuiz();
        }
    };
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(""); // Trigger the selectOption function to handle time up
        }
    }, 1000);
}

startQuiz();