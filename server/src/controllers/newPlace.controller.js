const {Place} = require('../../db/models');


const createNewPlace = async (req, res) => {
    const {place_name, location, category, free, working_hoursFrom, working_hoursTo, description} = req.body
    const working_hours = 'с ' + working_hoursFrom + ' - до ' + working_hoursTo
    try {
        const newCard = await Place.create({
                place_name,
                location,
                img: req.file?.filename,
                category,
                free,
                working_hours,
                description
            }
        )
        res.json(newCard)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500);
    }
}

module.exports = createNewPlace