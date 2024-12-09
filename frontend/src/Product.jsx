import React from 'react';

const Product = ({ item, toggleDetails }) => {
    const isExpanded = item && item.expanded;

    if (!item) {
        return null;  // Prevent rendering if no item is provided
    }

    return (
        <div
            style={{
                ...styles.card,
                transform: isExpanded ? 'scale(1.2) rotateX(0deg)' : 'scale(1) rotateX(15deg)',
                boxShadow: isExpanded
                    ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                    : '0 10px 20px rgba(0, 0, 0, 0.2)',
                zIndex: isExpanded ? 2 : 1,
            }}
            onClick={toggleDetails}
        >
            <div style={styles.imageContainer}>
                <img src={item.image_link} alt={item.product_name} style={styles.image} />
            </div>
            <h3 style={styles.name}>{item.product_name}</h3>

            {isExpanded && (
                <div style={styles.details}>
                    <p><strong>Brand:</strong> {item.brand_name}</p>
                    <p><strong>Rack:</strong> {item.rack}</p>
                    <p><strong>Section:</strong> {item.section}</p>
                    <p><strong>Vendor:</strong> {item.vendor_name}</p>
                    <p><strong>Tax:</strong> {item.tax}</p>
                    {item.speciality && <p><strong>Speciality:</strong> {item.speciality}</p>}
                </div>
            )}
        </div>
    );
};

const styles = {
    card: {
        position: 'relative',
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center',
        width: '250px',
        cursor: 'pointer',
        transition: 'transform 0.4s, box-shadow 0.3s',
        transformStyle: 'preserve-3d',
    },
    imageContainer: {
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '16px',
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '12px',
        transition: 'transform 0.4s',
    },
    name: {
        fontSize: '22px',
        fontWeight: '600',
        margin: '12px 0',
        color: '#333',
    },
    details: {
        marginTop: '16px',
        textAlign: 'left',
        fontSize: '16px',
        color: '#444',
    },
};

export default Product;



