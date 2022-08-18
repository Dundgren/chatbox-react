import { apiRegister } from "../helpers/user";
import { useState } from "react";

export default function RegisterForm() {
    // State
    const [registerFormData, setRegisterFormData] = useState({
        username: "",
        password: ""
    })

    // Functions
    function register() {
        apiRegister(registerFormData.username, registerFormData.password);
        setRegisterFormData({
            username: "",
            password: ""
        })
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
            <br />
            <input type="button" value="Register!"  onClick={register} />
        </div>
    )
}