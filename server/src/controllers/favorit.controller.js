const { response } = require('express');
const { Favorites } = require('../../db/models');

const getAll = async (req, res) => {

  const user_id = req.session.user.id

  
  try {

    const response = await Favorites.findAll({where: {user_id}, raw:true});
    console.log("favorites ===============", response);
    return res.json({favorites:response})
    
  } catch (error) {
    res.sendStatus(500);
  }
};

const addFavorit = async (req, res) => {
  
  try {
    
  } catch (error) {
    res.sendStatus(500);
  }
};


module.exports = {
  getAll,
  addFavorit
}
