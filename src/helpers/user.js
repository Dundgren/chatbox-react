import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function apiRegister(username, password) {
    const data = {
        username: username,
        password: password,
        age: "",
        sex: "",
        location: ""
    };

    const result = await axios.post(`${baseUrl}/api/v1/users`, data);

}

export async function apiLogin(username, password) {
    const data = {
        username: username,
        password: password
    };

    const result = await axios.post(`${baseUrl}/api/v1/users/login`, data);

    return result.data;
}
