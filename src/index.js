import "./styles.scss";

import Library from "./app/views/library/library";
import axios from "axios";

Library.init();

/* ----------------------------------------- */
// LOGIN POPUP
/* ----------------------------------------- */
/* FOR OPENING AND CLOSING LOGIN FORM */
document
  .getElementById("button-open-login-popup")
  .addEventListener("click", openLoginForm);
function openLoginForm() {
  document.getElementById("popup-login").style.display = "block";
}

document
  .getElementById("button-close-login-popup")
  .addEventListener("click", closeLoginForm);
function closeLoginForm() {
  document.getElementById("popup-login").style.display = "none";
}

/* GET DATA FROM LOGIN FORM */
const makeLogin = () => {
  // Get login form
  let loginFormElements = document.getElementById("formLogin").elements;
  console.log("loginFormElements:", loginFormElements);
  // Get email and password
  let loginEmail = loginFormElements.namedItem("loginEmail").value;
  console.log("loginEmail:", loginEmail);
  let loginPass = loginFormElements.namedItem("loginPassword").value;
  console.log("loginPass:", loginPass);
};
// To login
document
  .getElementById("button-make-login")
  .addEventListener("click", makeLogin);

/* ----------------------------------------- */
// REGISTER POPUP
/* ----------------------------------------- */
/* FOR OPENING AND CLOSING REGISTER FORM */
document
  .getElementById("button-open-register-popup")
  .addEventListener("click", openRegisterForm);
function openRegisterForm() {
  document.getElementById("popup-register").style.display = "block";
}

document
  .getElementById("button-close-register-popup")
  .addEventListener("click", closeRegisterForm);
function closeRegisterForm() {
  document.getElementById("popup-register").style.display = "none";
}

/* GET DATA FROM REGISTER FORM */
const makeRegister = () => {
  // Get register form
  const registerFormElements = document.getElementById("registerForm").elements;
  console.log("registerFormElements: ", registerFormElements);
  // Get all the data
  // first name, last name, email, password, retype password
  const fName = registerFormElements.namedItem("firstName").value;
  console.log("first name: ", fName);
  const lName = registerFormElements.namedItem("lastName").value;
  console.log("last name: ", lName);
  const email = registerFormElements.namedItem("registerEmail").value;
  console.log("email: ", email);
  const pass = registerFormElements.namedItem("registerPassword").value;
  console.log("register password: ", pass);
  const rePass = registerFormElements.namedItem("retypeRegisterPassword").value;
  console.log("retype password: ", rePass);
  const passwordOk = checkPassword(pass, rePass);
  console.log("passwordOk: ", passwordOk);
};
// To register
document
  .getElementById("button-make-register")
  .addEventListener("click", makeRegister);

/* ----------------------------------------- */
/* CHECK PASSWORD */
/* ----------------------------------------- */
function checkPassword(password1, password2) {
  // Get dom element for showing register form warning.
  const warningDomElement = document.getElementById("registerFormWarning");
  console.log("warningDomElement: ", warningDomElement);
  // TO NE SME BIT KLE warningDomElement.innerHTML = "Password did not match: Please try again...";
  // If password not entered
  if (password1 == "") {
    warningDomElement.innerHTML = "Please enter Password";
    return false;
  }
  // If confirm password not entered
  else if (password2 == "") {
    warningDomElement.innerHTML = "Please enter confirm password";
    return false;
  }
  // If Not same return False.
  else if (password1 != password2) {
    warningDomElement.innerHTML = "Password did not match: Please try again...";
    return false;
  }
  return true;
}

let myVar = "Test text";
let myVar_2 = "Test text 2";
console.log(myVar);
