'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.addEmployee = function (req, res) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    console.log("Terminal #1 Added One of record");
    if (err)
      res.send(err); res.json(task);
  });
};

exports.listEmployees = function (req, res) {
  Task.find({}, function (err, task) {
    console.log("Terminal #2 List all records");
    if (err)
      res.send(err); res.json(task);
  });
};

exports.showEmployee = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    console.log("Terminal #3 Show One record");
    if (err)
      res.send(err); res.json(task);
  });
};

exports.updateEmployee = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true },
    function (err, task) {
      console.log("Terminal #5 Updated One record");
      if (err)
        res.send(err); res.json(task);
    });
};

exports.deleteEmployee = function (req, res) {
  Task.deleteOne({ _id: req.params.taskId },
    function (err, task) {
      console.log("Terminal #2 Delete One Record");
      if (err)
        res.send(err); res.json({ message: 'One record have been erased!' });
    });
};

