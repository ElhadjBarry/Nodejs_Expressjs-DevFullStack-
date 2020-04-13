const mongoose = require('mongoose');


const VilleSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  }
});
const Ville = mongoose.model('Ville', VilleSchema);

module.exports = Ville;
