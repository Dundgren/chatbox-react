import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function apiRegister(username, password, age, sex, location) {
    const data = {
        username: username,
        password: password,
        age: age,
        sex: sex,
        location: location
    };
    console.log(data)

    const result = await axios.post(`${baseUrl}api/v1/users`, data);

    console.log(result);
}

export async function apiLogin(username, password) {
    const data = {
        username: username,
        password: password
    };

    const result = await axios.post(`${baseUrl}api/v1/users/login`, data);

    return result.data;
}
