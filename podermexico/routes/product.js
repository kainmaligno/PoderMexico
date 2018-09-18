const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/product', async (req, res, next) => {
 let product = await Product.find().populate('createdBy')
 res.status(200).json(res.product)
})


router.post('/product', (req, res, next) => {
const imgPath = req.file.url;
const imgName = req.file.originalname;
const { name, price, category,qty, } = req.body;
const createdBy = req.user.id;

const newProduct = new Product({
createdBy,
name,
price,
category,
qty,
imgName,
imgPath
});
newProduct.save()
.then(() =>{
  res.status(200).json(res.newProduct) 
})
.catch( error =>{
  console.log(error);
})
})