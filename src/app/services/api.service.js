export const getBooks = () => {
  return "should get books";
};

/* ---------------------------------------------------- */
/* SEND DATA TO API ENDPOINT TO GET ACCESS TOKEN */
/* ---------------------------------------------------- */
axios.post("http://localhost:3000/auth/register", {
  data: {
    firstName: fName,
    lastName: lName,
    email: email,
    password: pass,
    retypePassword: rePass
  }
});
