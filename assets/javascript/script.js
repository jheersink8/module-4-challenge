// NOTE TO QUIZ-MAKER: To add more questions to quiz, simply add the desired value at the end of each object array below using the syntax of -- , "Content" -- (minus the dashes). Also, modify the value of the timer in --var timer-- below. The page will dynamically update to accommodate the added questions and time parameters.// 
var timerValue = 90;
var questionList = {
    questionNumber: ["Question 1", "Question 2"],
    question: ["What is your favorite number", "What is your favorite color?"],
    correctAnswer: ["*0*", "*Blue*"],
    incorrectAnswer1: ["1", "Red"],
    incorrectAnswer2: ["2", "Pink"],
    incorrectAnswer3: ["3", "Yellow"]
};
// -----------------------END OF CONTENT QUIZ MAKER SHOULD EDIT-----------------------//

// Variables//

// Counter variables (timer at top for quiz maker to modifiy)// 
var count = 0;
var score = 0;

// Welcome screen variables and message output//
var welcomeMessage = document.querySelector(".welcomeMessage");
var quizLength = questionList.questionNumber.length;
document.getElementById("quizLength").textContent = quizLength;
document.getElementById("timeStart").textContent = timerValue;

// Timer variables//
var timerBox = document.querySelector(".timerBox");
var timer = timerValue;
var timeLeft = document.getElementById("timeLeft");
timeLeft.textContent = timer;

// Quiz control variables//
var quizGroup = document.querySelector(".quizGroup");
var questionNumberOutput = document.querySelector(".questionNumberOutput");
var questionOutput = document.querySelector(".questionOutput");
var buttonChoices = document.querySelectorAll(".buttonChoice");

// Scoreboard output variables//
var highScoresList = document.querySelector(".highScoresList");
var userInitials = document.querySelector("#userInitials");
var userScore = document.querySelector("#userScore");
var userTime = document.querySelector("#userTime");

// Results page variables//
var resultsGroup = document.querySelector(".results");
var userPrintOut = document.querySelector("#userPrintOut");
var initialsTxt = document.querySelector("#inputText");

// Button output message and button control variables//
var selectionResult = document.getElementById("selectionResult");
var advanceQuizBtn = document.getElementById("advanceQuiz");
var highScoresBtn = document.querySelector("#highScores");
var clearBtn = document.querySelector("#clear");

// Object Values for scoreboard//
var hof = {
    initialsObj: [],
    scoreObj: [],
    timeObj: [],
}

// Function to present question and [randomized order of] multiple choice options on screen// 
function presentQuestion(x) {
    // Present the question number and question on page.//
    questionNumberOutput.textContent = questionList.questionNumber[x];
    questionOutput.textContent = questionList.question[x];

    // Hide/show relevant content.//
    advanceQuizBtn.textContent = "Next Question";
    welcomeMessage.setAttribute("class", "hide");
    quizGroup.setAttribute("class", "quizGroup");

    // Create a new array with "correctAnswer", "incorrectAnswer1", incorrectAnswer2", or "incorrectAnswer3" in a random order.//
    var answerArrayMod0 = ["correctAnswer", "incorrectAnswer1", "incorrectAnswer2", "incorrectAnswer3"];
    var rndArray = [];
    for (var i = answerArrayMod0.length; i > 0; i--) {
        var removeArray = answerArrayMod0.splice((Math.floor(Math.random() * i)), 1);
        rndArray.push(removeArray[0]);
    };

    // Place answer values in buttons and also assign data-sets on if the button is correct or incorrect//
    for (var j = 0; j < rndArray.length; j++) {
        if (rndArray[j] === "correctAnswer") {
            buttonChoices[j].textContent = questionList[rndArray[j].toString()][x];
            buttonChoices[j].setAttribute("data-answer", "correctAnswer")
        } else {
            buttonChoices[j].textContent = questionList[rndArray[j].toString()][x];
            buttonChoices[j].setAttribute("data-answer", "incorrectAnswer")
        }
    }
};

