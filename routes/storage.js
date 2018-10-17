const express = require('express');
const router = express.Router();
const Storage = require('../models/Storage');
const Store = require('../models/Stores');

//ALL PRODUCTS
router.get('/get_storage', async (req,res,next) => {
  try{
    let storage = await Storage.find().populate('belongStore');
    res.status(200).send(storage)
  }catch(error){
    res.status(400).send("no hay almacen", error)
  }
})

//NUEVO ALMACEN 
router.post('/newStorage', async (req,res,next) => {
  console.log('----------------------------------')
  try{
  const {name,description, belongStore} = req.body;
  const newStorage = new Storage({
    name,
    description,
    belongStore
  })
  newStorage.save()
  await res.status(200).json({newStorage})
  }catch(error){
    res.status(403).json('opss! algo ha salido mal', error)
  }
})

//


module.exports = router;