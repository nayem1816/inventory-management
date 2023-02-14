const express = require('express');
const cors = require('cors');
const ProductRoute = require('./routes/Product.route');
const BrandRoute = require('./routes/Brand.route');
const StoreRoute = require('./routes/Store.route');
const CategoryRoute = require('./routes/Category.route');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Route is working');
});

app.use('/api/v1/product', ProductRoute);
app.use('/api/v1/brand', BrandRoute);
app.use('/api/v1/store', StoreRoute);
app.use('/api/v1/category', CategoryRoute);

module.exports = app;
