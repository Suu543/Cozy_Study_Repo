const url = "quiz.json";
const questions = [];
const output = document.querySelector(".output");
const btn = document.querySelector(".btn");

let cur = 0;

const player = {
  score: 0,
  answers: [],
};

const holder = [];
const totalOutput = document.querySelector("h1");

btn.addEventListener("click", (e) => {
  if (cur >= questions.length) {
    let html = `<hr><h1>Score = ${player.score}</h1>`;
    player.answers.forEach((el) => {
      let bg = el.correct ? "green" : "red";
      html += `<div style="background:${bg}">Question: ${capitalizeText(
        el.question
      )}? <br />`;
      html += `Response : ${el.response} (${el.correctAnswer}) <br />`;
      html += `Result : ${el.correct} </div> </br>`;
    });
    output.innerHTML = html;
  } else {
    newQuestion();
  }

  btn.style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
});

function capitalizeText(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function loadQuestions() {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      data.forEach((el) => {
        let temp = [];
        el.incorrect.forEach((ans) => {
          let tempObj = {
            response: ans,
            correct: false,
          };
          temp.push(tempObj);
        });

        let tempObj = {
          response: el.correct,
          correct: true,
        };

        temp.push(tempObj);

        let mainTemp = {
          question: el.question,
          options: temp,
          correct: el.correct,
        };

        questions.push(mainTemp);
      });
      console.log(questions);
    });
}
