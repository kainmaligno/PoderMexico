const mongoose = require ('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema ({
  name: String,
  price: Number,
  category: [{
    type: String,
    enum:['Leche y derivados', 
          'Carnes, pescados y huevos',
          'Patatas legumbres', 
          'frutos secos', 
          'Verduras y Hortalizas',
          'Cereales y derivados', 
          'azúcar y dulces',
          'Grasas, aceite y mantequilla'],
    default:'ninguno'
  }],
  qty: Number,
  imgPath:        String,
  imgName:        String,
  createdBy: {type:mongoose.Schema.Types.ObjectId, ref:"User"}
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product

//https://gastronomiaycia.republica.com/2009/01/17/grupos-de-alimentos/