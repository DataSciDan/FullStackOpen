import React from 'react';

const SearchBox = ({ handler }) => {
        return (
                <div>
                        <input onChange={handler} />
                </div>
        )
};

export default SearchBox;