import "./css/app.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import ChatBox from "./components/ChatBox";
import RegisterForm from "./components/RegisterForm";
import IdCard from "./components/IdCard";
import { MessageInput } from "./components/MessageInput";
import LogoutButton from "./components/LogoutButton";

function App() {
    // State
    const [userData, setUserData] = useState({
        username: "",
        userId: "",
        age: "",
        sex: "",
        location: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <>
            {!userData.userId &&
                <main className="front-page">
                    <h1 className="title">ChatBox</h1>
                    <p className="error-message">{ errorMessage }</p>
                    <LoginForm setUserData={setUserData} setErrorMessage={setErrorMessage} />
                    <RegisterForm setErrorMessage={setErrorMessage} />
                </main>
            }
            {userData.userId && 
                <main className="chat-page">
                    <header>
                        <h1 className="title">ChatBox</h1>
                        <LogoutButton setUserData={setUserData} />
                        <IdCard userData={userData} />
                    </header>
                    <ChatBox username={userData.username} />
                    <MessageInput userData={userData} />
                </main>
            }
        </>
    );
}

export default App;
