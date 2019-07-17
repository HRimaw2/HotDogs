const express = require('express');
const mongoose = require('mongoose');
const async = require("async");
const Schedule = require('../models/schedule');
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.query);
    const dog_id = req.query ? req.query.dog_id : '';

    if (dog_id) {
        Schedule.find({"dog_id": dog_id}).exec((err, res_schedule) => {
            if (err) {
                res.status(404).send({
                    message: `Error getting schedules with dog name ${dog_name}`,
                    data: []
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    data: res_schedule
                });
            }
        });
    } else {
        Schedule.find().exec((err, res_schedule) => {
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
    }
});


router.post('/:id', (req, res) => {
    const id = req.params.id;
    let data = req.body;
    let newSchedule = data ? new Schedule(data) : new Schedule();
    newScheduleJSON = newSchedule.toJSON;
    newScheduleJSON.dog_id = id;
    let finalSchedule = new Schedule(newSchedule);
    console.log(finalSchedule);
    finalSchedule.save()
    .then(() => {
        res.status(200).send({
            message: 'OK',
            data: finalSchedule
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    let scheduleChange = req.body;

    Schedule.find({"dog_id":id}, scheduleChange, (err, res_schedule) => {
        if(err){
            console.log(err);
            res.status(400).send({
                message: `Error updating schedule for dog with id: ${id}`,
                data: []

            });
        } else if (!res_schedule) {
            res.status(400).send({
                message: `No dog foung with id ${id}`,
                data: []
            });
        } else {
            res.status(200).send({
                message: 'OK!',
                data: res_schedule
            });
        } 
    });

});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Schedule.findOneAndDelete({"dog_id":id}, (err, res_schedule) => {
        if(err){
            console.log(err);
            res.status(400).send({
                message: `Error deleting schedule for dog with id ${id}`,
                data: []
            });
        } else {
            res.status(200).send({
                message: 'OK!',
                data: res_schedule
            });
        }
    });
});

module.exports = router;