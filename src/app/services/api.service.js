import axios from "axios";

// For exporting methods at the same time
class ApiService {
  constructor() {
    this.API_URL = "http://localhost:3000";
  }
  /* REGISTER POST */
  RegisterPost(fName, lName, email, pass) {
    axios.post(`${this.API_URL}/auth/register`, {
      data: {
        firstName: fName,
        lastName: lName,
        email: email,
        password: pass
      }
    });
  }

  /* LOGIN POST */
  LoginPost(loginEmail, loginPass) {
    axios.post(`${this.API_URL}/auth/login`, {
      data: {
        email: loginEmail,
        password: loginPass
      }
    });
  }
}

const apiService = new ApiService();
export default apiService;
