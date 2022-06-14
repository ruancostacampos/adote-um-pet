const router = require('express').Router()
const Pet = require('../models/Pet')
const auth = require('../middlewares/Auth')

// Create new pet 
router.post('/', auth, async (req, res) => {
  
    const { name, description, image} = req.body
  
    if(!name || !description || !image){
      res.status(422).json({error: 'Todos os campos são obrigatórios.'})
    }
  
    const newPet = {name, description, image}
      try{
        await Pet.create(newPet)
        res.status(201).json({message: 'Pet adicionado com sucesso.'})
      }catch(err){
        res.status(500).json({error: err})
    }
  
})

// List pets
router.get('/', async (req, res) => {
    
    try{
        const pets = await Pet.find()
        res.status(200).json(pets)
    }catch(err){
        res.status(500).json({error: err})
    }

})

//Get pet
router.get('/:id', async (req, res) =>{
    
    id = req.params.id
    
    try{
        const pet = await Pet.findOne({_id: id})
        res.status(200).json(pet)
    }catch(err){
        res.status(500).json({error: err})
    }

})



module.exports = router