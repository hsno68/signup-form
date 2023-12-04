const form = document.querySelector(".form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", validatePasswordMatch);

function validatePasswordMatch(e) {
  if (password.value != confirmPassword.value) {
    e.preventDefault();
  }
}