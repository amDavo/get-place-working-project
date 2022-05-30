const {Place} = require('../../db/models');

const getPlaceDetails = async (req, res) => {
    const {id} = req.params
    try {
        const response = await Place.findOne({where: {id: 1}})
        console.log(response, '==========')
        res.json(response)
    } catch (err) {
        console.log(err)
    }
}

module.exports = getPlaceDetails