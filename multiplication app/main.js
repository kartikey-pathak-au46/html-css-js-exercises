const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("ques");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `what is ${num1} multiply by ${num2}`;

let correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns == correctAns) {
    score++;
    upDateLocalStorage();
  } else {
    score--;
    upDateLocalStorage();
  }
});
function upDateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
