const { User } = require('../../db/models');

const getUser = async (req, res) => {
  const { id } = req.params;
  // TODO сделать защиту чтобы зарегистрированный пользователь не мог смотреть других пользователей
  try {
    const currentUser = await User.findByPk(id);
    setTimeout(() => {
      res.json(currentUser);
    }, 2e3);
  } catch (error) {
    res.sendStatus(500);
  }
};


module.exports = {
  getUser,
}
