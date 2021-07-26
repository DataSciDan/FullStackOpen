import React from 'react';
import Person from './person';

const PhoneNumbers = ({entries, deletionHandler}) => {
        const entriesNow = entries.map(p => <Person key={p.name} name={p.name} number={p.number} deletionHandler={deletionHandler} />);
        return (
                <>
                        <h3>Numbers</h3>
                        <div>
                                {entriesNow}
                        </div>
                </>
        );
};

export default PhoneNumbers;