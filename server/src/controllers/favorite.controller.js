const { response } = require('express');
const { Favorites } = require('../../db/models');

const getAll = async (req, res) => {

  const user_id = req.session.user

  
  try {

    const response = await Favorites.findAll({where: {user_id}, raw:true});
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
    res.json(newFavorite);

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
