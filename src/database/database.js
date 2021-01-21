// Setting Mongoose as ODM
const mongoose = require('mongoose');

// Setting we gonna use on environment mode or development
/*const environment = process.env.NODE_ENV || 'development';
const config = require('../config/config')[environment];*/

// Give datas of  connection 
async function ConnectAtlas () {
try{
    await mongoose.connect('mongodb+srv://leo_root:rootpass@cluster0.hscae.mongodb.net/acolhepg?retryWrites=true&w=majority', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    console.log(`Connection to database realized!`)
}
catch(fail){
    console.log(`A fail has been ocurred... ${fail}`);
}

}
    



module.exports = ConnectAtlas();