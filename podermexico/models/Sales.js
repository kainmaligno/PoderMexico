const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
client: {type: mongoose.Schema.Types.ObjectId, ref:"Client"},
products: [{
  product:{type: mongoose.Schema.Types.ObjectId, ref:"Product"},
  cantidad: Number
}],
store:{type: mongoose.Schema.Types.ObjectId, ref:"Store"}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Sales = mongoose.model('Sales', saleSchema);
module.exports = Sales;