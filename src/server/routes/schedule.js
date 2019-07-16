const express = require('express');
const mongoose = require('mongoose');
const async = require("async");
var schedule = require('../models/schedule');
const app = express();
const router = express.Router();

function getQueryParams(req) {
    let { dog_id } = '';
    if (dog_id === undefined) {
        dog_id = {};
    } else {
        breed = JSON.parse(req.query.dog_id);
    }

    let { _id } = '';
    if (_id === undefined) {
        _id = {};
    } else {
        _id = JSON.parse(req.query._id);
    }

    let { dnd_times } = '';
    if (dnd_times === undefined) {
        dnd_times = {};
    } else {
        dnd_times = JSON.parse(req.query.dnd_times);
    }
    return [dnd_times, _id, dog_id];
}


router.get('/', (req, res) => {
    console.log(req.query);
    const [dnd_times, _id, dog_id] = getQueryParams(req);

    if (dog_id) {
        schedule.find().exec((err, res_schedule) => {
            if (err) {
                res.status(404).send({
                    message: `Error getting schedules with dog name ${dog_id}`,
                    data: []
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    data: res_schedule
                });
            }
        });
    } else if (_id) {
        schedule.find(size).exec((err, res_schedule) => {
            if (err) {
                res.status(404).send({
                    message: `Error getting schedule with id: ${_id}`,
                    data: []
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    data: res_schedule
                });
            }
        });
});

module.exports = router;
