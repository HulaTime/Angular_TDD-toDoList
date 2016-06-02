toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(todos){
    self.todos = todos;
  });

  self.addToDo = function(text) {
    self.todos.push(new ToDoFactory(text));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

  self.completeFilter = function() {
    self.todos = self.todos.filter(function(todo) {
      return todo.completed === true
    });
  };
  // funtion that selects only completed ToDoS
  // funtion that selects only non-completed ToDoS
  // funtion that selects all ToDoS


}]);

