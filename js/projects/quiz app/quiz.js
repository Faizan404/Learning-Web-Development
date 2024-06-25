const quizData = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "The <body> section",
    c: "Both the <head> and the <body> section are correct",
    d: "none of the above",
    correct: "c",
  },

  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let questionIndex = 0;
const stepsDetail = document.querySelector(".quiz-details");

function loadData() {
  const question = document.getElementById("question");
  const optionA = document.getElementById("a_text");
  const optionB = document.getElementById("b_text");
  const optionC = document.getElementById("c_text");
  const optionD = document.getElementById("d_text");

  question.textContent = quizData[questionIndex].question;
  optionA.textContent = quizData[questionIndex].a;
  optionB.textContent = quizData[questionIndex].b;
  optionC.textContent = quizData[questionIndex].c;
  optionD.textContent = quizData[questionIndex].d;

  optionA.setAttribute("value", quizData[questionIndex].a);
  optionB.setAttribute("value", quizData[questionIndex].b);
  optionC.setAttribute("value", quizData[questionIndex].c);
  optionD.setAttribute("value", quizData[questionIndex].d);

  stepsDetail.textContent = `${questionIndex + 1} / ${quizData.length}`;
}

function submit() {
  const submitBtn = document.getElementById("btn");
  submitBtn.addEventListener("click", function () {
    if (questionIndex < quizData.length - 1) {
      questionIndex++;
      loadData();
      stepsDetail.textContent = `${questionIndex + 1} / ${quizData.length}`;
    } else displayQuizDetails();
  });
}

let points = 0;
const quizOptionsContainer = document.querySelector(".quiz-options");
function optionsHandler() {
  quizOptionsContainer.addEventListener("click", function (e) {
    const options = e.target.closest(".q-opt");
    if (!options) return;
    const optionValue = options.getAttribute("value");

    const correctOption = quizData[questionIndex]["correct"];
    console.log(
      optionValue,
      quizData[questionIndex][correctOption],
      optionValue === quizData[questionIndex][correctOption]
    );
    if (
      (optionValue === quizData[questionIndex][correctOption],
      optionValue === quizData[questionIndex][correctOption])
    )
      points++;
    else return;
    console.log(points);
  });
}

const quizBody = document.querySelector(".quiz-sub-container");
const quizBodyScore = document.querySelector(".quiz-score");

function displayQuizDetails() {
  quizBody.classList.add("hidden");
  quizBodyScore.classList.remove("hidden");
  const score = document.querySelector(".score");
  score.textContent = `You answered ${points}/${quizData.length} question correctly`;
}

function reset() {
  document.querySelector(".reset").addEventListener("click", function () {
    questionIndex = 0;
    points = 0;
    quizBody.classList.remove("hidden");
    quizBodyScore.classList.add("hidden");
    loadData();
  });
}

(function init() {
  loadData();
  submit();
  optionsHandler();
  reset();
})();
