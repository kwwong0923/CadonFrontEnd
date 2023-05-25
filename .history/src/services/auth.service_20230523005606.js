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
        return axios.post()
    }
}