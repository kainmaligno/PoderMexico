const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  comentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client' //referenciamos al modelo user al autor de cada comentario
},
body: String,
date: Date,
meta: {
    votes: Number,
    favs:  Number
},

}
,{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

const Post = moongose.Schema('Post', postSchema);
 module.exports = Post