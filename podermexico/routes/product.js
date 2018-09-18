const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const uploadCloud = require("../config/cloudinary");


//PRODUCT
router.get('/product', async (req, res, next) => {
 await Product.find().populate('createdBy')
 res.status(200).json()
})

//NEW PRODUCT
router.post('/product', uploadCloud.single('photo'), (req, res, next) => {
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

//FIND BY ID PRODUCT
router.get('/product/:id', async (req, res, next) => {
  //const product = req.product;
  const id = req.params.id;
  let productid = await Product.findById({_id: id})
  .populate('createdBy');
  res.send(productid)
})

//DELETE PRODUCT
router.get('/removeProduct/:id', async (req,res,next)=> {
  Product.findByIdAndRemove(req.params.id, (err)=> {
    if (err) return next(err);
    res.send('Deleted successfully!');
})
})

module.exports = router;