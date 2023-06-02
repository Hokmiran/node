// const { default: mongoose } = require("mongoose");
// const { Schema } = mongoose

// const express = require('express');
// const { urlencoded } = require("express");
// const app = express();

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// mongoose.connect('mongodb+srv://hokumranss:GEmOMnJgOQgI6z6S@cluster0.omqiyvd.mongodb.net/hokumranss');


// //table - collections

// //product adında bir collection design ettim
// let productSchema = new Schema({
//     name: String,
//     unitPrice: Number,
//     unitsInStock: Number,
//     time: { type: Date, default: Date.now }

// })

// //user adında bir collection design ettim
// let userSchema = new Schema({
//     name: String,
//     surname: String,
//     email: String
// })

// //bu dizaynı mongoya haber verdim.
// let Product = mongoose.model('Product', productSchema)
// let User = mongoose.model('User', userSchema)



// app.get('/api/products', (req, res) => {

//     Product.find()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })

// })

// app.post('/api/products', (req, res) => {

//     let product = new Product({
//         name: req.body.name,
//         unitPrice: req.body.unitPrice,
//         unitsInStock: req.body.unitsInStock
//     })

//     product.save();

//     res.json(product);

// })


// app.get('/api/products/:id', (req, res) => {

//     let id = req.params.id;

//     Product.findById(id)
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json(err);
//         })

// })


// app.delete('/api/products/:id', (req, res) => {

//     let id = req.params.id;

//     Product.findByIdAndRemove(id)
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })

// })

// app.put('/api/products/:id', (req, res) => {
//     const product = new Product({
//         _id: req.params.id,
//         name: req.body.name,
//         unitPrice: req.body.unitPrice,
//         unitsInStock: req.body.unitsInStock
//     });
//     Product.updateOne({ _id: req.params.id }, product).then(
//         () => {
//             res.status(201).json({
//                 message: 'Product updated successfully!'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// });
// app.listen(3000);