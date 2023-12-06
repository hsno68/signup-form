const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

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

form.addEventListener("submit", isFormSubmittable);

function isFormSubmittable(e) {
  if (password.value != confirmPassword.value) {
    e.preventDefault();
  }
}