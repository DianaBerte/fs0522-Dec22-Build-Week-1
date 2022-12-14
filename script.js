const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// ------------------- WELCOME PAGE ------------------- //

function promiseCheck() {
  let promiseBox = document.getElementById("checkbox");
  if (promiseBox.checked) {
    let aNode = document.querySelector(".button a");
    aNode.href = "question-page.html";
  } else {
    let labelNode = document.getElementsByTagName("label")[0];
    labelNode.innerText =
      "* I promise to answer myself without help from anyone";
    labelNode.style.color = "#D20094";
    labelNode.style.textDecoration = "underline";
  }
}

// ------------------- FEEDBACK PAGE ------------------- //
let click = 0;
let feedbackInputNode = document.getElementById("feedback");
let titleContainerNode =
  document.getElementsByClassName("elements-container")[0];
let starsContainerNode = document.getElementsByClassName("rate")[0];

function generateStars() {
  starsContainerNode.innerHTML = "";
  for (let i = 10; i > 0; i--) {
    starsContainerNode.innerHTML += `<input type="radio" id="star${i}" name="rate" value="${i}" />
    <label for="star${i}" title="text"></label>`;
  }
}

function feedbackChange() {
  if (feedbackInputNode.value !== "") {
    click += 1;
    if (click === 1) {
      titleContainerNode.innerHTML =
        "<h2>About your Teacher</h2><h3>From 0 to 10, how do you rate him/her?</h3>";
      generateStars();
      document.getElementsByClassName("leave-us-feedback")[0].innerHTML = "";
      document
        .getElementsByClassName("main-container")[0]
        .removeChild(
          document.getElementsByClassName("text-input-container")[0]
        );
    } else if (click === 2) {
      titleContainerNode.innerHTML =
        "<h2>About your TA</h2><h3>From 0 to 10, how do you rate him/her?</h3>";
      generateStars();
      let buttonNode = document.getElementById("feedback-button");
      buttonNode.innerHTML = "<b>MORE INFO</b>";
      document.getElementsByClassName("leave-us-feedback")[0].innerHTML = "";
      document
        .getElementsByClassName("main-container")[0]
        .removeChild(
          document.getElementsByClassName("text-input-container")[0]
        );
    } else if (click === 3) {
      let aNode = document.getElementsByTagName("a")[0];
      aNode.href = "https://epicode.com/en/";
    }
  } else {
    feedbackInputNode.placeholder = "* Please write a comment here";
    feedbackInputNode.classList.add("change-color");
  }
}

// ------------------- QUESTION PAGE ------------------- //
//1
let userScore = 0;
let userAnswer = "";
let currentQuestionNumber = 0;

//2

const createFooter = function () {

  let footerNode = document.getElementsByClassName("footer")[0];
  footerNode.innerHTML = "";
  let newPNode = document.createElement("p");
  newPNode.innerHTML = `<p>Question ${currentQuestionNumber + 1}<span>/${
    questions.length
  }</span></p>`;
  footerNode.appendChild(newPNode);
};

const createNewQuestion = function (currentQuestionObject) {

  currentQuestionObject = questions[currentQuestionNumber];
  currentQuestion = currentQuestionObject.question;

  let questionNode = document.getElementsByClassName("question-container")[0];
  questionNode.innerHTML = "";
  let h2Node = document.createElement("h2");

  h2Node.innerText = currentQuestion;
  questionNode.appendChild(h2Node);
};

function createAnswers(arrayOfAnswers) {
  let answersContainer = document.getElementsByClassName('answers-container')[0];
  answersContainer.innerHTML = "";
  for (let i = 0; i < arrayOfAnswers.length; i++) {
    let divNode = document.createElement("div");
    divNode.type = "button";
    divNode.innerHTML = `${arrayOfAnswers[i]}`;
    answersContainer.appendChild(divNode);
  }
}

function mergeAnswers (question) {
  let allAnswers = question.incorrect_answers;
  allAnswers.push(question.correct_answer);
  if (question.type === "boolean") {
    createAnswers(allAnswers);
  } else {
    for (let i = allAnswers.length - 1; i > 0; i--) {
      var y = Math.floor(Math.random() * i);
      var temp = allAnswers[i];
      allAnswers[i] = allAnswers[y];
      allAnswers[y] = temp;
    }
    createAnswers(allAnswers);
}
}

function onClickActions() {

  let currentQuestion = questions[currentQuestionNumber];
  if (currentQuestionNumber<questions.length) {
    
    createFooter();
    createNewQuestion();
    mergeAnswers(currentQuestion);
    currentQuestionNumber++
  }
}

function buttonClick() {
  onClickActions();
}







  






//3

//window.onload = onLoadActions;
