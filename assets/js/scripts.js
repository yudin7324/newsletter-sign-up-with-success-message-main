const form = document.getElementById('form');
const block = document.getElementById('sign-in');
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".sign-up-form__input");
const successMessage = document.getElementById('message');
const successBtn = document.querySelector('.message__btn');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateEmail(emailInput.value)) {
    errorMessage.classList.add('error');
  } else {
    emailInput.value = "";
    errorMessage.classList.remove('error');
    successMessage.classList.add('active');
    block.classList.add('hidden');
  }
});

successBtn.addEventListener('click', handleCloseMessageWindow);

function handleCloseMessageWindow() {
  successMessage.classList.remove('active');
  block.classList.remove('hidden');
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
