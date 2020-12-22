//display start page
var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";

var scoresPage = document.createElement("div");
scoresPage.className = "container title";
scoresPage.innerHTML="<h1>High Scores</h1>";
masterContainer.appendChild(scoresPage);

var startButton = document.createElement("button");
startButton.className = "container startButton";
startButton.innerHTML = "Submit"
// startButton.onclick = function() {enterScore()}; 
masterContainer.appendChild(startButton);

document.body.appendChild(masterContainer);