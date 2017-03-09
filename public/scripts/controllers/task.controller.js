myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = TaskFactory.allTasks;

  // TaskFactory.allTasks = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  // self.taskList = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  self.addTask = function() {
TaskFactory.addTask(self.newTask);
  };

  self.deleteTask = function(taskId) {
    TaskFactory.deleteTask(taskId);
  };

  // self.completeTask will stay, because it's the glue between the controller and view
  self.completeTask = function(taskId) {
    TaskFactory.completeTask(taskId);
  };

  self.uncompleteTask = function(taskId) {
    TaskFactory.uncompleteTask(taskId);

  }


}]);
