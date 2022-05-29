const { response } = require('express');
const { Favorites, Place, User } = require('../../db/models');


const getAll = async (req, res) => {

  const user_id = req.session.user.id

  
  try {

    const response = await Favorites.findAll({where: {user_id}, raw:true, include:Place});
    console.log("favorites ===============", response);
    const favorites = response.map( (el) => {
      return {id:el['Place.id'], place_name:el['Place.place_name'], location:el['Place.location'], img:el['Place.img'], category:el['Place.category'], free:el['Place.free'], working_hours:el['Place.working_hours']}
    });
    return res.json({favorites})
    
  } catch (error) {
    res.sendStatus(500);
  }
};
// /favorit/:id
const addFavorit = async (req, res) => {
  const {id} =req.params
  console.log({id});
  
  try {
    const newFavorit = await Favorites.create({
      user_id:req.session.user.id,
      place_id:id
    });
    res.json(newFavorit);

  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteFavorit = async (req, res) => {
  const {id} =req.params
  console.log({id});
  
  try {
    const delFavorit = await Favorites.destroy({ where: { place_id: req.params.id,
      user_id:req.session.user.id } });
    
    
    res.json(delFavorit);
    
  } catch (error) {
    res.sendStatus(500);
  }
};


module.exports = {
  getAll,
  addFavorit,
  deleteFavorit
}
