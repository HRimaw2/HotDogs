const { express } = require('express');
const dogs = require('../models/dog');

const mongoose = require('mongoose');
const async = require("async");
const router = express.Router();

function getQueryParams(req) {
  var id = req.params._id;
  var dog_id = req.params.dog_id;
  var floor = req.params.floor;
  var des = req.params.description;
  var loc = req.params.marked_floor_plan;

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
  }else {
    des = JSON.parse(des);
  }

  return [id, dog_id,floor,description,marked_floor_plan]

}

// req.params._id;
//
// req.params.dog_id;
//
// req.params.floor;
//
// req.params.description;
//
// req.params.marked_floor_plan

router.get('/location/:id', function(req,res)) {
 let [id, dog_id,floor,description,marked_floor_plan] = getQueryParams(req);
}



//at the end of page
module.exports = router ;
