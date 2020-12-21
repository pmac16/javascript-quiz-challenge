//Global variables
var timeLeft = 75;
var timeEl = document.getElementById('countdown');
var currentQuestionNumber = 0; //keeps track of which question we are on
var answerNumber = 0; //keeps track of which answer they picked
var currentChoiceNumber = 0;

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
    // var currentQuestionNumber= 0;
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

//Function to display the question
function displayQuestion(){

    // let is firts create a container to house teh question, the answers and the submit button
    var n = currentQuestionNumber;

    var questionContainer = document.createElement("div");
    questionContainer.className = "container"
    questionContainer.id = "questionidcontainer";

    // let us create a variable with question and the h2 tag
    var questionTextString = "<h2>" + questions[n] + "</h2>";

    // now let us display the question n
    var questionText = document.createElement("div");
    questionText.className = "container title";
    questionText.innerHTML = questionTextString;
    questionContainer.appendChild(questionText);

    // now let us display the answer choices as individual radio buttons in a form
    var c = currentChoiceNumber;

    //button for choice 1
    var choiceTextString1 = "<h3>" + choices[c][0] + "</h3>"

    var choiceContainer = document.createElement("div");
    choiceContainer.className = "container";
    questionContainer.appendChild(choiceContainer);

    var buttonChoice1 = document.createElement("button");
    buttonChoice1.className = "choice-button"
    buttonChoice1.innerHTML = choiceTextString1
    choiceContainer.appendChild(buttonChoice1);

     //button for choice 2
    var choiceTextString2 = "<h3>" + choices[c][1] + "</h3>"

    var buttonChoice2 = document.createElement("button");
    buttonChoice2.className = "choice-button"
    buttonChoice2.innerHTML = choiceTextString2
    choiceContainer.appendChild(buttonChoice2);

     //button for choice 3
    var choiceTextString3 = "<h3>" + choices[c][2] + "</h3>"

    var buttonChoice3 = document.createElement("button");
    buttonChoice3.className = "choice-button"
    buttonChoice3.innerHTML = choiceTextString3
    choiceContainer.appendChild(buttonChoice3);

     //button for choice 4
    var choiceTextString4 = "<h3>" + choices[c][3] + "</h3>"

    var buttonChoice4 = document.createElement("button");
    buttonChoice4.className = "choice-button"
    buttonChoice4.innerHTML = choiceTextString4
    choiceContainer.appendChild(buttonChoice4);


    

    


    //  now let us add the entire container to the document and display it
    document.body.appendChild(questionContainer);

}