// Controls for advanceQuiz button. Function is contextual depending on user location in quiz.//
advanceQuizBtn.addEventListener("click", function () {
    if (count === 0) {
        advance();
        countdown();
    } else if (count > 0 && count < quizLength) {
        advance();
    } else if (count === quizLength) {
        calcScore();
    } else {
        enterScore();
    }
});

// Function to begin quiz and then advance questions. Should only work once per question.//
function advance() {
    if (advanceQuizBtn.getAttribute("data-status") === "answered") {
        presentQuestion(count++);
        selectionResult.textContent = "";
        advanceQuizBtn.setAttribute("data-status", "unanswered");
        highScoresBtn.setAttribute("class", "hide");
        timerBox.setAttribute("class", "timerBox");
    }
    return;
};

// Function to calculate final score.//
function calcScore() {
    finalScore = Math.round(score / (quizLength) * 100);
    userPrintOut.textContent = "You scored a " + finalScore + "% on the quiz and you had " + timer + " second(s) left. Enter your initials below and click \"Submit Score\" to return to the home screen.";
    count++;
    advanceQuizBtn.textContent = "Submit Score"
    selectionResult.textContent = "";
    quizGroup.setAttribute("class", "hide");
    resultsGroup.setAttribute("class", "results");
    advanceQuizBtn.setAttribute("data-status", "answered")
    timerBox.setAttribute("class", "hide")
    return;
};

// Function to return user to homescreen.//
function enterScore() {
    if (initialsTxt.value === "") {
        alert("Please enter your initials in the text box then click \"Submit Score\" to return to the home screen. You can view your high scores from the home screen.")
    } else {
        stageHOF();
        // Reset default values//
        count = 0;
        score = 0;
        timer = timerValue;
        initialsTxt.value = "";
        selectionResult.textContent = "";
        advanceQuizBtn.textContent = "Begin Quiz";
        timeLeft.textContent = timer;
        resultsGroup.setAttribute("class", "hide");
        welcomeMessage.setAttribute("class", "welcomeMessage");
        highScoresBtn.setAttribute("class", "button");
        return;
    };
};

// Check the data-answer value for correct or incorrect and display result to user. Should only work once per question.//
buttonChoices.forEach(function (buttonChoice) {
    buttonChoice.addEventListener("click", function (event) {
        if (advanceQuizBtn.getAttribute("data-status") === "unanswered") {
            var element = event.target;
            if (element.getAttribute("data-answer") === "correctAnswer") {
                selectionResult.textContent = "CORRECT! Click \"Next Question\" button to advance.";
                advanceQuizBtn.setAttribute("data-status", "answered");
                score++;
            } else {
                selectionResult.textContent = "WRONG! Click \"Next Question\" button to advance.";
                timerPenalty();
                advanceQuizBtn.setAttribute("data-status", "answered");
            }
        }
    })
});

// Toggle from high score page to home screen.//
highScoresBtn.addEventListener("click", function () {
    if (highScoresList.getAttribute("data-visibility") === "hide") {
        highScoresBtn.textContent = "Return Home";
        clearBtn.setAttribute("class", "button");
        highScoresList.setAttribute("data-visibility", "show");
        highScoresList.setAttribute("class", "highScoresList");
        welcomeMessage.setAttribute("class", "hide");
        advanceQuizBtn.setAttribute("class", "hide");
    } else {
        highScoresBtn.textContent = "View High Scores";
        clearBtn.setAttribute("class", "hide");
        highScoresList.setAttribute("data-visibility", "hide");
        highScoresList.setAttribute("class", "hide");
        welcomeMessage.setAttribute("class", "welcomeMessage");
        advanceQuizBtn.setAttribute("class", "button");
    }
})

// Clear button to clear high scores.//
clearBtn.addEventListener("click", function () {
    var wipe = window.confirm("Are you sure you want to clear the high scores?");
    if (wipe) {
        localStorage.clear();
        hof.initialsObj.splice(0, hof.initialsObj.length);
        hof.scoreObj.splice(0, hof.scoreObj.length);
        hof.timeObj.splice(0, hof.timeObj.length);
        userInitials.innerHTML = "";
        userScore.innerHTML = "";
        userTime.innerHTML = "";
    }
});

