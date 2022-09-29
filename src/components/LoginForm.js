import { useState } from "react";
import { apiLogin } from "../helpers/user";

export default function LoginForm({setUserData, setErrorMessage}) {
    // State
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    })

    //functions
    async function login() {
        if (loginFormData.username && loginFormData.password) {
            try {
                const user = await apiLogin(loginFormData.username, loginFormData.password);

                setUserData({
                    username: user.username,
                    userId: user.id,
                    age: user.age,
                    sex: user.sex,
                    location: user.location
                })
            } catch {
                setErrorMessage("Login failed!");
            }
        } else {
            setErrorMessage("Both username and password are required!");
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setLoginFormData(oldFormData => {
            return {
                ...oldFormData,
                [name]: value
            }
        });
    }

    function keyDownHandler(event) {
        if (event.code === "Enter") {
            login()
        }
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <label htmlFor="login-username-input">Username</label>
            <input 
                type="text"
                id="login-username-input"
                name="username"
                value={loginFormData.username}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="login-password-input">Password</label>
            <input
                type="password"
                id="login-password-input"
                name="password"
                value={loginFormData.password}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
            />
            <input type="button" value="Join chat!" onClick={login} />
        </div>
    )
}
