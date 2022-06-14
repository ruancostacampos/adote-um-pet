const router = require('express').Router()
const Adoption = require('../models/Adoption')
const Pet = require('../models/Pet')


// Get all adoptions
router.get('/', async (req, res) =>{
    
    try{
      const adoptions = await Adoption.find().populate({path: 'pet', select: 'name'})
      res.status(200).json(adoptions)
    }catch(err){
        res.status(500).json({error: err})
    }

})

//Get especific adoption
router.get('/:id', async (req, res) => {
   // const adoption = Adoption.findOne({})
})

// Add adoption
router.post('/', async (req, res) => {
    
    const {email, monthlyAmount, petID} = req.body
    
    try{
    const adoptedPet = await Pet.findOne({_id: petID})
    
    if(!adoptedPet){
        res.status(500).json({error: 'O pet referenciado não foi encontrado.'})
        return
    }

    }catch(err){
      res.status(500).json({error: err})
    }
    
    const newAdoption = {email, monthlyAmount, pet: petID}

    try{
      const doAdoption = await Adoption.create(newAdoption)
      res.status(201).json(doAdoption)
    }catch(err){
      res.status(500).json({error: err})
    }

})

module.exports = router