const express = require("express");
const router = express.Router();
const Store = require('../models/Stores');
const uploadCloud = require('../config/cloudinary');


//STORE
router.get('/store', async (req, res, next) => {
  try {
    let store = await Store.find().populate('User');
    res.status(200).send(store)
  } catch (error) {
    res.status(400).send("Hay algun error")
  }
});

//NEW STORE
router.post('/new_store', uploadCloud.single('photo'),(req, res, next) => {
  const avatar = req.file.url;
  const { name, description, latitude, longitude, address } = req.body;
  const owner = req.user.id;
  //let location = { type: 'Point', coordinates: [longitude, latitude] };
  const newStore = new Store({
    owner,
    name,
    description,
    address,
    avatar
  })
  newStore
    .save(err, nuevaStore)
    .then((nuevaStore) => {
      res.status(200).json({
       id: nuevaStore.id})
    })
    .catch(error => {
      res.status(400).send(error,"algo salio mal al agregar tienda")
    })

});


//ONE STORE
router.get('/store/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    let storeid = await Store.findById({ _id: id }).populate('storage');
    res.status(200).send(storeid)
  }
  catch (error) {
    res.status(400).send('algo salio mal o no hay producto')
  }
});

//UPDATE STORE
router.put('/update_store/:id', async (req, res, next) => {
  let update = await Store.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, store) {
    if (err) return next(err);
    res.status(200).send('Product udpated.', update);
  });

});
//REMOVE STORE
router.delete('/remove_store', async (req, res, next) => {

  let erase = await Store.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.status(200).send("Deleted successfully!", erase);
  });
});

module.exports = router;