const epxress = require('express');
const mongoose = require('mongoose');
const Owner = require('../models/owner');
const app = epxress();
const router = epxress.Router();

router.get('/', (req, res) => {
    console.log(req.body)
    const username = req.body.username;
    const passwword = req.body.password;
    Owner.find({"user_name": username, "password": passwword}).exec((err, res_owner) => {
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
    })
});
module.exports = router;