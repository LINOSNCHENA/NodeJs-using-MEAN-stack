'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.listEmployees = function (req, res) {
  Task.find({}, function (err, task) {
    console.log("Terminal #1 List all Employees");
    if (err)
      res.send(err); res.json(task);
  });
};

exports.deleteEmployee = function (req, res) {
  Task.deleteOne({ _id: req.params.taskId },
    function (err, task) {
      console.log("Terminal #2 Delete One of Employees");
      if (err)
        res.send(err); res.json({ message: 'Employee records have been erased!' });
    });
};

exports.addEmployee = function (req, res) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err)
      res.send(err); res.json(task);
  });
};

exports.showEmployee = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    console.log("Terminal #4 Show One of Employees");
    if (err)
      res.send(err); res.json(task);
  });
};

exports.updateEmployee = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true },
    function (err, task) {
      if (err)
        res.send(err); res.json(task);
    });
};

