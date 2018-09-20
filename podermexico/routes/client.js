const express = require('express');
const router  = express.Router();
const Client  = require('../models/Client');
const uploadCloud = require("../config/cloudinary");
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


//ESTA LOGEADO
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()){
    res.status(200).json(req.client);
    return;
  }
})
//SI ESTA LOGEADO MANDA PRIVATE
router.get('/private_client', (req,res,next) => {
  if(req.isAuthenticated()){
    res.json({message: 'this is a Private Message'})
    return;
  }
  res.status(403).json({message:'Unauthorized'});
});


//LOGIN
router.get("/login_client", (req, res, next) => {
  res.render("auth/login_client", { "message": req.flash("error") });
});

router.post('/login_client', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});




router.get("/signup_client", (req, res, next) => {
  res.render("auth/signup_client");
});

//SIGNUP
router.post("/signup_client", uploadCloud.single('photo'), (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const {imgName, imgPath, longitude, latitude} = req.body; //cambiar a 
  //const imgPath = req.file.url;
  //const imgName = req.file.originalname;
  let location = { type: 'Point', coordinates: [longitude, latitude] };
  if (username === "" || password === "") {
    res.render("auth/signup_client", { message: "Indicate username and password" });
    return;
  }

  Client.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newClient = new Client({
      username,
      password: hashPass,
      location,
      imgName,
      imgPath
    });

    newClient.save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("auth/signup_client", { message: "Something went wrong" });
    })
  });
});


//LOGOUT

router.get("/logout_client", (req, res) => {
  req.logout();
  res.status(200).json({message:'You are out!'})
  //res.redirect("/");
});

module.exports = router;
