const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
let counter = document.querySelector("#value");

let counterValue = 0;

decrButton.addEventListener("click", handleDecrButtonClick);

incrButton.addEventListener("click", handleIncrButtonClick);

function handleDecrButtonClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function handleIncrButtonClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}
