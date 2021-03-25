import React from 'react';
import Weather from './weather';

const Country = ({country}) => {
        return (
                <div>
                        <h2>{country.name}</h2>
                        <p>capital {country.capital}</p>
                        <p>population {country.population}</p>
                        <h3>languages</h3>
                        <ul>
                                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                        </ul>
                        <img src={country.flag} alt='flag goes here' height="100px" />
                        <Weather city={country.capital} />
                </div>
        );
};

export default Country;