
const express = require('express')

//setting router
const router = express.Router()

//importing from controller
const {getAllFlights, createFlights, getFlight, updateFlight, deleteFlight} = require('../controller/flights')

//configuring router
router.route('/').get(getAllFlights).post(createFlights)
router.route('/:id').get(getFlight).patch(updateFlight).delete(deleteFlight)

//exporting router
module.exports = router;