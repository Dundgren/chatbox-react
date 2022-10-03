import { useEffect, useState, useRef } from "react";
import { apiGetMessages, apiDeleteMessage } from "../helpers/message";

export default function ChatBox({user}) {
    // State
    const [messages, setMessages] = useState([]);
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

    // Refs
    const chatBoxDiv = useRef(null);

    // Functions
    async function deleteMessage(messageId) {
        apiDeleteMessage(messageId);
    }

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

    console.log(messages)

    // Elements
    const messageElements = messages.map(m => {
        return (
            <div key={m.id} className={user === m.user ? 'message-box message-right' : 'message-box'}>
                <h2>
                    { user === m.user && <span title="Delete message" className="trashcan" onClick={ () => { deleteMessage(m.id) } }>&#128465; </span> }
                    { m.username } 
                    <span className="date-string">{ m.timestamp }</span> 
                </h2>
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
