// Setting ODM Mongoose 
const mongoose = require('mongoose');
require('dotenv/config');

// Give datas of connection
async function ConnectAtlas () {
try{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hscae.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    console.log(`Connection to database realized!`)
}
catch(fail){
    console.log(`Database connection erro: ${fail}`);
}

}
    



module.exports = ConnectAtlas();