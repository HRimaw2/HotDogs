const express  = require('express');
const location = require('../models/location');

const mongoose = require('mongoose');
const async = require("async");
const router = express.Router();

function getQueryParams(req) {
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
  }else {
    des = JSON.parse(des);
  }

  return [id, dog_id,floor,description,marked_floor_plan]

}
router.post('/', function (req,res) {
    const loc = new location(req.body);
      loc.save()
      .then(loc => {
        res.status(200).send({
          message: 'SUCCESS',
          data: loc
          });
      })

      .catch(err => {
        res.status(500).send({
          message: "location not added",
          data: []
          });
        })
  });

router.get('/', function(req,res) {
  const [id, dog_id,floor,description,marked_floor_plan] = getQueryParams(req);
});

router.get('/:id', function (req, res) {
    location.find( {"Location ID": req.query.body._id} ).exec( (err, loc) => {
            if (err) {
                res.status(404).send({
                    message: "Error",
                    data: []
                });
            } else if (loc.length == 0) {
                res.status(404).send({
                    message: 'No location with that id found',
                    data: []
                });
            }
            else {
                res.status(200).send({
                    message: 'SUCCESS',
                    data: loc
                })
            }
        }
    )
});

router.put('/:id', function (req, res) {
  location.findOneandReplace( {"Location ID": req.query.body._id},req.body ,(err, loc) => {
    if (err) {
      console.log(err)
      res.status(400).send({
          message: "Error",
          data: []
      });
    } else if (!loc) {
      console.log(req.body)
      res.status(400).send({
        message: 'No location with that id found',
        data: []
      });
    } else {
      res.status(200).send({
        message: 'SUCCESS',
        data: loc
      });
    }
  })
});


router.delete('/:id', function (req,res) {
  location.findOneandDelete({"Location": req.query.body._id}, req.body, (err,loc) => {
    if (err) {
      res.status(404).send({
        message: "Error",
        data: []
      });
    } else if (!loc) {
      res.status(404).send({
        message: 'No location with that id found',
        data: []
      });
    } else {
      res.status(200).send({
        message: 'SUCCESS',
        data: []
      });
    }
  })
});




//router.get('/:floor',)

//at the end of page
module.exports = router ;
