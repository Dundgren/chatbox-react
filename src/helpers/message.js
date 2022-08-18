import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function apiSendMessage(userId, message) {
    const data = {
        user: userId,
        message: message
    };

    await axios.post(`${baseUrl}/api/v1/messages`, data);
}

export async function apiGetMessages() {
    const result = await axios.get(`${baseUrl}/api/v1/messages`);

    return result;
}
