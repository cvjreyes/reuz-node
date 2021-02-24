const userModel = require('../users/users.model');
const jwt = require('jsonwebtoken');

const login = async(req, res) => {
    const { email, password } = req.body;
    const user = await userModel.getByEmail(email);
    const userInfo = {
      id: user._id,
      email: user.email,
    }
    if (user.password === password)
    {
      const token = jwt.sign({email: email, role: 'admin'}, process.env.TOKEN_SECRET);
      res.json({
        token: token,
        user: userInfo
      });
    } 
    else {
      res.status(401).send("Username or password incorrect");
    }
};

module.exports = {
  login
};
