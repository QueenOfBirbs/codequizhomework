// ELEMENT IDS
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// THE QUIZ QUESTIONS 
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

// ADDDING MORE VARIABLES
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = "";
let score = -1;
let timeLeft = 59;

// QUESTION STUFF
function makeQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// STARTING QUIZ AND EVERYTHING ALONGSIDE IT
function startQuiz() {
    start.style.display = "none";
    makeQuestion();
    quiz.style.display = "block";
    quizProgress();
    countdown();
}

// MAKING THE QUESTIONS TRIGGER THE PROGRESS BAR
function quizProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// TIMER COUNTDOWN
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

// IF TIME RUN OUTS BEFORE ANSWERING ALL OF THE QUESTIONS
function gameOver() {
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p>Your highscore is:</p>" + 0
}

// CHECKS USER ANSWERS AND CHANGES THE COLOR OF THE CIRCLES IN THE PROGRESS BAR
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // ANSWER IS RIGHT AND CHANGES PROGRESS CIRCLE TO GREEN
        answerIsCorrect();
    } else {
        // ANSWER IS WRONG AND CHANGES PROGRESS CIRCLE TO RED
        answerIsWrong();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        makeQuestion();
    } else {
        // ENDING QUIZ AND SHOWING THEIR SCORE
        clearInterval(quizTimer);
        scoreRender();
    }
}

// PROGRESS CIRCLE GREEN CHANGE
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// PROGRESS CIRCLE RED CHANGE AND TAKING AWAY 6 SECONDS FOR A WRONG ANSWER
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    timeLeft -= 5;
}

// GIVING OUT THE FINAL SCORE AND RE-DIRECTING THEM TO THE HIGHSCORE PAGE
function scoreRender() {
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p>Your highscore is:</p>" + timeLeft;
    redirectUser();
}

// GIVES THE USER TIME TO SEE SCORE
function redirectUser () {
        var pageStall = setTimeout(function () {
            window.location.href = "https://queenofbirbs.github.io/codequizhomework/highscore.html";
            window.clearTimeout(pageStall);
        }, 5000);
    }


// // STORE HIGHSCORES FROM GAME FOR SCOREBOARD (DOESN'T WORK LOL)

// const playerScore = timeLeft
// function HighScores() {
//     if (typeof (Storage) !== "undefined") {
//         var scores = false;
//         if (localStorage["playerScore"]) {
//             playerScore.style.display = "block";
//             scoreDiv.innerHTML = '';
//             scores = JSON.parse(localStorage["playerScore"]);
//             scores = scores.sort(function (a, b) { return parseInt(b) - parseInt(a) });

//             for (var i = 0; i < 10; i++) {
//                 var s = scores[i];
//                 var fragment = document.createElement('li');
//                 fragment.innerHTML = (typeof (s) != "undefined" ? s : "");
//                 quizScores.appendChild(fragment);
//             }
//         }
//     } else {
//         scoreDiv.display = "none";
//     }
// }


// LINKS THIS SHEET TO THE OTHER JAVASCRIPT SHEET SO IT CAN SHARE HIGHSCORE DATA
const quizScores = "playerScore";
sessionStorage.setItem("playerScore", quizScores);