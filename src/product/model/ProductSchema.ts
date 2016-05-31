import mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    status: String,
    create_date: String
}, {collection: 'products', strict: "true"});

export = ProductSchema;
