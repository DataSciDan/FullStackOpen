import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Country from './components/country';

const App = () => {
        const [searchString, setSearchString] = useState('search for a country');
        const [countriesAndData, setCountriesAndData] = useState([]);
        const [countries, setCountries] = useState([]);
        const [formResponse, setFormResponse] = useState(<div></div>);

        const hook = () => {
                axios.get('https://restcountries.eu/rest/v2/all').then(response => {
                        setCountriesAndData(response.data);
                        setCountries(response.data.map(country => country.name));
                });
        };

        useEffect(hook, []);

        const submitHandler = event => {
                if (event) {
                        event.preventDefault();
                }
                const query = searchString;
                const regex = new RegExp(`^${query}`, 'i');
                const matches = countries.filter(country => regex.test(country));
                const length = matches.length;
                if (length === 0 || searchString.length === 0) {
                        setFormResponse(<div></div>);
                }
                else if (length === 1) {
                        const data = countriesAndData.filter(country => country.name === matches[0])[0];
                        setFormResponse(<Country country={data} />);
                }
                else if (length <= 10) {
                        setFormResponse(
                                <div>
                                        {matches.map(country => {
                                                return (
                                                        <>
                                                                <p key={country}>{country}</p>
                                                                <button onClick={() => showHandler(country)}>
                                                                        show
                                                                </button>
                                                        </>
                                                )
                                        })}
                                </div>
                        );
                }
                else {
                        console.log(matches);
                        setFormResponse(<p>Too many matches; set another filter</p>);
                }
        };

        const showHandler = country => {
                setSearchString(country);
                submitHandler(null);
        }

        const changeHandler = event => {
                setSearchString(event.target.value);
        };

        return (
                <div>
                        <form value={searchString} onSubmit={submitHandler}>
                                <label htmlFor="input">find countries</label><input id="input" onChange={changeHandler} />
                                {formResponse}
                        </form>
                </div>
        );
};

export default App;
