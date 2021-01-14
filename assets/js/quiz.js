//Global variables
var timeLeft = 75;
var timeEl = document.getElementById('countdown');

var questionIndex=0

//Array for high scores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


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
    },
    {
        question:  "Arrays in JavaScript can be used to store ___.", 
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question:  "String values must be enclosed within ______ when being assigned to variables.", 
        choices: ["Commas", "Curly Brackets", "Quotes", "Parantheses"],
        answer: "Curly Brackets"
    },
    {
        question:  "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
        answer: "Console Log"
    }
]
    
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
    
    var n = questionIndex

    var questionContainer = document.createElement("div");
    questionContainer.className = "container"
    questionContainer.id = "questionidcontainer";

    //  Question Text Variable
    var questionTextString = "<h2>" + questions[n].question + "</h2>";

    // Display the question
    var questionText = document.createElement("div");
    questionText.className = "container title";
    questionText.innerHTML = questionTextString;
    questionContainer.appendChild(questionText);

    //Button Choices
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
            else {
                wrongAnswer();
            } 
        }
    }) 
}

function endQuiz() {
    var masterContainer = document.createElement("div");
    masterContainer.className = "container";
    masterContainer.id = "id-container";

    var endPage = document.createElement("div");
    endPage.className = "container title";
    endPage.innerHTML = "<h1>Great game!</h1>";
    masterContainer.appendChild(endPage);
    
    //display the score 
    var displayScore= document.createElement("div");
    document.getElementById('result');
    displayScore.className= "container";
    displayScore.innerHTML = "<h2> Congrats! Your final score was " + localStorage.getItem("mostRecentScore") + "!</h2>";
    masterContainer.appendChild(displayScore);
    
    var directions = document.createElement("div");
    directions.className = "container";
    directions.innerHTML="<h2>Please enter your name below.</h2>";
    masterContainer.appendChild(directions);
    
    //form for submitting high score
    var nameForm = document.createElement("form");
    nameForm.setAttribute("method", "post");
    nameForm.className = "input";

    var username= document.createElement("input");
    username.setAttribute("type", "text");
    username.setAttribute("name", "firstName");
    username.setAttribute("placeholder", "First Name");
    username.className="inputBox";
    
    nameForm.appendChild(username);
    
    masterContainer.appendChild(nameForm);

    
    var submitButton = document.createElement("button");
    submitButton.className = "container submitButton";
    submitButton.innerHTML = "Submit Name"
    submitButton.onclick= "saveHighScore(event)";
    masterContainer.appendChild(submitButton);
    
    document.body.appendChild(masterContainer);

    submitButton.addEventListener("click", function() {
        var name= username.value
        var nameScore = {
            name: name,
            score: localStorage.getItem("mostRecentScore")
            //store score in another variable first (like with name)
        }
        
        highScores.push(nameScore);
        localStorage.setItem("highScores", JSON.stringify(highScores));

        window.location.href="../../highscores.html"
    })

    timeLeft = 0;
}




function rightAnswer() {
    var removeQuestion = document.getElementById("questionidcontainer");
    removeQuestion.remove();
    questionIndex++;
    if (questionIndex <= questions.length -1) {
        window.alert("Correct!");
        displayQuestion()
    }
    else {
        localStorage.setItem("mostRecentScore", timeLeft)
        endQuiz();
    }
}

function wrongAnswer() {
    var removeQuestion = document.getElementById("questionidcontainer");
    removeQuestion.remove();
    questionIndex++;
    timeLeft -= 10;
    if (questionIndex <= questions.length -1) {
        window.alert("Wrong!");
        displayQuestion()
    }
    else {
        localStorage.setItem("mostRecentScore", timeLeft)
        endQuiz();
    }
}







