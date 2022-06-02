const {Rate, Types} = require("../../db/models");
const {Op} = require("sequelize");

const addRating = async (req, res) => {
    const {id} = req.session?.user
    try {
        const NewRating = await
            Rate.bulkCreate([
                {
                    place_id: req.body.place_id,
                    user_id: id,
                    type_id: 1,
                    rate_number: req.body.wifi
                },
                {
                    place_id: req.body.place_id,
                    user_id: id,
                    type_id: 2,
                    rate_number: req.body.staff
                },
                {
                    place_id: req.body.place_id,
                    user_id: id,
                    type_id: 3,
                    rate_number: req.body.comfort
                },
                {
                    place_id: req.body.place_id,
                    user_id: id,
                    type_id: 4,
                    rate_number: req.body.noise
                },
                {
                    place_id: req.body.place_id,
                    user_id: id,
                    type_id: 5,
                    rate_number: req.body.atmosphere
                }
            ])

        const wifi = await Rate.findAll({
            where: {
                [Op.and]: [
                    {type_id: 1},
                    {place_id: req.body.place_id}
                ]
            }
        })

        const staff = await Rate.findAll({
            where: {
                [Op.and]: [
                    {type_id: 2},
                    {place_id: req.body.place_id}
                ]
            }
        })

        const comfort = await Rate.findAll({
            where: {
                [Op.and]: [
                    {type_id: 3},
                    {place_id: req.body.place_id}
                ]
            }
        })

        const noise = await Rate.findAll({
            where: {
                [Op.and]: [
                    {type_id: 4},
                    {place_id: req.body.place_id}
                ]
            }
        })

        const atmosphere = await Rate.findAll({
            where: {
                [Op.and]: [
                    {type_id: 5},
                    {place_id: req.body.place_id}
                ]
            }
        })

        const wifiAverage = ((wifi.reduce((acc, b) => acc + b.rate_number, 0)) / wifi.length).toFixed(1)
        const staffAverage = ((staff.reduce((acc, b) => acc + b.rate_number, 0)) / staff.length).toFixed(1)
        const comfortAverage = ((comfort.reduce((acc, b) => acc + b.rate_number, 0)) / comfort.length).toFixed(1)
        const noiseAverage = ((noise.reduce((acc, b) => acc + b.rate_number, 0)) / noise.length).toFixed(1)
        const atmosphereAverage = ((atmosphere.reduce((acc, b) => acc + b.rate_number, 0)) / atmosphere.length).toFixed(1)

        const ratesOfPlace = [{
            wifi: wifiAverage,
            staff: staffAverage,
            comfort: comfortAverage,
            noise: noiseAverage,
            atmosphere: atmosphereAverage
        }]

        res.json(ratesOfPlace)

    } catch
        (err) {
        console.log(err)
    }
}


module.exports = {addRating}