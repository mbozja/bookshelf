import "./styles.scss";
import apiService from "./app/services/api.service";

/* ----------------------------------------- */
/*  LOGIN POPUP */
/* ----------------------------------------- */
// FOR OPENING AND CLOSING LOGIN FORM
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
  // Get loginFormWarning element
  const warningDomElement = document.getElementById("loginFormWarning");
  // Set empty text in loginFormWarning element
  warningDomElement = "";

  // Get login form
  let loginFormElements = document.getElementById("formLogin").elements;
  console.log("loginFormElements:", loginFormElements);
  // Get email and password
  let loginEmail = loginFormElements.namedItem("loginEmail").value;
  console.log("loginEmail:", loginEmail);
  let loginPass = loginFormElements.namedItem("loginPassword").value;
  console.log("loginPass:", loginPass);

  // Check that email and password are not empty.
  if (loginPass == "" || loginEmail == "") {
    // Show warning.
    warningDomElement.innerHTML = "Please enter your login data.";
    return;
  }

  apiService
    .LoginPost(loginEmail, loginPass)
    .then(response => {
      // TODO store access-token into local storage
      console.log("LoginPost response: ", response);
    })
    .catch(error => {
      // We got error when trying to make login. So we have to show warning.
      // Show warning in login form "Please check your login data."
      console.log("LoginPost got error: ", error);
      warningDomElement.innerHTML = "Please check your login data.";
      return;
    });
};
// To login
document
  .getElementById("button-make-login")
  .addEventListener("click", makeLogin);

/* ----------------------------------------- */
/* REGISTER POPUP */
/* ----------------------------------------- */
// FOR OPENING AND CLOSING REGISTER FORM
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
function makeRegister() {
  // Get register form
  const registerFormElements = document.getElementById("registerForm").elements;
  console.log("registerFormElements: ", registerFormElements);
  // Get all the data
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

  if (passwordOk) {
    // Call api end point, on ApiService, to make registration.
    apiService
      .RegisterPost(fName, lName, email, pass)
      .then(response => {
        console.log("RegisterPost response", response);
      })
      .catch(error => {
        console.log("RegisterPost got error", error);
      });
  }
}
// To register
document
  .getElementById("button-make-register")
  .addEventListener("click", makeRegister);

/* ----------------------------------------- */
/* CHECK PASSWORD */
/* ----------------------------------------- */
// Check if register passwors are equal
function checkPassword(password1, password2) {
  // Get dom element for showing register form warning.
  const warningDomElement = document.getElementById("registerFormWarning");
  console.log("warningDomElement: ", warningDomElement);
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
    // If passwords are not same, we show this
    warningDomElement.innerHTML = "Password did not match: Please try again...";
    return false;
  }
  return true;
}
