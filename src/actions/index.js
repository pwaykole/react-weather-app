 import axios from 'axios';

 const API_KEY = '7cadaddb01307afac58eb68ebec1e7ba';
 const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
 export const Fetch_Weather = 'Fetch_Weather'
 export function fetchWeather(city){
     const url = `${ROOT_URL}&q=${city},us`;
     const request = axios.get(url);
     return {
         type: Fetch_Weather,
         payload: request
     }
 }