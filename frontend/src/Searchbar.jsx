import React, { useState, useEffect } from 'react';
import Product from './Product'; // Import the Product component

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [allProducts, setAllProducts] = useState([]); // Hold all products fetched from the backend
    const [filteredProducts, setFilteredProducts] = useState([]); // Hold the filtered search results
    const [selectedProduct, setSelectedProduct] = useState(null); // To hold the clicked product details

    // Fetch all products when the component loads
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products/all'); // Replace with your API URL
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

    // Handle search input change and filter products
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

    // Handle product click
    const handleProductClick = (product) => {
        setSelectedProduct(product); // Set the selected product to show its details
    };

    return (
        <div style={styles.container}>
            <div style={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Enter product name"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={styles.input}
                />
                <ul style={styles.resultList}>
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            style={styles.resultItem}
                            onClick={() => handleProductClick(product)}
                        >
                            {product.name}
                        </li>
                    ))}
                </ul>
                {selectedProduct && (
                    <div style={styles.productContainer}>
                        <h3>Selected Product Details:</h3>
                        <Product
                            items={[selectedProduct]} // Pass the selected product as a single item
                            currentIndex={0}
                            expandedItemIndex={0} // Expand the first item by default
                            onPrev={() => {}} // No pagination in this view
                            onNext={() => {}} // No pagination in this view
                            toggleDetails={() => {}} // No toggling needed
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

// Updated Styles with Background for the Entire Section
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items to the top
        height: '100vh',
        background: 'linear-gradient(135deg, #f2f2f2, #a8dadc)', // Gradient background for the whole section
        padding: '20px',
    },
    searchBox: {
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ff6f61, #ffb44d)', // Cool gradient background for the search box
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px', // Increased padding for better look
        marginTop: '20px', // Reduced margin
        color: '#fff', // White text color to contrast with the background
    },
    input: {
        width: '100%',
        padding: '12px 18px', // Adjusted padding for better spacing
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #fff', // White border for contrast
        outline: 'none',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.2s ease-in-out',
    },
    resultList: {
        listStyleType: 'none',
        margin: '8px 0', // Reduced margin to decrease space
        padding: 0,
    },
    resultItem: {
        padding: '10px',
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '4px 0', // Reduced margin
        backgroundColor: '#ffffff',
        color: '#333',
        transition: 'background-color 0.2s',
    },
    productContainer: {
        marginTop: '8px', // Reduced margin between results and product
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
        color: '#333', // Color for text in product details
    },
};

export default Searchbar;

