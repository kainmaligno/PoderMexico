const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const clientSchema = new Schema({
  username: String,
  password: String,
  imgName:String,
  imgPath: String,
  location:{ type:{ type:String, }, coordinates:[Number] },
  address:String,
    
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
 clientSchema.index({ location: '2dsphere' });
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
