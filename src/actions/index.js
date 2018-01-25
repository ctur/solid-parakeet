// Using my key from folder extras-keys.js but it's not pushed to git.
import { apiKey } from '../extras/keys'; 
import axios from 'axios';

// Enter your API key from openweathermap.org !
const API_KEY = apiKey;
console.log(API_KEY);

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}&units=metric`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};