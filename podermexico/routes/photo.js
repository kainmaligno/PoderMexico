const Photo = require('../models/Photo')
const uploadCloud = require('../config/cloudinary')
const express  = require("express");
const router   = express.Router();
const User = require("../models/User");

  router.post('/photo/add', uploadCloud.single('photo'), (req, res, next) => {
    const imgPath = req.file.url;
    const imgName = req.file.originalname;
   
    const newPhoto = new Photo({imgPath,imgName})
    newPhoto.save()
    .then(e => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
    .catch(error => {
      console.log(error)
    })
  })
module.exports = router;