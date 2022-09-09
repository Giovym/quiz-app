"use strict";

const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("score-container");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btnSubmit = document.getElementById("submit");
const btnReload = document.getElementById("reload");
const scoreText = document.getElementById("score-text");

const quizData = [
  {
    question: "What is the most used programming language in 2022?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "Php",
    correct: "c",
  },
  {
    question: "Which US company has the biggest capitalization in 2022?",
    a: "Microsoft",
    b: "Apple",
    c: "Google",
    d: "Meta",
    correct: "b",
  },
  {
    question: "Which countries have the most UNESCO World Heritage sites?",
    a: "Italy",
    b: "Spain",
    c: "China",
    d: "France",
    correct: "a",
  },
  {
    question: "Who has won most world cup in football?",
    a: "Argentina",
    b: "Germany",
    c: "Italy",
    d: "Brazil",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Barack Obama",
    b: "Joe Biden",
    c: "Donald Trump",
    d: "George W. Bush",
    correct: "b",
  },
  {
    question: "Which country has one of the Seven Wonders of the World?",
    a: "United States of America",
    b: "France",
    c: "India",
    d: "Australia",
    correct: "c",
  },
];

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
};

const finishQuiz = function () {
  quizContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  scoreText.innerHTML = `You answered correctly at ${score}/${quizData.length} questions!`;
  btnReload.addEventListener("click", () => {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
  });
};

loadQuiz();

btnSubmit.addEventListener("click", () => {
  const inputValues = document.querySelectorAll("input");
  inputValues.forEach((input) => {
    if (!input.checked) {
      return;
    } else {
      console.log(input.id, quizData[currentQuiz].correct);
      if (input.id === quizData[currentQuiz].correct) {
        score++;
      }
      input.checked = false;
      currentQuiz++;
      console.log(currentQuiz, score);
      currentQuiz < quizData.length ? loadQuiz() : finishQuiz();
    }
  });
});
