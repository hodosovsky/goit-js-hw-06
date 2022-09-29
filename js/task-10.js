function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("button[data-create");
const buttonDestroy = document.querySelector("button[data-destroy");
const boxes = document.querySelector("#boxes");

const box = [];
buttonCreate.addEventListener("click", makeBox);
function makeBox() {
  const input = document.querySelector("#controls input");

  for (let i = 1; i <= input.value; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${30 * i}px`;
    boxEl.style.height = `${30 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    box.push(boxEl);
  }

  boxes.append(...box);
  input.value = "";
}

buttonDestroy.addEventListener("click", deleteBox);
function deleteBox() {
  const boxesDelete = document.querySelector("#boxes div");

  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  box.splice(0, box.length);
}
