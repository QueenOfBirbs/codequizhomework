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
        question: "What animal is Pompompurin?",
        choiceA: " A Golden Retreiver dog.",
        choiceB: "A sentient pudding creation.",
        choiceC: "A stereotypically inaccurate caricature of a French dude.",
        correct: "A"
    }, {
        question: "What is Cinnamoroll's birthday?",
        choiceA: "Fictional characters don't have birthdays.",
        choiceB: "March 6th, 2001.",
        choiceC: "Christmas.",
        correct: "B"
    }, {
        question: "Why does Bad Badtz-Maru often represented with XO?",
        choiceA: "His name translates to that from Japanese.",
        choiceB: "His name has a meaning?",
        choiceC: "Who is Bad Badtz-Maru??? That Guy Fieri looking penguin right?",
        correct: "A"
    }, {
        question: "Who is the snail that is often seen with Keroppi??",
        choiceA: "The snack he's saving for later.",
        choiceB: "A regular snail??",
        choiceC: "It's Den Den, his friend.",
        correct: "C"
    }, {
        question: "Who is Kuromi's rival/girlfriend?",
        choiceA: "Kuromi doesn't have a girlfriend???",
        choiceB: "My Melody.",
        choiceC: "People don't remember Onegai My Melody so this isn't common knowledge lol.",
        correct: "B"
    }, {
        question: "What year did Little Twin Stars debut?",
        choiceA: "The beginning of time itself.",
        choiceB: "Litte Twin Stars doesn't exist and therefore hasn't ever debuted.",
        choiceC: "1975.",
        correct: "C"
    }, {
        question: "Does Sanrio have a train character?",
        choiceA: "Yes, his name is Shinkansen and he's adorable.",
        choiceB: "No, it's just some weird fever dream Isis had from her childhood.",
        choiceC: "Why would Sanrio make a train character? Trains aren't cute.",
        correct: "A"
    }, {
        question: "Who was Hangyodon made by?",
        choiceA: "Your mom.",
        choiceB: "Hisato Inoue.",
        choiceC: "Are you refering to Oannes, a fish/man Mesopotamian god? I don't think you can create an anciet deity.",
        correct: "B"
    }, {
        question: "Why is Gudetama an egg??",
        choiceA: "The creator thought egg yolks were kinda adorable because of their droopy demeanor.",
        choiceB: "Because why not?",
        choiceC: "Why do you know such niche knowledge on Sanrio characters? This is very specific.",
        correct: "A"
    }, {
        question: "Are San-X and Sanrio the same thing??",
        choiceA: "Yes.",
        choiceB: "No.",
        choiceC: "Technically no, but remembering which characters belong to which isn't really important.",
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