import { useState } from "react";
import { apiSendMessage } from "../helpers/message";

export function MessageInput({userData}) {
    // State
    const [message, setMessage] = useState("");

    // Functions
    function sendMessage() {
        console.log("message")
        if (message.trim().length > 0) { // Check so message isn't empty or only whitespaces
            apiSendMessage(userData.userId , message);
            setMessage("");
        }
    }

    function handleChange(event) {
        setMessage(event.target.value);
    }

    function keyDownHandler(event) {
        if (event.code === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage()
        }
    }

    return (
        <div className="message-input">
            <textarea value={message} onChange={handleChange} onKeyDown={keyDownHandler} />
            <input type="button" value="Send" onClick={sendMessage} />
        </div>
    )
}
