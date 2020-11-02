'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema
({
 name: {    type: String, required: 'Kindly enter the name of the new employee'},
 dept: {    type: String, required: 'Kindly enter the dept of the new employee'},
 post: {    type: String, required: 'Kindly enter the position of the employee'},
 salary: {  type: Number , required:'Kindly enter the salary of the new employee'},
 status: {  type: [{
     type: String, enum: ['permanent', 'contract', 'temporal']  }], default: ['temporal'] },
 CreatedAt: { type: Date,    default: Date.now  }
});

module.exports = mongoose.model('Tasks', employeeSchema);