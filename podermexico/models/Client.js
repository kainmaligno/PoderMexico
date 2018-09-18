const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const clientSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
