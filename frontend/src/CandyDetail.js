import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CandyDetail = () => {
    const { id } = useParams(); // Hämtar ID från URL:en
    const [candy, setCandy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCandy = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/candy/${id}`);
                setCandy(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCandy();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching candy: {error.message}</p>;
    if (!candy) return <p>No candy found!</p>;

    return (
        <div>
            <h2>{candy.name}</h2>
            <p><strong>ID:</strong> {candy.id}</p>
            <p><strong>Name:</strong> {candy.name}</p>
            
            {/* Lägg till fler detaljer om godiset här */}
        </div>
    );
};

export default CandyDetail;