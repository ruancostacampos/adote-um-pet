const mongoose = require('mongoose')
const Pet = require('./Pet')

const adoptionSchema = new mongoose.Schema({
  
  email: 
  {
    type: String,
    lowercase: true,
    required: 'O email é obrigatório!',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Insira um email válido.']
  },
  
  monthlyAmount: 
  {
    type: Number,
    required: 'O valor mensal é obrigatório.',
    min: 1,
    max: 10000,
  },

  pet: 
  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: Pet
  }

})

module.exports = Adoption = mongoose.model("Adoption", adoptionSchema)