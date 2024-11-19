const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservateSchema = new schema({
    id_user:String,
    name_user:String,
    name_service:String,
    img:String,
    date_reservation:String,
    phone:String, 
    category:String,
    price:Number,
    status:{type:String, default:"non confirmé"}
});

const Reservate = mongoose.model("Reservate", reservateSchema);

module.exports = Reservate;