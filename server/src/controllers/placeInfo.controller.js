const {Place, Rate} = require('../../db/models');

const getPlaceDetails = async (req, res) => {
    const {id} = req.params
    const user = req.session?.user
    try {
        const response = await Place.findOne({
                where: {id},
                includes: {
                    model: Rate,
                    where: {place_id: id}
                }
            }
        )
        res.json(response)
    } catch
        (err) {
        console.log(err)
    }
}

module.exports = getPlaceDetails