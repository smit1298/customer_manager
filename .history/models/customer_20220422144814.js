const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const customer = mongoose.model(
  "Customer",
  Schema({
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        max: 88,
        min: 18
    },
    isActive: {
        type: Boolean
    }
  })
);

module.exports = Customer