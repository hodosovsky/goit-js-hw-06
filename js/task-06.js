const input = document.querySelector("#validation-input");

input.addEventListener("blur", lostFocus);

function lostFocus(event) {
  if (event.currentTarget.value.length >= event.currentTarget.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
