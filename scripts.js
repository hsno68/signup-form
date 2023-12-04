const form = document.querySelector(".form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", isFormSubmittable);

function isFormSubmittable(e) {
  if (password.value != confirmPassword.value) {
    e.preventDefault();
  }
}