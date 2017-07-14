'use strict';

var router = require('express').Router();
var Campus = require('./campus');

router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(function (campuses) {
      res.json(campuses);
    })
    .catch(next)
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(function (campus) {
      res.status(201).json(campus);
    })
    .catch(next);
});

router.get('/:id', function (req, res, next) {
  const campusId = req.params.id;
  Campus.findOne({
    where: { id: campusId }
  })
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  const campusId = req.params.id;

  Campus.findOne({
    where: { id: campusId }
  })
    .then((campus) => {
      return campus.update(req.body)
    })
    .then((updatedCampus) => {
      res.json(updatedCampus)
    })
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  const campusId = req.params.id;

  Campus.findOne({
    where: { id: campusId }
  })
    .then((campus) => {
      campus.destroy()
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;