import axios from "axios";
const API_URL = "https://cadon-back-end.herokuapp.com/api/user`;
const EDIT_URL = `https://cadon-back-end.herokuapp.com/api/edit`;

class AuthService {
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  // Return Token;
  getToken() {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user")).token;
    } else {
      return "";
    }
  }

  register(username, email, password) {
    return axios.post(`${API_URL}/register`, { username, email, password });
  }

  login(email, password) {
    return axios.post(`${API_URL}/login`, { email, password });
  }

  logout() {
    localStorage.removeItem("user");
  }

  editUsername(_id, username) {
    let token = this.getToken();
    return axios.patch(
      `${EDIT_URL}/username/${_id}`,
      { username },
      {
        headers: {
            Authorization: token,
        },
      }
    );
  }

  editPassword(_id, password)
  {
    let token = this.getToken();
    return axios.patch(`${EDIT_URL}/password/${_id}`, { password }, {
        headers: {
            Authorization: token,
        }
    })
  }
}

export default new AuthService();
