import "./styles.scss";

import Library from "./app/views/library/library";

Library.init();

/* FOR OPENING AND CLOSING FORM */
document
  .getElementById("button-open-login-popup")
  .addEventListener("click", openForm);
function openForm() {
  document.getElementById("popup-login").style.display = "block";
}

document
  .getElementById("button-close-login-popup")
  .addEventListener("click", closeForm);
function closeForm() {
  document.getElementById("popup-login").style.display = "none";
}

/* GET DATA FROM LOGIN FORM */
const makeLogin = () => {
  // Get login form
  var loginForm = document.getElementById("popup-login").firstElementChild;

  let loginFormElements = document.getElementById("formLogin").elements;
  console.log("loginFormElements:", loginFormElements);
  let loginEmail = loginFormElements.namedItem("loginEmail").value;
  console.log("loginEmail:", loginEmail);
  // Get email and password
};
document
  .getElementById("button-make-login")
  .addEventListener("click", makeLogin);

let myVar = "Test text";
let myVar_2 = "Test text 2";
console.log(myVar);
console.log(document.getElementById("popup-login").firstElementChild);
