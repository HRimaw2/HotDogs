/* eslint-disable indent */
const express = require('express');
const Dog = require('../models/dog');
const Schedule = require('../models/schedule');
const Location = require('../models/location');
const Owner = require('../models/owner');

const router = express.Router();

router.get('/', (req, res) => {
  let [breed, size, colors] = [req.query.breed, req.query.size, false];
  if (req.query.colors) {
    colors = req.query.colors.split(',');
  }

  if (breed) {
    Dog.find({ 'breed': breed })
      .exec((err, res_dog) => {
        if (err) {
          res.status(404)
            .send({
              message: `Error getting dogs with breed ${breed}`,
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'OK',
              data: res_dog
            });
        }
      });
  } else if (size) {
    Dog.find({ 'size': size })
      .exec((err, res_dog) => {
        if (err) {
          res.status(404)
            .send({
              message: `Error getting dogs of size ${size}`,
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'OK',
              data: res_dog
            });
        }
      });
  } else if (colors) {
    Dog.find({ 'colors': colors })
      .exec((err, res_dog) => {
        if (err) {
          res.status(404)
            .send({
              message: `Error getting dogs of colors ${JSON.stringify(colors)}`,
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'OK',
              data: res_dog
            });
        }
      });
  } else {
    Dog.find({})
      .exec((err, res_dog) => {
        if (err) {
          res.status(404)
            .send({
              message: `Error`,
              data: []
            });
        } else {
          res.status(200)
            .send({
              message: 'OK',
              data: res_dog
            });
        }
      });
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  Dog.findById(id, (err, res_dog) => {
    if (err) {
      res.status(404)
        .send({
          message: `Error getting dog with id ${id}`,
          data: []
        });
    } else {
      res.status(200)
        .send({
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
  console.log(req.body);
  let data = req.body;
  data.schedule_id = sche1._id;
  data.location_id = loc1._id;
  data.owner_id = own1._id;
  let dog = new Dog(data);
  locJSON = loc1.toJSON();
  scheJSON = sche1.toJSON();
  ownJSON = own1.toJSON();

  locJSON.dog_id = dog._id;
  scheJSON.dog_id = dog._id;
  ownJSON.dog_id = dog._id;
  let sche = new Schedule(scheJSON);
  let loc = new Location(locJSON);
  let own = new Owner(ownJSON);

  sche.save()
    .then(() => {
    })
    .catch((err) => {
    });
  own.save()
    .then(() => {
    })
    .catch((err) => {
    });
  loc.save()
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
  dog.save()
    .then(() => {
      res.status(200)
        .send({
          message: 'OK',
          data: dog
        });
    })
    .catch((err) => {
      //console.log(err);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  let dogData = req.body;
  Dog.findByIdAndUpdate(id, dogData, { new: true }, (err, res_dog) => {
    if (err) {
      console.log(err);
      res.status(400)
        .send({
          message: `Error updating dog with id ${id}`,
          data: []

        });
    } else if (!res_dog) {
      res.status(400)
        .send({
          message: `No dog foung with id ${id}`,
          data: []
        });
    } else {
      res.status(200)
        .send({
          message: 'OK!',
          data: res_dog
        });
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Dog.findByIdAndDelete(id, (err, res_dog) => {
    if (err) {
      console.log(err);
      res.status(400)
        .send({
          message: `Error deleting dog with id ${id}`,
          data: []
        });
    } else {
      res.status(200)
        .send({
          message: 'OK!',
          data: res_dog
        });
    }
  });

});

module.exports = router;
