function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener("click", changeBackground);

function changeBackground() {
  const body = document.querySelector("body");
  const spanEl = document.querySelector(".color");
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;
}
