import React from 'react';

const Notification = ({message, isError}) => {
        if (message === null) {
                return null;
        };

        const styleAll = {
                borderStyle: 'solid',
                borderSize: 2,
                padding: 10,
                fontSize: 16
        };

        const errorStyle = {
                borderColor: 'red',
                backgroundColor: 'pink',
                color: 'red'
        };

        const successStyle = {
                borderColor: 'green',
                backgroundColor: 'lightgreen',
                color: 'green'
        }

        let style = isError ? {...styleAll, ...errorStyle} : {...styleAll, ...successStyle}
        
        return (
                <div className='notfication' style={style}>
                        {message}
                </div>
        );
}


export default Notification;