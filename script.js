// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "What does HTML stand for?",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = "";
let score = -1;
let timeLeft = 59;

// render a question
function makeQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    makeQuestion();
    quiz.style.display = "block";
    quizProgress();
    countdown();
}

// render progress
function quizProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render
function countdown() {
    quizTimer = setTimeout(countdown, 1000);

    if (timeLeft == -1) {
        clearTimeout(quizTimer);
        gameOver();
    } else {
        counter.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

// function gameOver() {
//     scoreDiv.style.display = "block";
//     scoreDiv.innerHTML = "<p>" + timeLeft

// }

// check answers

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        makeQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(quizTimer);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    timeLeft -= 5;
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p>Your highscore is:</p>" + timeLeft
}
