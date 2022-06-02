const { response, raw} = require('express');
const { Favorites, Place, Rate, Type} = require('../../db/models');

const getAll = async (req, res) => {

  const user_id = req.session.user.id

    console.log('1iubspaidufbpsudbhvuhdsuivbaosdubvousnd;ovnz;sodnvoznsdv;onzsvdo')
  try {

    const response = await Favorites.findAll({where: {user_id}, include: [Place], raw:true});
    console.log(response)
    const favorites = response.map( (el) => {
      return {id:el['Place.id'], place_name:el['Place.place_name'], location:el['Place.location'], img:el['Place.img'], category:el['Place.category'], free:el['Place.free'], working_hours:el['Place.working_hours']}
    });

    return res.json({favorites})
    
  } catch (error) {
    res.sendStatus(500);
  }
};
// /favorit/:id
const addFavorite = async (req, res) => {
  const {id} = req.params
  try {
    const newFavorite = await Favorites.create({
      user_id: req.session.user.id,
      place_id:id
    });

    const place = await Place.findOne({
      where: {id: newFavorite.place_id},
      include: [{
        model: Rate,
        include: [Type]
      }],
    })

    place.Rating = place.Rates.reduce((acc, e) => acc + e.rate_number,0) / place.Rates.length

    // console.log(place, '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
    // const placesWithRating = []
    // places.map((el) => {
    //   el.dataValues.Rating = ((el.Rates.reduce((acc, elem) => acc + elem.rate_number, 0)) / el.Rates.length)
    //   placesWithRating.push(el)
    // })

    // const sortPlaces = placesWithRating.sort((a, b) => b.dataValues.Rating - a.dataValues.Rating)
    //
    res.json(place)
  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteFavorite = async (req, res) => {
  const {id} = req.params

  try {
    const delFavorite = await Favorites.destroy({ where: { place_id: req.params.id,
      user_id:req.session.user.id } });


    res.json(delFavorite);

  } catch (error) {
    res.sendStatus(500);
  }
};


module.exports = {
  getAll,
  addFavorite,
  deleteFavorite
}
