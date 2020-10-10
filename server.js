const { Server } = require('http');
const dotenv = require('dotenv');

dotenv.config({path: "./config.env"});

const app = require('./app');

const PORT = 3007;

app.listen(PORT);
console.log(`server is running on the ${PORT}`);