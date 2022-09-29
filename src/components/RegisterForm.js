import { apiRegister } from "../helpers/user";
import { useState } from "react";

export default function RegisterForm({ setErrorMessage }) {
    // State
    const [registerFormData, setRegisterFormData] = useState({
        username: "",
        password: "",
        age: "",
        sex: "",
        location: ""
    })

    // Functions
    function register() {
        if (registerFormData.username && registerFormData.password) {
            try {
                apiRegister(
                    registerFormData.username, 
                    registerFormData.password,
                    registerFormData.age,
                    registerFormData.sex,
                    registerFormData.location
                );

                setRegisterFormData({
                    username: "",
                    password: "",
                    age: "",
                    sex: "",
                    location: ""
                })
            } catch {
                setErrorMessage("Registration failed!");
            }
        } else {
            setErrorMessage("Both username and password are required!");
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setRegisterFormData(oldFormData => {
            return {
                ...oldFormData,
                [name]: value
            }
        });
    }

    function keyDownHandler(event) {
        if (event.code === "Enter") {
            register()
        }
    }

    return (
        <div className="register-form">
            <h2>Register</h2>
            <label htmlFor="register-username-input">Username</label>
            <input
                type="text"
                id="register-username-input"
                name="username"
                value={registerFormData.username}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="register-password-input">Password</label>
            <input
                type="password"
                id="register-password-input"
                name="password"
                value={registerFormData.password}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="register-age-input">Age</label>
            <input
                type="number"
                id="register-age-input"
                name="age"
                value={registerFormData.age}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="register-sex-input">Sex</label>
            <select
                id="register-sex-input"
                name="sex"
                value={registerFormData.sex}
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <label htmlFor="register-location-input">Location</label>
            <input
                type="text"
                id="register-location-input"
                name="location"
                value={registerFormData.location}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
            />
            <input type="button" value="Register!"  onClick={register} />
        </div>
    )
}