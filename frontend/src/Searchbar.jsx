
import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
    const [product, setProduct] = useState('');
    const [location, setLocation] = useState('');

    const handleFind = () => {
        // Mock data for product location
        const mockData = {
            "milk": "Aisle 5, Section B",
            "bread": "Aisle 3, Section A",
            "sugar": "Aisle 2, Section C"
        };
        setLocation(mockData[product.toLowerCase()] || "Product not found");
    };

    return (
        <div id="finder" className="product-finder">
            <h2>Find Product Location</h2>
            <input
                type="text"
                placeholder="Enter product name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
            />
            <button onClick={handleFind}>Find</button>
            {location && <p>Location: {location}</p>}
        </div>
    );
};

export default Searchbar;
