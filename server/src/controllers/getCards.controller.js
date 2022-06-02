const {Place, Rate, Type} = require("../../db/models");

const getCards = async (req, res) => {

    const {params} = req.params

    if (params === 'wifi') {
        try {
            const places = await Place.findAll({
            include: [{
                model:Rate,
                where: { type_id: 1 },
                include: [Type]
            }],
            order: [[Rate, 'rate_number', 'DESC']],
            raw:true,
        })
        res.json(places)
        } catch (e) {
            res.sendStatus(500)
        }
    }

    else if (params === 'comfort') {
        try{
            const comfortPlaces = await Place.findAll({
            include: [{
                model:Rate,
                where: { type_id: 2 },
                include: [Type]
            }],
            order: [[Rate, 'rate_number', 'DESC']],
            raw:true,
        })
        res.json(comfortPlaces)
        } catch (e) {
            res.sendStatus(500)
        }
    }

    else if(params === 'personal') {
        try {
            const places = await Place.findAll({
                include: [{
                    model: Rate,
                    where: {type_id: 3},
                    include: [Type]
                }],
                order: [[Rate, 'rate_number', 'DESC']],
                raw: true,
            })
            res.json(places)
        } catch (e) {
            res.sendStatus(500)
        }
    }

    else if(params === 'noise') {
        try {
            const places = await Place.findAll({
                include: [{
                    model: Rate,
                    where: {type_id: 4},
                    include: [Type]
                }],
                order: [[Rate, 'rate_number', 'DESC']],
                raw: true,
            })
            res.json(places)
        } catch (e) {
            res.sendStatus(500)
        }
    }

    else if(params === 'atmosphere') {
        try {
            const places = await Place.findAll({
                include: [{
                    model: Rate,
                    where: {type_id: 5},
                    include: [Type]
                }],
                order: [[Rate, 'rate_number', 'DESC']],
                raw: true,
            })
            res.json(places)
        }catch (e) {
            res.sendStatus(500)
        }
    }
    else if(params === 'Кафе' || params === 'Коворкинг' || params === 'Библиотека' || params === 'Опен Спейс' ) {
        try {
            const places = await Place.findAll({
                where: {category: params},
                include: [{
                    model: Rate,
                    include: [Type]
                }],
                order: [[Rate, 'rate_number', 'DESC']],
                raw: true,
            })
            res.json(places)
        }catch (e) {
            res.sendStatus(500)
        }
    }

    else if(params === 'free') {
        try {
            const places = await Place.findAll({
                where: {free: true},
                include: [{
                    model: Rate,
                    include: [Type]
                }],
            })
            const placesWithRating = []

            places.map((el) => {
                el.dataValues.Rating = ((el.Rates.reduce((acc, elem) => acc + elem.rate_number, 0)) / el.Rates.length)
                placesWithRating.push(el)
            })

            const sortPlaces = placesWithRating.sort((a, b) => b.dataValues.Rating - a.dataValues.Rating)

            res.json(sortPlaces)
        } catch (e) {
            res.sendStatus(500)
        }
    }

    else {
        try {
            const places = await Place.findAll({
                include: [{
                    model: Rate,
                    include: [Type]
                }],
            })
            const placesWithRating = []

            places.map((el) => {
                el.dataValues.Rating = ((el.Rates.reduce((acc, elem) => acc + elem.rate_number, 0)) / el.Rates.length)
                placesWithRating.push(el)
            })

            const sortPlaces = placesWithRating.sort((a, b) => b.dataValues.Rating - a.dataValues.Rating)

            res.json(sortPlaces)
        } catch (e) {
            res.sendStatus(500)
        }
    }
}

module.exports = { getCards }