// Function to save/load local data to high scroe screen.//
function stageHOF() {
    var initialsList = document.querySelector("#inputText").value;
    var scoreList = finalScore;
    var timeList = timer;

    if (initialsList === "") {
        return;
    }
    // Send new score results to object hof//
    hof.initialsObj.push(initialsList);
    hof.scoreObj.push(scoreList);
    hof.timeObj.push(timeList);
    // Save results and render on page//
    save();
    load();
};

// Function to save to local storage//
function save() {
    localStorage.setItem("hof", JSON.stringify(hof));
}

// Function to load local storage save data. Create new li for each saved item in object.//
function load() {
    userInitials.innerHTML = "";
    for (var i = 0; i < hof.initialsObj.length; i++) {
        var initialsOut = hof.initialsObj[i];
        var li = document.createElement("li");
        li.textContent = initialsOut;
        userInitials.appendChild(li);
    }

    userScore.innerHTML = "";
    for (var i = 0; i < hof.scoreObj.length; i++) {
        var scoreOut = hof.scoreObj[i];
        var li = document.createElement("li");
        li.textContent = scoreOut;
        userScore.appendChild(li);
    }

    userTime.innerHTML = "";
    for (var i = 0; i < hof.timeObj.length; i++) {
        var timeOut = hof.timeObj[i];
        var li = document.createElement("li");
        li.textContent = timeOut;
        userTime.appendChild(li);
    }
}

function init() {
    var oldHOF = JSON.parse(localStorage.getItem("hof"));
    if (oldHOF !== null) {
        hof = oldHOF;
    }
    load();
}
init();

// Timer countdown function//
function countdown() {
    var timeInterval = setInterval(function () {
        timer;
        timeLeft.textContent = timer;
        if (selectionResult) {

        }
        if (timer === 0) {
            clearInterval(timeInterval);
            count = quizLength;
            calcScore();
        }

        if (count > quizLength) {
            clearInterval(timeInterval);
        }
    }, 1000);
};

function timerPenalty() {
    var currentTime = timeLeft.textContent
    var penalty = Math.max(currentTime - 15, 0);
    timer = penalty;
};

// Production question object//
// var questionList = {
//     questionNumber: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"],
//     question: ["Which of the following is not a proper variable in JavaScript?", "A for loop commonly contains all of the following except:", "What is the starting index point of an array?", "The __________ method will remove the white space from either side of a string.", "The __________ method will add an element to the end of an array.", "Which method would best be used to combine the values of two arrays into one array?", "Console.log(document.body) will return:", "The setAttribute method is used to:", "Which event listener listens for a key being pressed?", "The textContent property is used to:"],
//     correctAnswer: ["var this;", "i=variableName.length", "0", "trim", "push", "concat", "Everything in the body element of the HTML", "Set the attribute value on an HTML element", "Keydown", "Set the text for an element"],
//     incorrectAnswer1: ["var that;", "var i = 0", "1", "sort", "sort", "replace", "The user defined name on the tab in the browser", "Set the value of the inner HTML content", "Keyup", "Rewrite the element types"],
//     incorrectAnswer2: ["var wrong;", "i<variableName.length", "-1", "push", "trim", "split", "All query selectors for buttons created in HTML", "Change the HTML structure", "Click", "Make the CSS available to the user"],
//     incorrectAnswer3: ["var those;", "i++", "It is defined by the user", "split", "split", "unshift", "All saved local storage values", "Reduce the number of JS variables ", "Change", "Make sites more accessible for screen readers"]
// };

//Test question object//
// var questionList = {
//     questionNumber: ["Question 1", "Question 2", "Question 3"],
//     question: ["What is your favorite number", "What is your favorite color?", "What is your favorite state of matter?"],
//     correctAnswer: ["*0*", "*Blue*", "*Gas*"],
//     incorrectAnswer1: ["1", "Red", "Solid"],
//     incorrectAnswer2: ["2", "Pink", "Liquid"],
//     incorrectAnswer3: ["3", "Yellow", "Plasma"]
// };