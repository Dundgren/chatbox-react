import { useEffect, useState, useRef } from "react";
import { apiGetMessages } from "../helpers/message";

export default function ChatBox({username}) {
    // State
    const [messages, setMessages] = useState([]);
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

    // Refs
    const chatBoxDiv = useRef(null);

    // Effects
    useEffect(() => {
        async function getMessages() {
            let newMessages = await apiGetMessages();
    
            newMessages.data.forEach(m => {
                const d = new Date(m.timestamp);
    
                m.timestamp = d.toLocaleString("sv-SE");
            });
    
            setMessages(newMessages.data);
        }

        const interval = setInterval(getMessages, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    useEffect(() => {
        function scrollToBottom() {
            if (chatBoxDiv.current.scrollHeight - chatBoxDiv.current.scrollTop === chatBoxDiv.current.clientHeight) { // If user has scrolled all the way down turn on auto-scroll
                setShouldScrollToBottom(true);
            }
            if (shouldScrollToBottom) {
                chatBoxDiv.current.scrollTop = chatBoxDiv.current.scrollHeight;
            }
        }
 
        const interval = setInterval(scrollToBottom, 200);

        return () => {
            clearInterval(interval);
        }
    });

    // Elements
    const messageElements = messages.map(m => {
        return (
            <div key={m.id} className={username === m.username ? 'message-box message-right' : 'message-box'}>
                <h2>{ m.username } <span className="date-string">{ m.timestamp }</span> </h2>
                <p>{ m.message }</p>
            </div>
        );
    });

    return (
        <div className="chat-box" ref={chatBoxDiv} onScroll={ () => { setShouldScrollToBottom(false) } }>
            {messageElements}
        </div>
    )
}
