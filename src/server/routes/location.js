const express = require('express');
const Location = require('../models/location');
//const dog = require('../models/dog');
//const schedule = require('../models/schedule');
const mongoose = require('mongoose');
const router = express.Router();

function getQuery(req) {
  var id = req.query._id;
  var dog_id = req.query.dog_id;
  var floor = req.query.floor;
  var des = req.query.description;
  var loc = req.query.marked_floor_plan;

  if (id == undefined) {
    id = {};
  } else {
    id = JSON.parse(id);
  }
  if (dog_id === undefined) {
    dog_id = {};
  } else {
    dog_id = JSON.parse(dog_id);
  }

  if (floor == undefined) {
    floor = {};
  } else {
    floor = JSON.parse(floor);
  }
  if (des == undefined) {
    des = {};
  } else {
    des = JSON.parse(des);
  }
  if (loc == undefined) {
    loc = {};
  } else {
    loc = JSON.parse(loc);
  }

  return [id, dog_id, floor, des, loc];

}


router.get('/', function (req, res) {
  let [id, dog_id, floor, description, marked_floor_plan] = [req.query.id, req.query.dog_id, req.query.floor, req.query.description, req.query.marked_floor_plan];
  if (floor) {
    Location.find(floor)
      .exec((err, res_loc) => {
        if (err) {
          res.status(404)
            .send({
              message: 'Error getting location with that floor',
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'SUCCESS',
              data: res_loc
            });
        }
      });
  } else if (dog_id) {
    location.find(id)
      .exec((err, res_loc) => {
        if (err) {
          res.status(404)
            .send({
              message: 'Error getting location with that floor',
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'SUCCESS',
              data: res_loc
            });
        }
      });
  } else {
    location.find(id)
      .exec((err, res_loc) => {
        if (err) {
          res.status(404)
            .send({
              message: 'Error getting location with that floor',
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'SUCCESS',
              data: res_loc
            });
        }
      });
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Location.findById(id, (err, res_loc) => {
    if (err) {
      res.status(400)
        .send({
          message: `Error getting locations with id ${id}`,
          data: []
        });
    } else {
      res.status(200)
        .send({
          message: 'SUCCESS',
          data: res_loc
        });
    }
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  Location.findByIdAndUpdate(id, req.body, (err, loc) => {
    if (err) {
      res.status(400)
        .send({
          message: 'Error',
          data: []
        });
    } else if (!loc) {
      res.status(400)
        .send({
          message: 'No location with that id found',
          data: []
        });
    } else {
      res.status(200)
        .send({
          message: 'SUCCESS',
          data: loc
        });
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Location.findByIdAndDelete(id, (err, res_loc) => {
    if (err) {
      console.log(err);
      res.status(400)
        .send({
          message: `Error deleting location for dog with id ${id}`,
          data: []
        });
    } else {
      res.status(200)
        .send({
          message: 'SUCCESS',
          data: res_loc
        });
    }
  });
});


//at the end of page
module.exports = router;
