# Java Script Quiz (module-4-challenge)

## Description:

Deployed website: https://jheersink8.github.io/module-4-challenge/

This page features a quiz for users to answer questions about JavaScript. Although the intent is to focus on quizzing users on JavaScript, one of my main motivators was to build a highly dynamic page that allowed future quiz makers to make easy changes. For example, there is one object at the top of the JS code that stores all the questions and answers. If a user adds or removes questions to that array, the application will automatically adjust accordingly to account for those changes. In other words, the quiz maker won’t need to make any edits to the code beyond the object (which is very first in the code) and the end user experience will still make logical sense. While a quiz is a fairly easy thing to code, the dynamic nature of this one should appeal to future users. 

In this project, some of the things I learned include (but are not limited to): 
- How to implement timed logic in a webpage
- How to save locally stored data and load it later
- Randomize the order of buttons with JS
- Have event listeners for 4 buttons where one is the correct button to click
- Creating elements that originate in JS 
- Examining information from the DOM to debug
- Exercising patience to read through 200+ lines of code to find a misspelled word 

## Usage:

As implied earlier, at its core, this webpage is a JavaScript quiz. However, its biggest core competency (or at least the thing I’m proudest of) is its dynamic behavior and future proof nature. 

Other features include: 
- A timer that includes a penalty that subtracts 15 seconds for each question answered wrong
- A randomized button layout so users can’t memorize the answer positions in multiple test events
- A scoreboard that shows the most recent test results with the option to clear it out at any time
- A dynamic homepage that will tell the user what to expect based on the length of the quiz

Below are some screenshots of the webpage:

![The end user view when the page loads](/assets/images/quiz_home.png)

![An example of the view of the questions](/assets/images/quiz_question.png)

![The final page that shows the user how they did on the quiz](/assets/images/quiz_report.png)

![An example of scores on the scoreboard](/assets/images/quiz_score.png)

## Credits: 

The original scenario was presented by Denver University in the Bootcamp course ID DU-VIRT-FSF-PT-12-2023-U-LOLC-MWTH under Module 4 Challenge. All code was written by Jordan R. Heersink. 

##License: 
MIT License Copyright (c) 2024 Jordan Heersink Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
