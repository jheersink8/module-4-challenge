var count = 0;
var advanceQuiz = document.getElementById("advanceQuiz");
var selectionResult = document.getElementById("selectionResult");
var questionNumberOutput = document.querySelector(".questionNumberOutput");
var questionOutput = document.querySelector(".questionOutput");
var buttonChoices = document.querySelectorAll(".buttonChoice");
var questionList = {
    questionNumber: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"],
    question: ["Which of the following is not a proper variable in JavaScript?", "A for loop commonly contains all of the following except:", "What is the starting index point of an array?", "The __________ method will remove the white space from either side of a string.", "The __________ method will add an element to the end of an array.", "Which method would best be used to combine the values of two arrays into one array?", "Console.log(document.body) will return:", "The setAttribute method is used to:", "Which event listener listens for a key being pressed?", "The textContent property is used to:"],
    correctAnswer: ["var this;", "i=variableName.length", "0", "trim", "push", "concat", "Everything in the body element of the HTML", "Set the attribute value on an HTML element", "Keydown", "Set the text for an element"],
    incorrectAnswer1: ["var that;", "var i = 0", "1", "sort", "sort", "replace", "The user defined name on the tab in the browser", "Set the value of the inner HTML content", "Keyup", "Rewrite the element types"],
    incorrectAnswer2: ["var wrong;", "i<variableName.length", "-1", "push", "trim", "split", "All query selectors for buttons created in HTML", "Change the HTML structure", "Click", "Make the CSS available to the user"],
    incorrectAnswer3: ["var those;", "i++", "It is defined by the user", "split", "split", "unshift", "All saved local storage values", "Reduce the number of JS variables ", "Change", "Make sites more accessible for screen readers"]
};

function presentQuestion(x) {
    // Present the question number and question//
    questionNumberOutput.textContent = questionList.questionNumber[x];
    questionOutput.textContent = questionList.question[x];

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

// Button to begin quiz and then advance questions. Will only work once per question.//
advanceQuiz.addEventListener("click", advance);
function advance() {
    if (advanceQuiz.getAttribute("data-status") === "answered") {
        presentQuestion(count++);
        advanceQuiz.setAttribute("data-status", "unanswered");
        selectionResult.textContent = "";
    }
};

// Check the data-answer value for correct or incorrect and display result to user. Will only work once per question.//
buttonChoices.forEach(function (buttonChoice) {
    buttonChoice.addEventListener("click", function (event) {
        if (advanceQuiz.getAttribute("data-status") === "unanswered") {
            var element = event.target;
            if (element.getAttribute("data-answer") === "correctAnswer") {
                selectionResult.textContent = "CORRECT! Click Next Question button to advance.";
                advanceQuiz.setAttribute("data-status", "answered");
            } else {
                selectionResult.textContent = "WRONG! Click Next Question button to advance.";
                advanceQuiz.setAttribute("data-status", "answered");
            }
        }
    })
});