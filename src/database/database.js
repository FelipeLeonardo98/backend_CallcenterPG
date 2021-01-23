// Setting ODM Mongoose 
const mongoose = require('mongoose');

// Give datas of connection 
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
    console.log(`Database connection erro: ${fail}`);
}

}
    



module.exports = ConnectAtlas();