const dotenv = require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    DBNAME: process.env.DBNAME,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    LOGGING: false
};