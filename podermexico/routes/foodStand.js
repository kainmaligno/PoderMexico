const express = require("express");
const router = express.Router();
const FoodStand = require("../models/FoodStand");
const uploadCloud = require("../config/cloudinary");

//revisa la autenticacion del user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticaded()) return next();
  return res.redirect("/login?next=/profile");
}

//nuevo lugar (vista)

router.get("/newFoodStand", (req, res) => {
  res.render("ironplace/newFoodStand", { user: req.user });
}); //end render

//nuevo lugar (post)
router.post("/newFoodStand", uploadCloud.single('photo'), (req, res, next) => {

  //const imgPath = req.file.url;
  //const imgName = req.file.originalname;
  const { name, description, category, address, longitude, latitude, imgName, imgPath } = req.body;
  let postedBy = req.user.id;
  let location = { type: 'Point', coordinates: [longitude, latitude] };


  const newFoodStand = new FoodStand({
    postedBy: postedBy,
    name: name,
    description,
    category,
    location,
    address,
    imgName,
    imgPath
  });

  newFoodStand.save()
    .then(() => {
      res.redirect('/')
    })
    .catch(e => {
      console.log(e)
    })

});
//end post

router.get("/foodStand",  async (req, res) => {
   let food = await FoodStand.find().populate('postedBy')
    //.then(food => {
      
      res.render("ironplace/foodStand", {food, user: req.user});
      //console.log(food)
    //})
    //.catch(error => {
      //console.log(error);
    //});
}); //end render food


router.get('/foodstand/:id', async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  let post = await FoodStand.findById({_id: req.params.id} )
  .populate("postedBy")
  //.then( post => {
    res.render('ironplace/foodDetails', {post, user})
      //console.log(post);
  //})
      });
      
router.get('/removeStand/:id', (req, res) => {
  
});

module.exports = router;