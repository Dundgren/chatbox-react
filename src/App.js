import { useState } from "react";
import LoginForm from "./components/LoginForm";
import ChatBox from "./components/ChatBox";
import "./css/app.css";
import RegisterForm from "./components/RegisterForm";

function App() {
    // State
    const [userData, setUserData] = useState({
        username: "",
        userId: ""
    });

    return (
        <div className="main">
            <h1 className="title">ChatBox</h1>
            {!userData.userId &&
                <>
                    <LoginForm setUserData={setUserData}/>
                    <RegisterForm />
                </>
            }
            {userData.userId && <ChatBox />}
        </div>
    );
}

export default App;
