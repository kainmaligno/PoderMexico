const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema ({
 name: String,
 storage:{type:mongoose.Schema.Types.ObjectId, ref:"Storage"},

})
storeSchema.index({ location: '2dsphere' });
const Store = mongoose.model('Store', storeSchema);
module.export = Store;