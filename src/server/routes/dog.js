const express = require('express');
const mongoose = require('mongoose');
const async = require("async");
const dogs = require('../models/dog');
const schedule = require('../models/schedule');
const location = require('../models/location');
const owner = require('../models/owner');

const router = express.Router();


function getQueryParams(req) {
    let { breed } = '';
    if (breed === undefined) {
        breed = {};
    } else {
        breed = JSON.parse(req.query.breed);
    }

    let { size } = '';
    if (size === undefined) {
        size = {};
    } else {
        size = JSON.parse(req.query.size);
    }

    let { colors } = '';
    if (colors === undefined) {
        colors = {};
    } else {
        colors = JSON.parse(req.query.colors);
    }
    return [breed, size, colors];
}


router.get('/', (req, res) => {
    console.log(req.query);
    const [breed, size, colors] = getQueryParams(req);

    if (breed) {
        dogs.find(breed).exec((err, res_dog) => {
            if (err) {
                res.status(404).send({
                    message: `Error getting dogs with breed ${breed}`,
                    data: []
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    data: res_dog
                });
            }
        });
    } else if (size) {
        dogs.find(size).exec((err, res_dog) => {
            if (err) {
                res.status(404).send({
                    message: `Error getting dogs of size ${size}`,
                    data: []
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    data: res_dog
                });
            }
        });
    } else if (colors) {
        dogs.find(colors).exec((err, res_dog) => {
            if (err) {
                res.status(404).send({
                    message: `Error getting dogs of colors ${JSON.stringify(colors)}`,
                    data: []
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    data: res_dog
                });
            }
        });
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params.id;

    dogs.find(id).exec((err, res_dog) => {
        if (err) {
            res.status(404).send({
                message: `Error getting dog with id ${id}`,
                data: []
            });
        } else {
            res.status(200).send({
                message: 'OK',
                data: res_dog
            });
        }
    });
});

router.post('/', (req, res) => {
    console.log(req);
    const loc = new location();
    const sche = new schedule();
    const own = new owner();
    let data = req.body;
    data.body.schedule_id = sche.id;
    data.body.location_id = loc.id;
    data.body.owner_id = own.id;
    const dog = new dog(data);
});

module.exports = router;
