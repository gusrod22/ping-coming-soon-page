const input = document.querySelector("input");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const error = document.querySelector(".error");
  if (!input.value) {
    error.style.display = "block";
    input.style.borderColor = "hsl(354, 100%, 66%)";
  } else if (input.id === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(input.value);
    if (!isEmailValid) {
      error.style.display = "block";
      input.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
      error.style.display = "none";
      input.style.borderColor = "hsl(223, 100%, 88%)";
    }
  } else {
    error.style.display = "none";
  }
});
