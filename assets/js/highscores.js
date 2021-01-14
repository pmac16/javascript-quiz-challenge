var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var topScores = document.querySelector("#topScores");

highScores.sort(function(a,b) {
    return b.score - a.score;

})

for (let i = 0; i < 3; i++) {
    var list = document.createElement("li");
    list.textContent = highScores[i].name + ": " + highScores[i].score
    topScores.appendChild(list);
    
}

//display page to submit high score 
var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";


var playButton = document.createElement("button");
playButton.className = "container startButton play";
playButton.innerHTML = "Play Again"
playButton.onclick = function () {
    location.href = "index.html";
}

masterContainer.appendChild(playButton);



document.body.appendChild(masterContainer);

