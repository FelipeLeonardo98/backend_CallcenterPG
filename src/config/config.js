// Setting Connection String with Database
require('dotenv/config');

module.exports = {
    development: {
        database: {
            //host: 'cluster0-shard-00-02.hscae.mongodb.net',
            host: process.env.DB_ACCESS,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD

        }
    }
}