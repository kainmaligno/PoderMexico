require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const favicon     =require('express-favicon');
const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash      = require("connect-flash");
const cors       = require('cors');


mongoose
  .connect( process.env.DB || 'mongodb://localhost/podermexico', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
app.use(cors({
  credentials:true,
  origin: true
}));
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
      
app.use(favicon(__dirname+'front-end/build/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'front-end/build')));

// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))

app.use(flash());
require('./passport')(app);
    

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const product = require('./routes/product');
app.use('/',product);


const foodStand = require('./routes/foodStand');
app.use('/', foodStand);

const store = require('./routes/store');
app.use('/', store);

const storage = require('./routes/storage');
app.use('/', storage);

const post = require('./routes/post');
app.use('/',post);

// const PORT = process.env.PORT || 3000
// app.listen(PORT, console.log('listen on ${PORT}'))
module.exports = app;
