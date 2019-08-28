'use strict';
module.exports = function(app) {
  var actionJobs = require('../controller/wController');
                              // the five CRUD functionalities
  app.route('/employees')
    .get(actionJobs.listEmployees)
    .post(actionJobs.addEmployee);

  app.route('/employee/:taskId')
    .get(actionJobs.showEmployee)
    .put(actionJobs.updateEmployee)
    .delete(actionJobs.deleteEmployee);
};