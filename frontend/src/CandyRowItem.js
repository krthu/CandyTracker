import React from 'react';

import { Link } from 'react-router-dom';

const CandyRowItem = ({ candy }) => {
    console.log(candy);
    return(
        <li key={candy.id}>
            <Link to={`/candy/${candy.id}`}> <h2>{candy.name}</h2></Link>
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