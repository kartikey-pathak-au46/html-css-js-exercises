//   jai shri ram

// li tag ka pehla text hange kia

const list = document.querySelectorAll("li");

// list[0].textContent = "rohit bhai charkhi wale";
// list[1].textContent = "rohit bhai charkhi wale";

//  ek p tag insert kia jo body mai sbse niche insert hua

const bodybuilder = document.querySelector("body");

const para = document.createElement("p");

para.textContent = "we are learning DOM in js";

bodybuilder.appendChild(para);

para.style.color = "white";
para.style.backgroundColor = "red";
para.style.width = "100%";
para.style.textAlign = "center";

let unOrder = document.querySelector("ul");
let newText = document.createElement("li");
newText.innerHTML = "<b>hello</b>";
unOrder.insertBefore(newText, unOrder.firstElementChild);
newText.style.listStyleType = "none";

let unlist = document.querySelectorAll("ul");
console.log(unlist);

// list[2].remove();
