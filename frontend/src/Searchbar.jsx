import React, { useState } from 'react';
import Product from './Product';
import './Searchbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() !== '') {
            try {
                const response = await fetch('http://13.48.44.58:5000/api/products/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query }),
                });

                const data = await response.json();
                console.log('Filtered products data:', data);

                // Ensure data is an array before updating the filtered products state
                if (Array.isArray(data)) {
                    setFilteredProducts(data);
                } else {
                    console.error('Expected an array, but got:', data);
                    setFilteredProducts([]); // Reset if data is not an array
                }
            } catch (error) {
                console.error('Error fetching filtered products:', error);
            }
        } else {
            setFilteredProducts([]);  // Reset when search query is empty
            setSelectedProduct(null);  // Reset the selected product when search query is cleared
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product); // Set selected product
    };

    const toggleDetails = () => {
        if (selectedProduct) {
            setSelectedProduct({ ...selectedProduct, expanded: !selectedProduct.expanded });
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setFilteredProducts([]);  // Reset filtered products
        setSelectedProduct(null);  // Reset selected product when search is cleared
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
                            onClick={handleClearSearch}  // Use the new clear search function
                        />
                    )}
                </div>
                {/* Display suggestions if available */}
                {filteredProducts.length > 0 && (
                    <ul className="suggestions">
                        {filteredProducts.map((product) => (
                            <li
                                key={product.id}
                                className="suggestion-item"
                                onClick={() => handleProductClick(product)}
                            >
                                {product.product_name} {/* Display product name */}
                            </li>
                        ))}
                    </ul>
                )}
                {/* Show product details when a product is selected */}
                {selectedProduct && (
                    <div className="product-details">
                        <h3>Selected Product Details:</h3>
                        <Product
                            item={selectedProduct}  // Pass the selected product as the item prop
                            toggleDetails={toggleDetails}  // Pass toggleDetails function
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchbar;





