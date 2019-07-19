const epxress = require('express');
const Owner = require('../models/owner');
const router = epxress.Router();

router.get('/', (req, res) => {

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


    });
});
module.exports = router;
