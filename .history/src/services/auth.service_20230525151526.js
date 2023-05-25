import axios from "axios";
const API_URL = "http://localhost:8080/api/user";
const EDIT_URL = "http://localhost:8080/api/edit";

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

    editUsername(_id, username)
    {
        return axios.post(`${EDIT_URL}/username/${_id}`, {username}, {
            headers: {
                
            }
        })
    }
}

export default new AuthService();