// Setting Connection String with Database
module.exports = {
    development: {
        database: {
            //host: 'cluster0-shard-00-02.hscae.mongodb.net',
            host: 'mongodb+srv://leo_root:rootpass@cluster0.hscae.mongodb.net/acolhepg?retryWrites=true&w=majority',
            port: 27017,
            name: 'acolhepg',
           // dialect: 'mongodb',
            user: 'leo_root',
            password: 'rootpass'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}