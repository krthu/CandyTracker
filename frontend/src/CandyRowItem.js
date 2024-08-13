import React from 'react';

const CandyRowItem = ({ candy }) => {
    console.log(candy);
    return(
        <li key={candy.id}>
            <h2>{candy.name}</h2>
            <ul>
                {Object.entries(candy).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))} 
            </ul>
            {console.log(candy)}
        </li>
    );
};

export default CandyRowItem;