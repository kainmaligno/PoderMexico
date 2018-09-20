const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema ({
 name: String,
 description: String,
 owner:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
 storage:{type:mongoose.Schema.Types.ObjectId, ref:"Storage"},
 location:{ type:{ type:String, }, coordinates:[Number] },
 address: String,
 imgPath: String,
 imgName: String,
}
,{
timestamps: {
   createdAt: "created_at",
   updatedAt: "updated_at"
}
});

storeSchema.index({ location: '2dsphere' });
const Store = mongoose.model('Store', storeSchema);
module.export = Store;