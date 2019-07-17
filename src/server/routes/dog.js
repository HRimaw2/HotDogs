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
    let loc1 = new Location();
    let sche1 = new Schedule();
    let own1 = new Owner();
    let data = req.body;
    data.schedule_id = sche1._id;
    data.location_id = loc1._id;
    data.owner_id = own1._id;
    let dog = new Dog(data);
    console.log(dog)
    locJSON = loc1.toJSON();
    scheJSON = sche1.toJSON();
    ownJSON = own1.toJSON();

    locJSON.dog_id = dog._id;
    scheJSON.dog_id = dog._id;
    ownJSON.dog_id = dog._id;
    console.log(locJSON)
    let sche = new Schedule(scheJSON);
    let loc = new Location(locJSON);
    let own = new Owner(ownJSON);
    console.log(loc, sche, own);


    sche.save()
        .then(() => {
            //res.send('item saved to database');
            console.log("sch")
        })
        .catch((err) => {
            console.log(err);
        });
    own.save()
        .then(() => {
            //res.send('item saved to database');
        })
        .catch((err) => {
            console.log(err);
        });
    loc.save()
        .then(() => {
            //res.send('item saved to database');
        })
        .catch((err) => {
            console.log(err);
        });
    dog.save()
        .then(() => {
            res.status(200).send({
                message: 'OK',
                data: dog
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
