const form = document.querySelector(".contact-form");

const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

const submitButton = document.querySelector(".submit-btn");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 5) === true) {
    nameError.style.display = "none";
    fullName.style.borderColor = "#caeec2";
    fullName.style.backgroundColor = "#e5f5df";
  } else {
    nameError.style.display = "block";
    fullName.style.border = "1px solid red";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.borderColor = "#caeec2";
    email.style.backgroundColor = "#e5f5df";
  } else {
    emailError.style.display = "block";
    email.style.border = "1px solid red";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
    subject.style.borderColor = "#caeec2";
    subject.style.backgroundColor = "#e5f5df";
  } else {
    subjectError.style.display = "block";
    subject.style.border = "1px solid red";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
    message.style.borderColor = "#caeec2";
    message.style.backgroundColor = "#e5f5df";
  } else {
    messageError.style.display = "block";
    message.style.border = "1px solid red";
  }
}

// Checking length of input
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Checking for valid email address
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

//Check if input field is valid while typing
function checkName() {
  if (checkLength(fullName.value, 5) === true) {
    nameError.style.display = "none";
    fullName.style.border = "1px solid #caeec2";
    fullName.style.backgroundColor = "#e5f5df";
  } else {
    nameError.style.display = "block";
    fullName.style.border = "1px solid red";
  }
}

function checkEmail() {
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.border = "1px solid #caeec2";
    email.style.backgroundColor = "#e5f5df";
  } else {
    emailError.style.display = "block";
    email.style.border = "1px solid red";
  }
}

function checkSubject() {
  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
    subject.style.border = "1px solid #caeec2";
    subject.style.backgroundColor = "#e5f5df";
  } else {
    subjectError.style.display = "block";
    subject.style.border = "1px solid red";
  }
}

function checkMessage() {
  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
    message.style.border = "1px solid #caeec2";
    message.style.backgroundColor = "#e5f5df";
  } else {
    messageError.style.display = "block";
    message.style.border = "1px solid red";
  }
}

fullName.addEventListener("keyup", checkName);
email.addEventListener("keyup", checkEmail);
subject.addEventListener("keyup", checkSubject);
message.addEventListener("keyup", checkMessage);

//Form submit success
function showSuccess() {
  if (
    checkLength(fullName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 15) &&
    checkLength(message.value, 25)
  ) {
    successMessage.style.display = "block";
    form.reset();
    fullName.style.border = "1px solid black";
    fullName.style.backgroundColor = "transparent";
    email.style.border = "1px solid black";
    email.style.backgroundColor = "transparent";
    subject.style.border = "1px solid black";
    subject.style.backgroundColor = "transparent";
    message.style.border = "1px solid black";
    message.style.backgroundColor = "transparent";
  } else {
    successMessage.style.display = "none";
  }
}
showSuccess();

form.addEventListener("submit", showSuccess);
