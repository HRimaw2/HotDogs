var express = require('express'),
    router = express.Router(),
    owners = require('../models/owner');
    mongoose = require('mongoose');
const dogs = require('../models/dog');
var async = require("async");

// function getQueryParams(req){
//     var where = req.query.where;
//     if (where === undefined){
//         where = {};
//     } else {
//         where = JSON.parse(where);
//     }

//     var selec = req.query.select;
//     if (selec === undefined){
//         selec = {};
//     } else {
//         selec = JSON.parse(selec);
//     }

//     return [where, selec, count]
// }

router.get('/', function (req, res) {
    res.send('hello world');
    // owners.exec( (err, res_owners) => {
    //     if (err) {
    //         res.status(404).send({
    //             message: "Error",
    //             data: []
    //         });
    //     } else {
    //         res.status(200).send({
    //             message: 'SUCCESS',
    //             data: res_owners
    //         })
    //     }
    // })
});

router.post('/', async function (req, res){
    let data = req.body;
    const dog = new dogs();
    data.body.dog_id = dog.id;
    const owner = new owners(data);
        owner.save()
        .then(owner => {
        res.status(201).send({
            message : 'SUCCESS',
            data: owner
            });
        })
        .catch(err => {
        res.status(500).send({
            message : "Owner not added",
            data: []
            });
        })
});

router.get('/:id', function (req, res) {
    res.send("dsfda");
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

// router.put('/', function (req, res) {
//     owners.findOneAndReplace( {"restaurant_email": req.body.restaurant_email, "name": req.body.name}, req.body, (err, dish) => {
//         if (err) {
//             console.log(err)
//             res.status(404).send({
//                 message: "Error",
//                 data: []
//             });
//         } else if (!dish) {
//             console.log(req.body)
//             res.status(404).send({
//                 message: 'No dishes with that email found',
//                 data: []
//             });
//         } else {
//             res.status(201).send({
//                 message: 'SUCCESS',
//                 data: []
//             })
//         }
//     })
// });

// router.delete('/:restaurant_email/:name', function (req, res) {
//     owners.findOneAndDelete( {"restaurant_email": req.params.restaurant_email, "name": req.params.name}, (err, dish) => {
//         if (err) {
//             res.status(404).send({
//                 message: "Error",
//                 data: []
//             });
//         } else if (!dish) {
//             res.status(404).send({
//                 message: 'No dishes with that email found',
//                 data: []
//             });
//         } else {
//             res.status(200).send({
//                 message: 'SUCCESS',
//                 data: []
//             })
//         }
//     })
// });
module.exports = router;