import React from 'react'
import './AddProduct.css'
import { useState } from 'react'
import axios from 'axios'
function AddProduct(){
    const[product,setproduct]=useState({
        name:"",
        price:0,
        aisle:"",
        section:0,
        location:"",
        availability:true,
        url:""
    })
    function change(e){
        setproduct({...product,[e.target.name]:e.target.value})
        console.log(product)
    }

    // new code
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
    
            if (res.ok) {
                const data = await res.json();
                console.log('API Response:', data); // Debug log to see the response structure
                alert(data.message || 'Product added successfully!');
                setproduct({ name: '', price: 0, aisle: '', section: '', location: '', availability: true , url:""});
            } else {
                const errorData = await res.json();
                console.error('Error Response:', errorData); // Debug log to see error details
                alert(errorData.message || 'Failed to add product. Please try again.');
            }
        } catch (err) {
            console.error('Fetch Error:', err.message);
            alert('Failed to add product. Please check your connection.');
        }
    };
    
    
    // end
    return (
        <form className="add-product-form">
            <h2>Add Product</h2>
            <div className="form-group">
                <label>
                    Name:
                    <input type="text" name="name" value={product.name} onChange={change} required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    price:
                    <input type="text" name="price" value={product.price} onChange={change} required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    aisle:
                    <input type="text" name="aisle" value={product.aisle} onChange={change} required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    section:
                    <input type="text" name="section" value={product.section} onChange={change} required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    location:
                    <input type="text" name="location" value={product.location} onChange={change} required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    availability:
                    <input type="text" name="availability" value={product.availability} onChange={change} required />
                </label>
            </div>
            
            <div className="form-group">
                <label>
                    url:
                    <input type="text" name="url" value={product.url} onChange={change} required />
                </label>
            </div>

            <button type="submit" onClick={handleSubmit}>Add Product</button>
        </form>
    );
}

export default AddProduct