toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  this.todos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2', false)];

  var self = this

  self.addToDo = function(text) {
    self.todos.push(new ToDoFactory(text));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
}]);

