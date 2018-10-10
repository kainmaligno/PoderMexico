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
router.post('/newStorage', (req,res,next) => {
  const {name,description} = req.body;
  //const store = req.user.id
  const newStorage = new Storage({
    name,
    description,
    store
  })
  newStorage
  .save()
  .then((newStorage) => {
    res.status(200).json({
      storage: newStorage
    })
  })
  .catch(error => {
    res.send('opss! algo ha salido mal', error)
  })
})

//


module.exports = router;