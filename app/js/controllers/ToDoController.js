toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(todos){
    self.todos = todos;
    self.all = todos;
  });

  self.addToDo = function(text) {
    self.todos.push(new ToDoFactory(text));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

  self.completeFilter = function() {
    self.showAll();
    self.todos = self.todos.filter(function(todo) {
      return todo.completed === true
    });
  };

  self.inCompleteFilter = function() {
    self.showAll();
    self.todos = self.todos.filter(function(todo) {
      return todo.completed !== true
    });
  };

  self.showAll = function() {
    self.todos = self.all;
  };

  self.clearCompleted = function() {
    self.all = self.todos.filter(function(todo) {
      return todo.completed !== true
    });
  self.showAll();
  };

  self.counter = function() {
    return self.todos.length
  };

}]);

