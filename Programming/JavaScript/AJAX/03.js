const divs = document.querySelectorAll("div");
const inValue = document.querySelector(".val");
const hTag = document.querySelector("h1");
const span = document.querySelector("span");
let counter = 0;

hTag.style.fontSize = "3em";

const btn = document.createElement("button");
btn.textContent = "Click Me";
btn.addEventListener("click", (e) => {
  const newDiv = document.createElement("div");
  document.body.append(newDiv);
  counter++;

  newDiv.textContent = `${inValue.value} ${counter}`;
  newDiv.addEventListener("click", myClick);
});

const val1 = span.append(btn);
const val2 = span.appendChild(btn);

console.log(val1); // append는 return 값을 반환하지 않는다. append는 여러 개의 노드와 문자를 추가할 수 있다.
console.log(val2); // appendChild는 return 값을 반환하지만, 한 번에 오직 하나의 노드만 추가할 수 있다.

inValue.addEventListener("click", (e) => {
  if (inValue.getAttribute("type") == "text") {
    inValue.setAttribute("type", "number");
  } else {
    inValue.setAttribute("type", "text");
  }
});

divs.forEach((div, index) => {
  console.log(div);
  inValue.value = index;
  div.textContent = `<h2>Hello World</h2> ${inValue.value + 1}`;
  div.innerHTML = `<h2>Hello World</h2> ${inValue.value + 1}`;

  div.addEventListener("click", myClick);
});

function myClick(e) {
  console.log(e.target);
  e.target.classList.toggle("box");
}

hTag.addEventListener("click", (e) => {
  console.log(e.target);
  hTag.style.color = "white";

  if (hTag.textContent == "JavaScript") {
    hTag.textContent = "test";
    hTag.style.backgroundColor = "blue";
  } else {
    hTag.textContent = "JavaScript";
    hTag.style.backgroundColor = "red";
  }
});
