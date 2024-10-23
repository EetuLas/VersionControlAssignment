import React, { useState, useEffect } from "react";
import axios from "axios";

const Images = () => {
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
        const fetchCatImages = async () => {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5', {
                    headers: {
                        'x-api-key': '' 
                    }
                });
                setCatImages(response.data);  
        };

        fetchCatImages();
    }, []);

    return (
        <div>
            <h1>Random Cat Images</h1>
            <ul>
                {catImages.map((cat, index) => (
                    <li key={index}>
                        <img src={cat.url} alt={`Random cat ${index + 1}`} width="300" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Images;