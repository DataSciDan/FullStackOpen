import React, { useState, useEffect } from 'react';
import phoneNumberServices from './services/phonenumbers';
// import Person from './components/person';
import SearchBox from './components/searchbox';
import PhoneNumbers from './components/phonenumbers';
import EnterNewContact from './components/enternewcontact';
import Notification from './components/Notification';

const App = () => {
        const [persons, setPersons] = useState([]);
        const [newName, setNewName] = useState('new name here');
        const [newNumber, setNewNumber] = useState('0');
        const [entriesToDisplay, setEntriesToDisplay] = useState([]);
        const [message, setMessage] = useState(null);
        const [isError, setIsError] = useState(false);

        const hook = () => {
                phoneNumberServices.getAll().then(data => {
                        setPersons(data);
                        setEntriesToDisplay(data);
                });
        };

        useEffect(hook, []);

        const nameChangeHandler = event => setNewName(event.target.value);
        const numberChangeHandler = event => setNewNumber(event.target.value);
        const searchHandler = event => {
                const query = event.target.value;
                if (query) {
                        const regex = new RegExp(`^${query}`, 'i');
                        const relevant = persons.filter(p => p.name.match(regex));
                        setEntriesToDisplay(relevant);
                }
                else {
                        setEntriesToDisplay(persons);
                }
        };

        const addEntry = event => {
                event.preventDefault();
                const found = persons.find(person => person.name === newName)
                if (!found) {
                        const newPerson = { name: newName, number: newNumber };
                        phoneNumberServices.create(newPerson).then( data => {
                                const personsNow = persons.concat(data);
                                setPersons(personsNow);
                                setEntriesToDisplay(personsNow);
                                setMessage(`${newName} added to phone book with the number ${newNumber}`);
                                setIsError(false);
                                setTimeout(() => setMessage(null), 5000);
                        });
                }
                else {
                        const wanted = window.confirm(`${newName} is already in the phonebook. Do you want to overwrite the existing number?`);
                        if (!wanted) {
                                return;
                        }
                        found.number = newNumber;
                        phoneNumberServices.update(found).then(entry => {
                                const personsCopy = [...persons];
                                for(let person of personsCopy) {
                                        if (person.id === entry.id) {
                                                personsCopy.number = entry.number;
                                                break;
                                        }
                                }
                                setPersons(personsCopy);
                                setEntriesToDisplay(personsCopy);
                                setMessage(`Phone number for ${newName} successfully updated to ${newNumber}.`);
                                setIsError(false);
                                setTimeout(() => setMessage(null), 5000);
                        }).catch(error => {
                                hook();
                                setMessage(`Information on ${newName} has been deleted from the server`);
                                setIsError(true);
                        });
                }
        };

        const removeEntry = name => {
                const wanted = window.confirm(`Delete ${name} and their number?`);
                if (!wanted) {
                        return;
                }
                const id = persons.find(person => person.name === name).id;
                phoneNumberServices.remove(id).then(response => {
                        const modified = entriesToDisplay.filter(e => e.id !== id);
                        setPersons(modified);
                        setEntriesToDisplay(modified);
                        setMessage(`${name} and their number successfully DELETED`);
                        setIsError(false);
                        setTimeout(() => setMessage(null), 5000);
                }).catch(error => {
                        setMessage(`Entry not in phonebook, perhaps already deleted`);
                        setIsError(true);
                        setTimeout(() => setMessage(null), 5000);
                });
        };

        return (
                <div>
                        <h2>Phonebook</h2>

                        <Notification message={message} isError={isError} />

                        <SearchBox handler={searchHandler} />

                        <EnterNewContact name={newName} number={newNumber} submitHandler={addEntry} nameChangeHandler={nameChangeHandler} numberChangeHandler={numberChangeHandler} />

                        <PhoneNumbers entries={entriesToDisplay} deletionHandler={removeEntry} />
                </div>
        );
}

export default App;
