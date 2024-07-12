import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandyList = () => {
    const [candies, setCandies] = useState([]); // Initialiserar som tom array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch candies
        const fetchCandies = async () => {

            try {
                const response = await axios.get('http://localhost:3000/candy');
                setCandies(response.data.candies); // Assuming the response is an object with a key 'candys'
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCandies();
    }, []); // Empty dependency array ensures this runs only once

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching candies: {error.message}</p>;

    return (
        <div>
            <h1>Candies</h1>
            <ul>
                {candies && candies.map((candy) => ( // Lägg till kontroll här
                    <li key={candy.id}>{candy.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CandyList;