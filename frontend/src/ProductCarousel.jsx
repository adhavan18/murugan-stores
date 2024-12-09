import React, { useState } from 'react';
import Product from './Product'; // Assuming you already have a Product component

const ProductCarousel = ({ heading, products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null); // To hold selected product

    // Function to move to the previous set of products
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3); // Decrease the index by 3
        }
    };

    // Function to move to the next set of products
    const handleNext = () => {
        if (currentIndex + 3 < products.length) {
            setCurrentIndex(currentIndex + 3); // Increase the index by 3
        }
    };

    // Get the current 3 products to display
    const product1 = products[currentIndex];
    const product2 = products[currentIndex + 1];
    const product3 = products[currentIndex + 2];

    const styles = {
        container: {
            padding: '20px',
            position: 'relative',
            width: '100%',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
        },
        carouselWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden', // Hide overflow
        },
        productContainer: {
            minWidth: 'calc(33.33% - 20px)', // Show 3 products at a time
            margin: '0 10px', // Space between products
            cursor: 'pointer',
        },
        navButton: {
            backgroundColor: '#007bff',
            border: 'none',
            color: 'white',
            padding: '10px',
            fontSize: '20px',
            cursor: 'pointer',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            zIndex: 10,
            transform: 'translateY(-50%)',
        },
        prevButton: {
            left: '10px',
        },
        nextButton: {
            right: '10px',
        },
        disabledButton: {
            backgroundColor: '#ccc',
            cursor: 'not-allowed',
        },
        productDetails: {
            padding: '20px',
            backgroundColor: '#f4f4f4',
            borderRadius: '10px',
            marginTop: '20px',
            textAlign: 'center',
        },
        productImage: {
            width: '100%',
            height: 'auto',
            maxWidth: '300px',
            margin: '0 auto',
        },
    };

    // Handle product click to enlarge and show details
    const handleProductClick = (product) => {
        // Toggle between showing and hiding the details
        if (selectedProduct && selectedProduct.id === product.id) {
            setSelectedProduct(null); // Hide the details if same product is clicked again
        } else {
            setSelectedProduct(product); // Set the selected product to show details
        }
    };

    return (
        <div style={styles.container}>
            {/* Heading */}
            <h2 style={styles.heading}>{heading}</h2>

            {/* Carousel Wrapper */}
            <div style={styles.carouselWrapper}>
                {/* Previous and Next Buttons */}
                <button
                    style={{
                        ...styles.navButton,
                        ...styles.prevButton,
                        ...(currentIndex === 0 ? styles.disabledButton : {}),
                    }}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    ◀
                </button>

                {/* Display 3 products at a time */}
                <div style={{ display: 'flex', width: '100%' }}>
                    <div
                        style={styles.productContainer}
                        onClick={() => handleProductClick(product1)}
                    >
                        <Product item={product1} />
                    </div>
                    <div
                        style={styles.productContainer}
                        onClick={() => handleProductClick(product2)}
                    >
                        <Product item={product2} />
                    </div>
                    <div
                        style={styles.productContainer}
                        onClick={() => handleProductClick(product3)}
                    >
                        <Product item={product3} />
                    </div>
                </div>

                {/* Next Button */}
                <button
                    style={{
                        ...styles.navButton,
                        ...styles.nextButton,
                        ...(currentIndex + 3 >= products.length
                            ? styles.disabledButton
                            : {}),
                    }}
                    onClick={handleNext}
                    disabled={currentIndex + 3 >= products.length}
                >
                    ▶
                </button>
            </div>

            {/* Display Product Details if a product is selected */}
            {selectedProduct && (
                <div style={styles.productDetails}>
                    <h3>{selectedProduct.product_name}</h3>
                    <p>Brand: {selectedProduct.brand_name}</p>
                    <p>Section: {selectedProduct.section}</p>
                    <p>Rack: {selectedProduct.rack}</p>
                    <p>Speciality: {selectedProduct.speciality || 'N/A'}</p>
                    <p>Tax: {selectedProduct.tax}</p>
                    <p>Vendor: {selectedProduct.vendor_name}</p>
                    {/* Display the product image */}
                    <img
                        src={selectedProduct.image_link}
                        alt={selectedProduct.product_name}
                        style={styles.productImage}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductCarousel;
