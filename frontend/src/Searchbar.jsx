import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Searchbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('http://13.61.10.176:5000/api/products/search');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchAllProducts();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() !== '') {
            const filtered = allProducts.filter((product) =>
                product.name.toLowerCase().startsWith(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar-box">
                <div className="searchbar-input-container">
                    <AiOutlineSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for your favorite products..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="searchbar-input"
                    />
                    {searchQuery && (
                        <MdClose
                            className="clear-icon"
                            onClick={() => {
                                setSearchQuery('');
                                setFilteredProducts([]);
                            }}
                        />
                    )}
                </div>
                <ul className="suggestions">
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            className="suggestion-item"
                            onClick={() => handleProductClick(product)}
                        >
                            {product.name}
                        </li>
                    ))}
                </ul>
                {selectedProduct && (
                    <div className="product-details">
                        <h3>Selected Product Details:</h3>
                        <Product
                            items={[selectedProduct]}
                            currentIndex={0}
                            expandedItemIndex={0}
                            onPrev={() => {}}
                            onNext={() => {}}
                            toggleDetails={() => {}}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchbar;

