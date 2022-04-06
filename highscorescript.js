const highscoreEntry = document.getElementById("highscoreList");
const quizScores = sessionStorage.getItem("playerScore");
console.log(quizScores);


function addUserintials() {
    const intialsText = "";
    const userInput = document.querySelectorAll("input[type=text]");

    for (var i = 0; i < userInput.length; i++) {
        intialsText += userInput[i].value;
    }

    const li = document.createElement("li");
    const node = document.createTextNode(intialsText);
    li.appendChild(node);
    document.getElementById("highscoreList").appendChild(li) = li + "<p> -- </P>playerScore"
}





