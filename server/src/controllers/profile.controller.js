const {Favorites, User} = require("../../db/models");
const getInfoProfile = async (req, res) => {
    const {id} = req.body
    console.log(req.body)
    try {
        const response = await Favorites.findAll({where: {user_id: id}, raw: true})
        const user = await User.findOne({where: {id}})
        return res.json({favorites: response, userInfo: user})
    } catch (e) {
        res.sendStatus(500)
    }
}
module.exports = {
    getInfoProfile,
}