const highscoreEntry = document.getElementById("highscoreList");
const quizScores = sessionStorage.getItem("playerScore");
console.log(quizScores);
const submit = document.getElementById("submitButton");
const reset = document.getElementById("resetButton");


submit.addEventListener("click", function addUserintials() {
    const intialsText = "";
    const userInput = document.querySelectorAll("input[type=text]");

    for (var i = 0; i < userInput.length; i++) {
        intialsText += userInput[i].value;
    }

    const li = document.createElement("li");
    const node = document.createTextNode(intialsText);
    li.appendChild(node);
    document.getElementById("highscoreList").appendChild(li) = li + "<p> -- </P>playerScore"
});

reset.addEventListener("click", function reset() {
    $(".highscoreList").find("input[type='text']").val("");
});




