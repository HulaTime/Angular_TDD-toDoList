toDoApp.controller('ToDoController', function() {
  this.todos = [{text: 'ToDo1', completed: true}, {text: 'ToDo2', completed: false}];

  var self = this

  self.addToDo = function(text) {
    self.todos.push({text: text, completed: false});
  }



});