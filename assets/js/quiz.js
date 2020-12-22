//Global variables
var timeLeft = 75;
var timeEl = document.getElementById('countdown');
var currentQuestionNumber = 0; //keeps track of which question we are on
var answerNumber = 0; //keeps track of which answer they picked
var currentChoiceNumber = 0;

var questionIndex=0
var choiceIndex = 0
var answerIndex = 0

//Arrays for Questions, answers, and choices
var questions = [ 
    {
        question:  "Commonly used data types DO NOT include: ",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        question:  "The condition in an if/else statement is enclosed within ___.", 
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses",
    }
]
    
   
//     "Arrays in JavaScript can be used to store ___.", 
//     "String values must be enclosed within ______ when being assigned to variables.", 
//     "A very useful tool used during development and debugging for printing content to the debugger is:", 
// ];

// var choices = [ ,
//     ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"]
//     ["Commas", "Curly Brackets", "Quotes", "Parantheses"],
//     ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"]


// var answers = [ "Parentheses","All of the Above","Quotes","Console Log"];

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
for (let i = 0; i < questions.length; i++) {
    
}

function displayQuestion(){
    console.log(questionIndex);
    // let is firts create a container to house teh question, the answers and the submit button
    var n = questionIndex

    var questionContainer = document.createElement("div");
    questionContainer.className = "container"
    questionContainer.id = "questionidcontainer";

    // let us create a variable with question and the h2 tag
    var questionTextString = "<h2>" + questions[n].question + "</h2>";

    // now let us display the question n
    var questionText = document.createElement("div");
    questionText.className = "container title";
    questionText.innerHTML = questionTextString;
    questionContainer.appendChild(questionText);


    //buttons
    var choiceContainer = document.createElement("div");
    choiceContainer.className = "container";
    questionContainer.appendChild(choiceContainer);

    for (let i = 0; i < questions[n].choices.length; i++) {
        var element = questions[n].choices[i]

        var choiceTextString1 = "<h3>" + element + "</h3>";
        var buttonChoice1 = document.createElement("button");
        buttonChoice1.className = "choice-button"
        buttonChoice1.setAttribute("data-choice", element)
        buttonChoice1.innerHTML = choiceTextString1
        choiceContainer.appendChild(buttonChoice1);
    }

    //Add the entire container to the document and display it
    document.body.appendChild(questionContainer);
    
    choiceContainer.addEventListener("click", function(event)  {
        if (event.target.matches ("button")) {
            if (event.target.dataset.choice === questions[n].answer) {
                rightAnswer();
            }
            
            console.log(event.target.dataset.choice)
        }
    }) 
   
  
}

function rightAnswer() {
    var removeQuestion = document.getElementById("questionidcontainer");
    removeQuestion.remove();
    questionIndex++;
    if (questionIndex > questions.length -1) {
        displayQuestion()
    }
}

//function for wrong answer
//end quiz function


//     buttonChoice4.addEventListener("click", function() {
//         answerNumber = choices[n][3];
//         if (answers[n] == choices[c][3]) {
//             window.alert("Correct");
//             currentQuestionNumber++;
//         } else {
//             window.alert("Wrong");
//             timeLeft -=15
//             var removeQuestionContainer = document.getElementById("questionidcontainer");
//             removeQuestionContainer.remove();
//         }
//     })
// }

