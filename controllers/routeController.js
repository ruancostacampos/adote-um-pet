const express = require('express');
const router = express.Router();

const petRoutes = require('../routes/petRoutes')
router.use('/pets', petRoutes)

const adoptionRoutes = require('../routes/adoptionRoutes')
router.use('/adoptions', adoptionRoutes)

module.exports = router