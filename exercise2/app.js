const computerchoice = document.getElementById("computer-choice");
const userchoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

const possiblechoices = document.querySelectorAll("button");
let userchoice;
possiblechoices.forEach((possiblechoices) =>
  possiblechoices.addEventListner("click", (e) => {
    userchoice = e.target.id;
    userchoiceDisplay.innerHTML = userchoice;
  })
);
