const express = require("express");
const router = express.Router();
const Store = require('../models/Stores');
const uploadCloud = require('../config/cloudinary');
const User = require('../models/User');

//STORE
router.get('/get_stores', async (req, res, next) => {
  //.sort({ date:-1 })
  console.log('------------------estas en getStores')
  try {
    let store = await Store.find().populate('owner').sort( {createdAt:-1} ) 
    res.status(200).json(store)
  } catch (error) {
    res.status(400).json({error:'hay un error'})
  }
});

//NEW STORE
router.post('/new_store', uploadCloud.single('photo'),(req, res, next) => {
  const avatar = req.file.url;
  const { name, description, latitude, longitude, address, warehouse } = req.body;
  const owner = req.user.id;
  
  //let location = { type: 'Point', coordinates: [longitude, latitude] };
  const newStore = new Store({
    owner,
    name,
    description,
    address,
    avatar,
    
  })
  newStore
    .save()
    
    .then((nuevaStore) => {
      res.status(200).json({
       store_name: nuevaStore.name,
       store_desc: nuevaStore.description,
       store_avatar: nuevaStore.avatar,
       store_owner:nuevaStore.owner
      })
    })
    //User.findByIdAndUpdate(req.user.id).push({stores:store._id})
    //User.findByIdAndUpdate(req.user._id, { $push: { stores: nuevaStore._id } })
    .catch(error => {
      res.status(400).json({error:"algo salio mal al agregar tienda"})
    })

});


//ONE STORE
router.get('/store/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    let oneStore = await Store.findById(id).populate('storage').populate('owner');
    res.status(200).json(oneStore)
    console.log(oneStore)
  }
  catch (error) {
    res.status(404).json({error:'algo salio mal o no hay producto'})
  }
});

//UPDATE STORE
router.put('/update_store/:id', async (req, res, next) => {
  try{
    let update = await Store.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, store) {
      if (err) return next(err);
      res.status(200).json({update});
    });
  }catch(error){
        res.status(403).json(error)
  }
});
//REMOVE STORE
router.delete('/remove_store', async (req, res, next) => {
  let erase = await Store.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.status(200).send("Deleted successfully!", erase);
  });
});

module.exports = router;