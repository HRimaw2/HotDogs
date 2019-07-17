var express = require('express'),
    router = express.Router(),
    owners = require('../models/owner');
    mongoose = require('mongoose');
const dogs = require('../models/dog');

router.get('/', function (req, res) {
    owners.find().exec( (err, res_owners) => {
        if (err) {
            res.status(404).send({
                message: "Error",
                data: []
            });
        } else {
            res.status(200).send({
                message: 'SUCCESS',
                data: res_owners
            })
        }
    })
});

router.get('/:id', function (req, res) {
    // res.send("dsfda");
    owners.find( {"_id": req.params.id} ).exec( (err, owner) => {
            if (err) {
                res.status(404).send({
                    message: "Error",
                    data: []
                });
            } else if (owner.length == 0) {
                res.status(404).send({
                    message: 'No Owner with that id found',
                    data: []
                });
            }
            else {
                res.status(200).send({
                    message: 'SUCCESS',
                    data: owner
                })
            }
        }
    )
});

router.put('/:id', function (req, res) {
    owners.findOneAndUpdate( {"_id": req.params.id}, req.body, (err, owner) => {
        if (err) {
            console.log(err)
            res.status(404).send({
                message: "Error",
                data: []
            });
        } else if (!owner) {
            console.log(req.body)
            res.status(404).send({
                message: 'No Owner with that id found',
                data: []
            });
        } else {
            res.status(201).send({
                message: 'SUCCESS',
                data: []
            })
        }
    })
});

router.delete('/:id', function (req, res) {
    owners.findOneAndDelete( {"_id": req.params.id}, (err, owner) => {
        if (err) {
            res.status(404).send({
                message: "Error",
                data: []
            });
        } else if (!owner) {
            res.status(404).send({
                message: 'No dishes with that email found',
                data: []
            });
        } else {
            res.status(200).send({
                message: 'SUCCESS',
                data: []
            })
        }
    })
});
module.exports = router;