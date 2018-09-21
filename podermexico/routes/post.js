const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/post', async (req,res,next) => {
  try{
    let post = await Post.find().populate('comentBy')
   res.status(200).send(post); 
  } 
  catch(error){
    res.status(400).send("No se puede llegar al post", error);
  }
})

router.post('/post', (req,res,next) => {
  
})

module.exports = router;