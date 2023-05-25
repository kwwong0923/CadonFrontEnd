import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService
{
    getCurrentUser()
    {
        return JSON.parse(localStorage.getItem("user"));
    }

    register(username, email, password)
    {
        return axios.post(`${API_URL}/register`, {username, email, password});
    }

    login(email, password)
    {
        return axios.post(`${API_URL}/login`, {email, password});
    }

    logout()
    {
        localStorage.removeItem("user");
    }

    editUsername(username)
    {
        return axios.post("/edit/username", {})
    }
}

export default new AuthService();