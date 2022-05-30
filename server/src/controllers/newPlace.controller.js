const {Place} = require('../../db/models');


const createNewPlace = async (req, res) => {
    const {place_name, location, category, free, working_hoursFrom, working_hoursTo} = req.body
    const working_hours = working_hoursFrom + ' - ' + working_hoursTo
    try {
        const newCard = await Place.create({
                place_name,
                location,
                img: req.file?.filename,
                category,
                free,
                working_hours,
            }
        )
        res.json(newCard)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500);
    }
}

module.exports = createNewPlace