const Flight = require('../modules/flights')

const getAllFlights = async (req, res) => {
    try {
        const getallFlights = await Flight.find({})
        res.status(200).json(getallFlights)
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const createFlights = async (req, res) => {
    try {
        const flight = await Flight.create(req.body)
        res.status(201).json({ flight })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const getFlight = async (req, res) => {
    try {
        const { id: flightID } = req.params
        const getflight = await Flight.findOne({ _id: flightID })
        if (!getflight) {
            return res.status(404).json({ msg: `No flight with id: ${flightID} found` })
        }
        res.status(200).json({ getflight })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const updateFlight = async (req, res) => {
    try {
        const { id: flightID } = req.params
        const updateflight = await Flight.findOneAndUpdate({ _id: flightID }, req.body, { new: true, runValidators: true })
        if (!updateflight) {
            return res.status(404).json({ msg: `No flight with id: ${flightID} found` })
        }
        res.status(200).json({ updateflight })

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const deleteFlight = async (req, res) => {
    try {
        const { id: flightID } = req.params;
        const deleteflight = await Flight.findOneAndDelete({ _id: flightID });
        if (!deleteflight) {
            return res.status(404).json({ msg: `No flight with id: ${flightID} found` })
        }
        res.status(200).json({ deleteflight })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllFlights,
    createFlights,
    getFlight,
    updateFlight,
    deleteFlight
}