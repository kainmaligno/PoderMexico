const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storageSchema = new Schema ({
 name:String,
 description: String,
 belongStore: {type:mongoose.Schema.Types.ObjectId,ref:'Store',childPath:'storage'},
 products:[{product:{type:mongoose.Schema.Types.ObjectId, ref:"Product"}}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Storage = mongoose.model('Storage', storageSchema);
module.exports = Storage;