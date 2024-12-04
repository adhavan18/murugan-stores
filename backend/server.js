const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');




const app = express();
const PORT = 3000;
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/retailstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));
const corsOptions = {
    origin: 'http://localhost:5173', // React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow cookies or other credentials
};

app.use(cors(corsOptions));
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
