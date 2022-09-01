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
            {userData.userId && 
                <>
                    <LogoutButton setUserData={setUserData} />
                    <IdCard username={userData.username} />
                    <ChatBox username={userData.username} />
                    <MessageInput userData={userData} />
                </>
            }
        </div>
    );
}

export default App;
