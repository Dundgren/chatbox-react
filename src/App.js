import { useState } from "react";
import LoginForm from "./components/LoginForm"
import "./css/app.css"

function App() {
    // State
    const [userData, setUserData] = useState({
        username: "",
        userId: ""
    });

    return (
        <div className="main">
            <h1 className="title">ChatBox</h1>
            <LoginForm
                setUserData={setUserData}
            />
        </div>
    );
}

export default App;
