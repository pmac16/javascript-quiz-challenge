//Global variables
var timeLeft = 75;
var timeEl = document.getElementById('countdown');
var currentQuestionNumber = 1; //keeps track of which question we are on
var answerNumber = 0; //keeps track of which answer they picked

var questions = [ 
    "Commonly used data types DO NOT include: ", 
    "The condition in an if/else statement is enclosed within ___.", 
    "Arrays in JavaScript can be used to store ___.", 
    "String values must be enclosed within ______ when being assigned to variables.", 
    "A very useful tool used during development and debugging for printing content to the debugger is:", 
];

var choices = [ 
    ["Strings", "Booleans", "Alerts", "Numbers"],
    ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"]
    ["Commas", "Curly Brackets", "Quotes", "Parantheses"],
    ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"]
];

var answers = ["Booleans", "Parentheses","All of the Above","Quotes","Console Log"];

//display start page
var masterContainer = document.createElement("div");
masterContainer.className = "container";
masterContainer.id = "id-container";

var startPage = document.createElement("div");
startPage.className = "container title";
startPage.innerHTML="<h1>JavaScript Challenge</h1>";
masterContainer.appendChild(startPage);

var directions = document.createElement("div");
directions.className = "container";
directions.innerHTML="<h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>";
masterContainer.appendChild(directions);

var startButton = document.createElement("button");
startButton.className = "container startButton";
startButton.innerHTML = "Start Quiz"
startButton.onclick = function() {startQuiz()}; 
masterContainer.appendChild(startButton);

document.body.appendChild(masterContainer);

//Remove the directions and start the quiz    
function startQuiz () {
    var removeDirections = document.getElementById("id-container");
    removeDirections.remove();

    //Start the Timer 
    setTimeout(timerCount, 1000);

    //Display each question one at a time
    var currentQuestionNumber= 0;
    displayQuestion();

};

//Timer Countdown

function timerCount() {
    document.getElementById("countdown").innerHTML="Time:" + timeLeft;
    if (timeLeft >0) {
        timeLeft = timeLeft -1;
        setTimeout(timerCount,1000);
    } else {
        return;
    }
}

// //Function to display the question
// function displayQuestion() {

//     //container to hold the questions
//     var n = currentQuestionNumber;

//     var questionContainer = document.createElement("div");
//     questionContainer.className = "container";
//     questionContainer.id="questionidcontainer"

//     // let us create a variable with the question in formmating
//     var questionTextString = "<h2" + questions[n] + "</h2>";

//     //display the question 
//     var questionText = document.createElement("div");
//     questionText.className = "container";
//     questionText.innerHTML= questionTextString;
//     questionContainer.appendChild(questionText);

//     //display the answer choices
//     var choiceForm = document.createElement("form");
//     var choice1=
// }