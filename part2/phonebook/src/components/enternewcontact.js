import React from 'react';

const EnterNewContact = ({name, number, submitHandler, nameChangeHandler, numberChangeHandler}) => {
        return (
                <>
                        <h3>Add a new contact</h3>
                        <form onSubmit={submitHandler}>
                                <div>
                                        name: <input value={name} onChange={nameChangeHandler} />
                                        number: <input value={number} onChange={numberChangeHandler} />
                                </div>
                                <div>
                                        <button type='submit'>add</button>
                                </div>
                        </form>
                </>
        );
};

export default EnterNewContact;