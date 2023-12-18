const form = document.querySelector(".form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const inputs = document.querySelectorAll("input");
const passwordVisibilityIcons = document.querySelectorAll(".visibility");

const numberValidation = document.querySelector(".pass-number-validation");
const lowercaseValidation = document.querySelector(".pass-lowercase-validation");
const uppercaseValidation = document.querySelector(".pass-uppercase-validation");
const specialValidation = document.querySelector(".pass-special-validation");
const minimumValidation = document.querySelector(".pass-minimum-validation");

form.addEventListener("submit", isFormSubmittable);
password.addEventListener("input", checkPasswordValidation);
inputs.forEach(input => {
  input.addEventListener("blur", confirmUserInteraction);
});
passwordVisibilityIcons.forEach(passwordVisibilityIcon => {
  passwordVisibilityIcon.addEventListener("click", toggleVisibility);
});

function isFormSubmittable(e) {
  if (password.value != confirmPassword.value) {
    e.preventDefault();
    alert("Passwords do not match.");
  }
  else {
    alert("Form submitted!");
  }
}

function checkPasswordValidation() {
  if (/\d/g.test(password.value)) {
    numberValidation.classList.add("valid");
  }
  else {
    numberValidation.classList.remove("valid");
  }

  if (/[a-z]/g.test(password.value)) {
    lowercaseValidation.classList.add("valid");
  }
  else {
    lowercaseValidation.classList.remove("valid");
  }

  if (/[A-Z]/g.test(password.value)) {
    uppercaseValidation.classList.add("valid");
  }
  else {
    uppercaseValidation.classList.remove("valid");
  }

  if (/[*.!@#$%^&?]/g.test(password.value)) {
    specialValidation.classList.add("valid");
  }
  else {
    specialValidation.classList.remove("valid");
  }
  
  if (password.value.length >= 8) {
    minimumValidation.classList.add("valid");
  }
  else {
    minimumValidation.classList.remove("valid");
  }
}

function confirmUserInteraction(input) {
  let inputElement = input.target;
  if (inputElement.value) {
    inputElement.classList.add("interacted");
  }
  else {
    inputElement.classList.remove("interacted");
  }
}

function toggleVisibility(e) {
  let iconElement = e.target;
  switch (true) {
    case iconElement.classList.contains("password"):
      if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        iconElement.classList.toggle("invisible");
        iconElement.classList.toggle("visible");
      }
      else {
        password.setAttribute("type", "password");
        iconElement.classList.toggle("visible");
        iconElement.classList.toggle("invisible");
      }
      break;
    case iconElement.classList.contains("confirm-password"):
      if (confirmPassword.getAttribute("type") === "password") {
        confirmPassword.setAttribute("type", "text");
        iconElement.classList.toggle("invisible");
        iconElement.classList.toggle("visible");
      }
      else {
        confirmPassword.setAttribute("type", "password");
        iconElement.classList.toggle("visible");
        iconElement.classList.toggle("invisible");
      }
      break;
  }
}