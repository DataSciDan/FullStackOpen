import React from 'react';

const Person = ({ name, number, deletionHandler }) => (
                <p>
                        {name} {number} <button onClick={() => deletionHandler(name)}>delete</button>
                </p>
);

export default Person;