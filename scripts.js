const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const numberValidation = document.querySelector(".pass-number-validation");
const lowercaseValidation = document.querySelector(".pass-lowercase-validation");
const uppercaseValidation = document.querySelector(".pass-uppercase-validation");
const specialValidation = document.querySelector(".pass-special-validation");
const minimumValidation = document.querySelector(".pass-minimum-validation");

inputs.forEach(input => {
  input.addEventListener("blur", () => { 
    if (input.value) {
      input.classList.add("interacted");
    }
    else {
      input.classList.remove("interacted");
    }
  });
});

password.addEventListener("input", checkPasswordValidation);
form.addEventListener("submit", isFormSubmittable);

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

  if (/[*.!@$%^&?]/g.test(password.value)) {
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

function isFormSubmittable(e) {
  if (password.value != confirmPassword.value) {
    e.preventDefault();
    alert("Passwords do not match.");
  }
}