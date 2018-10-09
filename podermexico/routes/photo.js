const Photo = require('../models/Photo');
const PhotoFood = require('../models/PhotoFood');
const uploadCloud = require('../config/cloudinary');
const express  = require("express");
const router   = express.Router();

  router.post('/photo/add/:id', uploadCloud.single('photo'), (req, res, next) => {
    const imgPath = req.file.url;
    const imgName = req.file.originalname;
    const postedBy = req.params.id
    
    const newPhoto = new Photo({imgPath,imgName,postedBy})
    newPhoto.save()
    .then(e => {
      console.log('respuesta de E'+ e)
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
    .catch(error => {

      console.log('error de foto',error)
    })
  })

  router.post('/photo/food/:id', uploadCloud.single('photo'), (req, res, next) => {
    const imgPath = req.file.url;
    const imgName = req.file.originalname;
    const postedBy = req.params.id
    
    const newPhoto = new PhotoFood({imgPath,imgName,postedBy})
    newPhoto.save()
    .then(e => {
      console.log('respuesta de E'+ e)
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
    .catch(error => {

      console.log('error de foto',error)
    })
  })
module.exports = router;