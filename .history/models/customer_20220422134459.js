const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = mongoose.model(
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
        type
    }
  })
);
