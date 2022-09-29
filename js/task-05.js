const input = document.querySelector("#name-input");

// input.addEventListener("submit", copyValue);

input.addEventListener("input", enterInputValue);

function enterInputValue(event) {
  const spanOutput = document.querySelector("#name-output");
  if (!event.currentTarget.value) {
    spanOutput.textContent = "Anonymous";
  } else {
    spanOutput.textContent = event.currentTarget.value;
  }
}

// function copyValue(event) {
//   console.dir(event.currentTarget.elements.subscription.value);
// }
