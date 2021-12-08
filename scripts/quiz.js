var submitButton = document.getElementById("submit_quiz");
var previousButton = document.getElementById("prev_button");
var nextButton = document.getElementById("next_button");
var score = 0;
var noOfQuestions = 5;
var currQuestionNumber = 1;

var answers = ["", "", "", "", ""];

//Widgets whose text will be changing
var questionText = document.getElementById("question_text");
var optionsButton = [];
var questionCircles = [];
var attempted = [false, false, false, false, false];

for (let i = 0; i < 4; i++) {
    let btn = document.getElementById("option" + (i+1));

    btn.onclick = () => {
       setAnswerForQuestion(currQuestionNumber, i);
    }
    
    optionsButton.push(btn);
}

for (let i = 0; i < noOfQuestions; i++) {
    let circle = document.getElementById("circle" + (i+1));
    circle.onclick = () => {
        currQuestionNumber = i+1;
        setCurrentQuestion(currQuestionNumber);
        setQuestionCirclesStyle();
    }
    questionCircles.push(circle);
}

setCurrentQuestion(currQuestionNumber);
setQuestionCirclesStyle();

submitButton.onclick = () => {
    calculateScore();
    location.href = "score.html";
}

previousButton.onclick = () => {
    if (currQuestionNumber > 1) {
        currQuestionNumber--;
        setCurrentQuestion(currQuestionNumber);
        setQuestionCirclesStyle();
    }
}

nextButton.onclick = () => {
    if (currQuestionNumber < 5) {
        currQuestionNumber++;
        setCurrentQuestion(currQuestionNumber);
        setQuestionCirclesStyle();
    }
}

function setCurrentQuestion(currQuestionNumber) {
    let currQuestion = questions[currQuestionNumber-1];

    questionText.innerHTML = currQuestion.text;
    optionsButton[0].innerHTML = currQuestion.option1;
    optionsButton[1].innerHTML = currQuestion.option2;
    optionsButton[2].innerHTML = currQuestion.option3;
    optionsButton[3].innerHTML = currQuestion.option4;

    setButtonStatus(currQuestionNumber);
}

function setButtonStatus (currQuestionNumber) {
    let currQuestion = questions[currQuestionNumber-1];
    let givenAnsToQuestion = answers[currQuestionNumber-1];

    for (let i = 0; i < 4; i++) {
        if (optionsButton[i].textContent.localeCompare(givenAnsToQuestion) == 0) {
            selectOption(optionsButton[i]);
        } else {
            deSelectOption(optionsButton[i]);
        }
    }
}

function selectOption(button) {
    button.style.color = "white";
    button.style.backgroundColor = "blue";
}

function deSelectOption(button) {
    button.style.color = "black";
    button.style.backgroundColor = "white";
}

function setQuestionCirclesStyle() {
    for (let i = 0; i < noOfQuestions; i++) {
        if (attempted[i]) {
            attemptedStyleOfCircle(questionCircles[i]);
        } else {
            notattemptedStyleOfCircle(questionCircles[i]);
        }
    }

    currentStyleOfCircle(questionCircles[currQuestionNumber-1]);
}

function currentStyleOfCircle(circle) {
    circle.style.color = "white";
    circle.style.backgroundColor = "black";
}

function attemptedStyleOfCircle(circle) {
    circle.style.color = "white";
    circle.style.backgroundColor = "#1ba81b";
}

function notattemptedStyleOfCircle(circle) {
    circle.style.color = "black";
    circle.style.backgroundColor = "#96e6e9";
}

function setAnswerForQuestion(currQuestionNumber, optionNumber) {
    let prevAns = answers[currQuestionNumber-1];
    let newAns = optionsButton[optionNumber].textContent;
    if (prevAns.localeCompare(newAns) == 0) {
        answers[currQuestionNumber-1] = "";
        deSelectOption(optionsButton[optionNumber]);       
        attempted[currQuestionNumber-1] = false;
        setQuestionCirclesStyle();
    } else {
        //We have changed our previous ans
        attempted[currQuestionNumber-1] = true;

        for (let i = 0; i < 4; i++) {
            if (optionsButton[i].textContent.localeCompare(prevAns) == 0) {
                deSelectOption(optionsButton[i]);
                break;
            }
        }

        answers[currQuestionNumber-1] = optionsButton[optionNumber].textContent;
        selectOption(optionsButton[optionNumber]);
        setQuestionCirclesStyle();
    }
}

function calculateScore() {
    for (let i = 0; i < 5; i++) {
        let givenAns = answers[i];
        let actualAns = questions[i].rightAnswer;

        if (givenAns.localeCompare(actualAns) == 0) {
            score++;
        }
    }

    localStorage.setItem("score", score);
    localStorage.setItem("noOfQuestions", noOfQuestions);
}