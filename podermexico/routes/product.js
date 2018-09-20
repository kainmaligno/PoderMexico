const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const uploadCloud = require("../config/cloudinary");

//PRODUCT
router.get("/product", async (req, res, next) => {
 try{
  let prod = await Product.find().populate('createdBy');
  res.status(200).send(prod)
 }
 catch(error){
  res.send("No se puede llegar a producto")
 }
});

//NEW PRODUCT
router.post("/product", uploadCloud.single("photo"), (req, res, next) => {
  //const imgPath = req.file.url;
  //const imgName = req.file.originalname;
  
  const { name, price, category, qty, imgName, imgPath } = req.body;
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
  newProduct
    .save()
    .then(() => {
      res.status(200).json(res.newProduct);
    })
    .catch(error => {
      res.send("Opss! algo a salido mal")
      console.log(error);
    });
});

//FIND BY ID PRODUCT
router.get("/product/:id", async (req, res, next) => {
  try{
  let id = req.params.id;
  let productid = await Product.findById({ _id : id }).populate('createdBy');
  res.status(200).send(productid)
  }
  catch(error){
    res.status(400).send('algo salio mal o no hay producto')  
  }
});

//UPDATE PRODUCT

router.put("/update_product/:id", async (req, res, next) => {
  let update = await Product.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, product)  {
    if (err) return next(err);
    res.status(200).send('Product udpated.');
});
})

//DELETE PRODUCT
router.delete("/remove_product/:id", async (req, res, next) => {
  
  let erase =  await Product.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.status(200).send("Deleted successfully!");
  });
});

module.exports = router;
