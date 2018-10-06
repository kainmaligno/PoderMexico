const express  = require("express");
const passport = require('passport');
const router   = express.Router();
const User     = require("../models/User");
const uploadCloud = require('../config/cloudinary');
// Bcrypt to encrypt passwords
const bcrypt     = require("bcrypt");
const bcryptSalt = 10;
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
 require('../config/passport');


 const checkRoles = (role) => {
  return function(req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    } else {
      res.redirect('/');
    }
  }
}

const checkCostumer = checkRoles('COSTUMER');
const checkAdmin  = checkRoles('ADMIN');


router.get('/private', ensureLoggedIn(),(req,res,next) => {
  if(req.isAuthenticated()){
    let user = req.user
    res.render({user})
    return;
  }
  res.status(403).json({message:'Unauthorized'});
});

//CHECK ROLES ON HOME
router.get('/', ensureLoggedIn(), async (req,res,next) =>{
  if(req.user.role === 'ADMIN'){
    try{
      let user = await User.find()
      console.log(user)
      res.status(200).render(users)
    }catch(error){
   res.status(400).render(error)
    } 
  }
  if(req.user.role === 'COSTUMER'){
    try{
      let user = await User.find()
      console.log(user)
      res.status(200).render(user)
    }catch(error){
        res.status(400).render(error)
    }
  }
})
//LOGIN
router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
  console.log(res);
});

router.post('/login', (req, res, next) => {
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




router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

//SIGNUP
router.post("/signup", uploadCloud.single('photo'), (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const role     = req.body.role;
  //const { longitude, latitude} = req.body; //cambiar a 
 // let location = { type: 'Point', coordinates: [longitude, latitude] };
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }
  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
     res.status(200).send("auth/signup", { message: "The username already exists" });
      return;
    }
    
    const salt = bcrypt.genSaltSync(bcryptSalt);
    
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      role
    });

    newUser.save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err)
      res.send("auth/signup", err,{ message: "Something went wrong" });
    })
  });
});

//auth with google+

router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ]
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/private');
});

//LOGOUT

router.get("/logout", ensureLoggedOut(), (req, res) => {
  req.logout();
  res.status(200).json({message:'You are out!'})
 // res.redirect("/");
});

module.exports = router;
