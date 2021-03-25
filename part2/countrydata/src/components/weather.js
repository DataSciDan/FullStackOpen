import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
        const blankData = {temperature: null, wind_speed: null, wind_dir: null, weather_descriptions: [null], weather_icons: [null]};

        const startingParams = {
                access_key: process.env.REACT_APP_WEATHERSTACK_API_KEY,
                query: city,
                units: 'm'
        };
        const [data, setData] = useState(blankData);
        const [params, setParams] = useState(startingParams)

        const hook = () => {
                setParams({...params, query: city});
                fetch({...params, query: city});
        }

        const fetch = (params) => {
                axios.get('http://api.weatherstack.com/current', { params }).then(response => {
                        setData(response.data.current);
                        console.log('weather data: ', response.data.current);
                }).catch(error => console.log('Error ', error));
        };

        useEffect(hook, []);
        // Ideally, the above line would be something like:
        // useEffect(hook, [city]);
        // And the weather display would update everytme a new city is entered
        // So far, I have been unable to successfully implement this
        // I've tried doing it and making the useEffect line in App.js:
        // useEffect(hook, [searchString]);
        // but to no avail
        // And that's my best attempt after working on this for hours

        return (
                <>
                        <h3>Weather in {city}</h3>
                        <p><strong>temperature:</strong> {data.temperature} celsius</p>
                        <img src={data.weather_icons[0]} alt={data.weather_descriptions[0]} />
                        <p><strong>wind:</strong> {data.wind_speed} kph direction {data.wind_dir}</p>
                </>
        )
};

export default Weather;