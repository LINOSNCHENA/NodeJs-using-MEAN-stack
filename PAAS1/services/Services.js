'use strict';
module.exports = function(app) {

  var actionJobs = require('../controller/Controller');                          
    // the five services offered  

  app.route('/employees')
    .get(actionJobs.listEmployees)
    .post(actionJobs.addEmployee);

  app.route('/employee/:taskId')
    .get(actionJobs.showEmployee)
    .put(actionJobs.updateEmployee)
    .delete(actionJobs.deleteEmployee);
};