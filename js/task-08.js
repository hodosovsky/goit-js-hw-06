const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Всі поля повинні бути заповнені.");
    return;
  }

  const data = {
    [event.currentTarget.elements.email.name]:
      event.currentTarget.elements.email.value,
    [event.currentTarget.elements.password.name]:
      event.currentTarget.elements.password.value,
  };
  console.log(data);

  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  //   formData.forEach((value, name) => {
  //     console.log("value: ", value);
  //     console.log("name: ", name);
  //   });

  event.target.reset();
}
