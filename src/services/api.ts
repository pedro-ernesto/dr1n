require('dotenv').config();
import axios from 'axios'

const api = axios.create({
    baseURL: process.env.Streaming_Avaiability_URL,
    headers: {
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.X_RapidAPI_Host
    }
});

export { api };