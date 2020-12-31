//display page to submit high score 
var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";

var scoresPage = document.createElement("div");
scoresPage.className = "container title";
scoresPage.innerHTML="<h1>High Scores</h1>";
masterContainer.appendChild(scoresPage);

var playButton = document.createElement("button");
playButton.className = "container startButton play";
playButton.innerHTML = "Play Again"
playButton.onclick = function () {
    location.href = "/index.html";
}
masterContainer.appendChild(playButton);



document.body.appendChild(masterContainer);