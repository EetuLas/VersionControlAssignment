import React, { useState, useEffect } from "react";
import axios from "axios";

const Facts = () => {
    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFacts = async () => {
            const response = await axios.get('https://cat-fact.herokuapp.com/facts');
        }
    });

    fetchFacts();
    }, [];

    return (
        <div>
            <h1>Random Cat Facts</h1>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Facts;