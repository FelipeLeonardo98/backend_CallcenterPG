const mongoose = require('mongoose');

// Building a Collection "Monitorang"

const Monitorang = mongoose.Schema(
{
    category:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
},
 {
    timestamps: true,
}

);

mongoose.model('monitorang', Monitorang);