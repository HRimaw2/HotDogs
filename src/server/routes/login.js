const epxress = require('express');
const Owner = require('../models/owner');
const router = epxress.Router();

router.get('/', (req, res) => {
<<<<<<< HEAD
  console.log(req.query);
  const username = req.query.username;
  const password = req.query.password;
  Owner.find({
    'user_name': username,
    'password': password
  })
    .exec((err, res_owner) => {
      if (err) {
        res.status(400)
          .send({
            message: `Invalid Credentials`,
            data: []
          });
      } else {
        res.status(200)
          .send({
            message: `Logged in ${username}`,
            data: res_owner
          });
      }
=======

    // console.log(req.body)
    const username = req.query.username;
    const password = req.query.password;
    Owner.find({"user_name": username, "password": password}).exec((err, res_owner) => {
        if(err) {
            res.status(400).send({
                message: `Invalid Credentials`,
                data: []
            });
        } else {
            res.status(200).send({
                message: `Logged in ${username}`,
                data: res_owner
            });
        }


>>>>>>> 107b671a32bd7079dfb467a90aba8dc3f164699c
    });
});
module.exports = router;
