import axios from 'axios';

const instance = axios.create({
    timeout: 50000,
    responseType: 'json',
});


export default instance



export const baseURL = 'http://127.0.0.1:8000/'
export const SOCKET_PATH = 'wss://127.0.0.1:8000/chat/';