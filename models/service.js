const mongoose = require("mongoose");
const schema = mongoose.Schema;

const serviceSchema = new schema({
    img:String,
    name:String,
    company:String,
    description:String,
    category:String,
    sub_categ:String,
    price:Number,
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;