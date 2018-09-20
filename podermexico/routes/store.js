const express  = require("express");
const router   = express.Router();
const Store    = require('../models/Stores');
const uploadCloud = require('../config/cloudinary');

//STORE
router.get('/store', async (req,res,next) => {
  try{
    let store = await Store.find().populate('User');
    res.status(200).send(store)
  }catch(error){
    res.status(400).send("Hay algun error")
  }
});

//NEW STORE
router.post('/new_store',(req,res,next) => {});


//ONE STORE
router.get('/store/:id', async (req,res,next) => {
  try{
    let id = req.params.id;
    let storeid = await Store.findById({ _id : id }).populate('storage');
    res.status(200).send(storeid)
    }
    catch(error){
      res.status(400).send('algo salio mal o no hay producto')  
    }
});
//UPDATE STORE
router.put('/update_store/:id', async (req,res,next) => {
  let update = await Store.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, store)  {
    if (err) return next(err);
    res.status(200).send('Product udpated.',update);
});
 
});
//REMOVE STORE
router.delete('/remove_store', async (req,res,next) => {
  
  let erase =  await Store.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.status(200).send("Deleted successfully!",erase);
  });
});

module.exports = router;