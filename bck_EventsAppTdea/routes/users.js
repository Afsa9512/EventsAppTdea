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

/* POST users. */
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

/* PUT users. */
router.put('/:idUser', function (req, res, next) {

  // Actualizar usuario
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

let idUser = req.params.idUser;

UserModel.findByIdAndUpdate(idUser, {id: newUser.id, name: newUser.name, surname: newUser.surname, numberDocument: newUser.numberDocument, 
  email: newUser.email, mobileNumber: newUser.mobileNumber, password: newUser.password, city: newUser.city, active: newUser.active}, 
  (err, newUser) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, message: "Usuario Actualizado", newUser: newUser });
    }
  });
});

module.exports = router;