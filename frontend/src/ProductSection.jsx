import React, { useState, useEffect } from 'react';
import ProductCarousel from './ProductCarousel';

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://13.48.44.58:5000/api/products'); // Replace with your API endpoint
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to fetch products.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Filter products by speciality
    const filterProductsBySpeciality = (speciality) =>
        products.filter((product) => product.speciality === speciality);

    if (loading) {
        return <p style={styles.loading}>Loading products...</p>;
    }

    if (error) {
        return <p style={styles.error}>{error}</p>;
    }

    return (
        <div style={styles.container}>
            {/* Best Sellers Carousel */}
            <div style={styles.section}>
                <ProductCarousel
                    heading="Best Sellers"
                    products={filterProductsBySpeciality('Best Seller')}
                />
            </div>

            {/* Top Deals Carousel */}
            <div style={styles.section}>
                <ProductCarousel
                    heading="Top Deals"
                    products={filterProductsBySpeciality('Top Deal')}
                />
            </div>

            {/* Today's Special Carousel */}
            <div style={styles.section}>
                <ProductCarousel
                    heading="Today's Special"
                    products={filterProductsBySpeciality("Today's Special")}
                />
            </div>
        </div>
    );
};

// CSS Styles
const styles = {
    container: {
        width: '90%',
        margin: '0 auto',
        padding: '20px 0',
        backgroundColor: '#f9f9f9',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    section: {
        marginBottom: '40px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0',
        color: '#333',
    },
    loading: {
        fontSize: '18px',
        textAlign: 'center',
        color: '#555',
    },
    error: {
        fontSize: '18px',
        textAlign: 'center',
        color: 'red',
    },
};

export default ProductSection;
