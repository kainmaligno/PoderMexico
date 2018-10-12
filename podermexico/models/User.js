const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  stores:[{type:mongoose.Schema.Types.ObjectId,ref:'Store'}],
  role: {
    type: String,
    enum : ['COSTUMER','ADMIN'],
    default : 'COSTUMER'
  },
   avatar: { type: String, default: 'https://res.cloudinary.com/drakarzamael/image/upload/v1538631500/user.png' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
// location:{ type:{ type:String, }, coordinates:[Number] },
  //   address:String,
   //avatar: {type: mongoose.Schema.Types.ObjectId, ref:'Photo'}