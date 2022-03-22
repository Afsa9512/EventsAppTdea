var express = require('express');
var router = express.Router();

const UserModel = require('../models/entitys/user.entity');

/* GET users listing. */
router.get('/', function (req, res, next) {
  UserModel.find(function(err, response){
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, list: response });
    }
  });
});

/* POST users listing. */
router.post('/', function (req, res, next) {

  // Nuevo usuario
  let newUser = new UserModel({
    id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    numberDocument: req.body.numberDocument,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    password: req.body.password,
    city: req.body.city,
    active: req.body.active    
  });

  newUser.save((err, newUser) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, message: "Usuario Creado", newUser: newUser });
    }
  });
});

module.exports = router;
