import "./styles.scss";

import Library from "./app/views/library/library";

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
  console.log("test 111111");
}

document
  .getElementById("button-close-register-popup")
  .addEventListener("click", closeRegisterForm);
function closeRegisterForm() {
  document.getElementById("popup-register").style.display = "none";
  console.log("test 3333333");
}

let myVar = "Test text";
let myVar_2 = "Test text 2";
console.log(myVar);
console.log(document.getElementById("popup-login").firstElementChild);
