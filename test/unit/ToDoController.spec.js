describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;
  var todos;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
    todos = [
      {text: "ToDo1", completed: true},
      {text: "ToDo2", completed: false}
    ];
  }));

  it('initialises with multiple todos', function() {
    expect(ctrl.todos).toEqual(todos);
  });

  it('has an addToDo function thats adds a todo', function() {
    ctrl.addToDo('todo');
    var todo = {text: "todo", completed: false};
    expect(ctrl.todos[2]).toEqual(todo);
  });

});