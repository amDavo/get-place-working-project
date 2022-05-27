const sha256 = require('sha256');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const { name, password, email, nickname } = req.body;

  if (name && password && email,nickname) {
    try {
      const newUser = await User.create({
        name,
        password: sha256(password),
        email,
        nickname
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        
      };

      return res.json({ id: newUser.id, name: newUser.name, nickname:newUser.nickname });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  console.log('AUTH--------------------', req.body);
  const { password, email } = req.body;

  if (password && email) {
    try {
      console.log('preRESPONSE-------------');
      const currentUser = await User.findOne({ where: { email } });
      console.log('RESPONSE-------------', currentUser);

      if (currentUser && currentUser.password === sha256(password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.name });
      }
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, name: user.name });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
