import React from 'react';

const Product = ({ items, currentIndex, expandedItemIndex, onPrev, onNext, toggleDetails }) => {
    const visibleItems = items.slice(currentIndex, currentIndex + 3); // Display 3 items at a time

    return (
        <div style={styles.carousel}>
            {/* Navigation Buttons */}
            <button
                style={styles.button}
                onClick={onPrev}
                disabled={currentIndex === 0}
            >
                ◀
            </button>

            {/* Product Cards */}
            <div style={styles.itemsContainer}>
                {visibleItems.map((item, index) => {
                    const isExpanded = expandedItemIndex === index;
                    return (
                        <div
                            key={index}
                            style={{
                                ...styles.card,
                                transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                            }}
                            onClick={() => toggleDetails(index)}
                        >
                            <img src={item.url} alt={item.name} style={styles.image} />
                            <h3 style={styles.name}>{item.name}</h3>
                            <p style={styles.price}>₹{item.price}</p>

                            {isExpanded && (
                                <div style={styles.details}>
                                    <p><strong>Aisle:</strong> {item.aisle}</p>
                                    <p><strong>Section:</strong> {item.section}</p>
                                    <p><strong>Location:</strong> {item.location}</p>
                                    <p><strong>Availability:</strong> {item.availability ? 'In Stock' : 'Out of Stock'}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <button
                style={styles.button}
                onClick={onNext}
                disabled={currentIndex + 3 >= items.length}
            >
                ▶
            </button>
        </div>
    );
};

// Styling
const styles = {
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        margin: '16px',
    },
    itemsContainer: {
        display: 'flex',
        gap: '16px',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
        marginBottom: '8px',
    },
    name: {
        fontSize: '18px',
        margin: '8px 0',
    },
    price: {
        fontSize: '16px',
        color: '#555',
    },
    details: {
        marginTop: '12px',
        textAlign: 'left',
        fontSize: '14px',
    },
    button: {
        fontSize: '18px',
        padding: '8px 16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        transition: 'background-color 0.2s',
    },
};

export default Product;

