const express = require('express');
const ToDoRoute = express.Router();

// the model
let model = require('./ToDo-model');

ToDoRoute.route('/').get((req, res) => {
    model.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 ToDoRoute.route('/add').post((req, res, next) => {
    model.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

ToDoRoute.route('/edit/:id').get((req, res) => {
   model.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

ToDoRoute.route('/update/:id').post((req, res, next) => {
  model.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('The ToDo updated successfully!')
    }
  })
})

ToDoRoute.route('/delete/:id').delete((req, res, next) => {
  model.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = ToDoRoute;