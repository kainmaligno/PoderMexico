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

router.get("/get_foods", async (req, res) => {
  console.log("------------------estas en getFoods");
  try {
    let store = await FoodStand.find()
      .populate("postedBy")
      .sort({ date: -1 });
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json(error);
  }
}); //end render

//nuevo lugar (post)
router.post("/newFoodStand", uploadCloud.single("photo"), (req, res, next) => {
  const img = req.file.url;
  const { name, description, select, address, longitude, latitude } = req.body;
  let postedBy = req.user.id;
  //let location = { type: 'Point', coordinates: [longitude, latitude] };
  const newFoodStand = new FoodStand({
    postedBy: postedBy,
    name,
    description,
    select,
    img
  });

  newFoodStand
    .save()
    .then(nuevFood => {
      res.status(200).json({
        nuevFood
      });
    })
    .catch(e => {
      console.log(e);
    });
});
//end post


router.get("/foodstand/:id", async (req, res,next) => {
  try {
    const id = req.params.id;
    let place = await FoodStand.findById(id).populate("postedBy");
    res.status(200).json(place)
  } catch (error){
    res.status(404).json({error:'no hay conexion'})
  }
});

router.get("/removeStand/:id", (req, res) => {});

module.exports = router;
