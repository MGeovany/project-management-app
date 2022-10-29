const userModel = require("../Models/userModel");

function userRegister(req, res) {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  user.save((err) => {
    if (err) {
      res.status(500).send("error al registrar al usuario" + err);
    } else {
      res.status(200).send("usuario registrado");
    }
  });
}

function userAuthenticate(req, res) {
  const { username, password } = req.body;
  userModel.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).send("error al autenticar el usuario nombre");
    } else if (!user) {
      res.status(500).send("El usuario no existe nombre");
    } else {
      user.isCorrectPassword(password, (err, result) => {
        if (err) {
          res
            .status(500)
            .send("error al autenticar el usuario, contrasena incorrecta");
        } else if (result) {
          res.status(200).send("usuario autenticado correctamente");
        } else {
          res.status(500).send("usuario y/o contrasenia incorrecta");
        }
      });
    }
  });
}
module.exports = {
  userAuthenticate,
  userRegister,
};
