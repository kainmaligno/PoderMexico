const express = require('express');
const router = express.Router();
const Storage = require('../models/Storage');

//ALL PRODUCTS
router.get('/storage', async (req,res,next) => {
  try{
    let storage = await Storage.find().populate('Store');
    res.status(200).send(storage)
  }catch(error){
    res.status(400).send("no hay almacen", error)
  }
})

//NUEVO ALMACEN 
router.post('/storage', (req,res,next) => {
  const store = req.user.id
  const product = req.body

  const newStorage = new Storage({
    store,
    product
  })
  newStorage
  .save()
  .then( () => {
    res.status(200).send(newStorage)
  })
  .catch(error => {
    res.send('opss! algo ha salido mal', error)
  })
})

//


module.exports = router;