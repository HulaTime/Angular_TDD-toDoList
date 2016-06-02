describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory, httpBackend;
  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);
    httpBackend.flush();
  }));

  it('initialises with several todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);

    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('NewToDo');

    var todo = new ToDoFactory("NewToDo");
    expect(ctrl.todos.pop()).toEqual(todo);
  });

  it('removes the last todo', function() {
    initialCount = ctrl.todos.length;

    ctrl.removeToDo();

    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });

  it('can select only all completed todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);
    ctrl.completeFilter()
    expect(ctrl.todos).toEqual([todo1]);
  });

  it('can select only all incomplete todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);
    ctrl.inCompleteFilter()
    expect(ctrl.todos).toEqual([todo2]);
  });

  it('all todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);
    ctrl.inCompleteFilter()
    ctrl.completeFilter()
    ctrl.showAll()
    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('clear completed todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);
    ctrl.inCompleteFilter()
    ctrl.completeFilter()
    ctrl.showAll()
    ctrl.clearCompleted()
    expect(ctrl.todos).toEqual([todo2]);
  });
});