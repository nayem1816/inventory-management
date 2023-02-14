const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const color = require('colors');
const app = require('./app');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database is connected successfully.'.red.bold);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`.yellow.bold);
});
