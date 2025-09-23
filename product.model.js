const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: String,
  rating: Number,
  icon: String,
  images: [String] // Um array de strings para guardar vários caminhos de imagem
});

module.exports = mongoose.model('Product', productSchema);