const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    aisle: { type: String, required: true },
    section: { type: Number, required: true },
    location: { type: String, required: false },
    availability: { type: Boolean, required: true },
    url:{type:String,required:true},
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
