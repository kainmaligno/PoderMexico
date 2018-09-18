const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storageSchema = new Schema ({
 products:[{
    product:{type:mongoose.Schema.Types.ObjectId, ref:"Product"}
 }]
})

const Storage = mongoose.model('Storage', storageSchema);
module.exports = Storage;