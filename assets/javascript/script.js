var questionList = {
    questionNumber: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"],
    question: ["Which of the following is not a proper variable in JavaScript?", "A for loop commonly contains all of the following except:", "What is the starting index point of an array?", "The __________ method will remove the white space from either side of a string.", "The __________ method will add an element to the end of an array.", "Which method would best be used to combine the values of two arrays into one array?", "Console.log(document.body) will return:", "The setAttribute method is used to:", "Which event listener listens for a key being pressed?", "The textContent property is used to:"],
    correctAnswer: ["var this;", "i=variableName.length", "0", "trim", "push", "concat", "Everything in the body element of the HTML", "Set the attribute value on an HTML element", "Keydown", "Set the text for an element"],
    incorrectAnswer1: ["var that;", "var i = 0", "1", "sort", "sort", "replace", "The user defined name on the tab in the browser", "Set the value of the inner HTML content", "Keyup", "Rewrite the element types"],
    incorrectAnswer2: ["var wrong;", "i<variableName.length", "-1", "push", "trim", "split", "All query selectors for buttons created in HTML", "Change the HTML structure", "Click", "Make the CSS available to the user"],
    incorrectAnswer3: ["var those;", "i++", "It is defined by the user", "split", "split", "unshift", "All saved local storage values", "Reduce the number of JS variables ", "Change", "Make sites more accessible for screen readers"]
}

var questionNumberOutput = document.querySelector(".questionNumberOutput");
var questionOutput = document.querySelector(".questionOutput");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");

presentQuestion(9)
function presentQuestion(x) {
    // Present the question number and question//
    questionNumberOutput.textContent = questionList.questionNumber[x];
    questionOutput.textContent = questionList.question[x];
    
    // Pull a random value out of each object position and assign it a constant value//
    var answerArrayMod0 = ["correctAnswer", "incorrectAnswer1", "incorrectAnswer2", "incorrectAnswer3"];
    var answerArrayMod1 = answerArrayMod0.splice((Math.floor(Math.random() * answerArrayMod0.length)), 1);
    var answerArrayMod2 = answerArrayMod0.splice((Math.floor(Math.random() * answerArrayMod0.length)), 1);
    var answerArrayMod3 = answerArrayMod0.splice((Math.floor(Math.random() * answerArrayMod0.length)), 1);

    // Assign that random value to the constant button positions. This prevents the question buttons from ever being in the same position.// 
    buttonA.textContent = questionList[answerArrayMod0.toString()][x];
    buttonB.textContent = questionList[answerArrayMod1.toString()][x];
    buttonC.textContent = questionList[answerArrayMod2.toString()][x];
    buttonD.textContent = questionList[answerArrayMod3.toString()][x];
};