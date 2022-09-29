const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// Додав, щоб відразу змінився розмір тексту, а не повзунок посередині, а текст маленький
text.style.fontSize = `${input.value}px`;

input.addEventListener("input", changeTextSize);

function changeTextSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
