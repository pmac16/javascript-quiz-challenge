//display start page
var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";

var startPage = document.createElement("div");
startPage.className = "start-page";
startPage.innerHTML="<h1>JavaScript Challenge</h1>";
masterContainer.appendChild(startPage);

var directions = document.createElement("div");
directions.className = "directions";
directions.innerHTML="<h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>";
masterContainer.appendChild(directions);

var startButton = document.createElement("button");
startButton.className = "container startButton";
startButton.innerHTML = "Start Quiz"
startButton.onclick = function() {startQuiz()}; 
masterContainer.appendChild(startButton);

document.body.appendChild(masterContainer);