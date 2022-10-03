import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function apiSendMessage(userId, message) {
    const data = {
        user: userId,
        message: message
    };

    const result = await axios.post(`${baseUrl}api/v1/messages`, data);

    console.log(result);
}

export async function apiGetMessages() {
    const result = await axios.get(`${baseUrl}api/v1/messages`);

    return result;
}

export async function apiDeleteMessage(messageId) {
    const data = {
        messageId: messageId,
    };

    const result = await axios.post(`${baseUrl}api/v1/messages/delete`, data);

    console.log(result);
}
