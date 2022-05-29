const {Place, Rate, Type} = require("../../db/models");
const router = require('express').Router()

router.get('/:params', async (req, res) => {

    const params = req.params


    const places = [{
        id: 1,
        place_name: 'test 1',
        location: 'test 1',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
        category: 'coffeeshop',
        free: true,
        body: 'test1',
        working_hours: '9-20',
        user_id: 1,
        place_id: 1,
        type_id: 1,
        rating_wifi: 5,
        rating_comf: 4,
        rating_pers: 4,
        rating_noise: 5,
        rating_atmo: 5,

    },
        {
            id: 2,
            place_name: 'test 1',
            location: 'test 1',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
            category: 'coffeeshop',
            free: true,
            body: 'test1',
            working_hours: '9-20',
            user_id: 1,
            place_id: 1,
            type_id: 1,
            rating_wifi: 2,
            rating_comf: 1,
            rating_pers: 2,
            rating_noise: 3,
            rating_atmo: 3,

        },
        {
            place_name: 'test 1',
            location: 'test 1',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
            category: 'coffeeshop',
            free: true,
            body: 'test1',
            working_hours: '9-20',
            user_id: 1,
            place_id: 1,
            type_id: 1,
            rating_wifi: 3,
            rating_comf: 2,
            rating_pers: 2,
            rating_noise: 1,
            rating_atmo: 4,

        }];
    console.log(params, '----------------')

    if (params.params === 'wifi') {
        console.log(req.params, '========')
        const place = await Place.findAll({
            include: [{
                model: Rate,
                include: [Type]
            }
            ]
        })
        console.log(place)
        place.map(el => console.log(el))
        res.json(place)
    } else {
        console.log(2222)
        res.json(places)
    }
});
module.exports = router