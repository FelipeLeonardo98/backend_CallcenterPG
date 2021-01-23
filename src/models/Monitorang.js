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
     // automatic timestamps action
    timestamps: true,
}

);

mongoose.model('monitorang', Monitorang);