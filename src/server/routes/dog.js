const express = require('express');
const mongoose = require('mongoose');
const async = require('async');
const Dog = require('../models/dog');
const Schedule = require('../models/schedule');
const Location = require('../models/location');
const Owner = require('../models/owner');

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
        Dog.find(breed).exec((err, res_dog) => {
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
        Dog.find(size).exec((err, res_dog) => {
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
        Dog.find(colors).exec((err, res_dog) => {
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

    Dog.find(id).exec((err, res_dog) => {
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
    console.log(req.body);

    const loc = new Location();
    const sche = new Schedule();
    const own = new Owner();
    const data = req.body;
    data.schedule_id = sche.id;
    data.location_id = loc.id;
    data.owner_id = own.id;
    const dog = new Dog(data);
    loc.dog_id = dog.id;
    sche.dog_id = dog.id;
    own.dog_id = dog.id;
    sche.save()
        .then(() => {
            res.send('item saved to database');
        })
        .catch(() => {
            console.log('Error');
        });
    own.save()
        .then((item) => {
            res.send('item saved to database');
        })
        .catch(() => {
            console.log('Error');
        });
    loc.save()
        .then((item) => {
            res.send('item saved to database');
        })
        .catch(() => {
            console.log('Error');
        });
    dog.save()
        .then((item) => {
            res.send('item saved to database');
        })
        .catch(() => {
            console.log('Error');
        });
    res.status(200).send({
        message: 'OK',
        data: dog
    });
});

module.exports = router;
