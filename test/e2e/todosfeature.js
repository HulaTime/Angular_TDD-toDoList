describe('Todos tracker', function() {

  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
        method: 'GET'
      },
      response: {
        data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
      }
    }]);
  });

  it('page displays total no. of tasks', function() {
    browser.get('/');
    var num = $$('#task-num');
    expect(num.getText()).toMatch('2');
    $('#remove-todo').click();
    expect(num.getText()).toMatch('1');
  });


  it('has a filter to display only completed tasks', function() {
    browser.get('/');
    $('#complete-filter').click();

    var todos = $$('#todos p');
    expect(todos.getText()).not.toMatch('ToDo2: not completed');
  });

  it('has a filter to display only incomplete tasks', function() {
    browser.get('/');
    $('#incomplete-filter').click();

    var todos = $$('#todos p');
    expect(todos.getText()).not.toMatch('ToDo1: Completed');
  });

  it('has a filter to display all tasks', function() {
    browser.get('/');
    $('#all-filter').click();

    var todos = $$('#todos p');
    expect(todos.getText()).toMatch('ToDo1: Completed');
    expect(todos.getText()).toMatch('ToDo2: not completed');
  });

  it('has a clear all tasks button', function() {
    browser.get('/');
    $('#clear-completed').click();
    var todos = $$('#todos p');
    expect(todos.getText()).not.toMatch('ToDo1: Completed');
    expect(todos.getText()).toMatch('ToDo2: not completed');
  });

  it('has several ToDos', function() {
    browser.get('/');
    var todos = $$('#todos p');
    expect(todos.first().getText()).toMatch('ToDo1: Completed');
    expect(todos.last().getText()).toMatch('ToDo2: not completed');
  });

  it('can add a ToDo', function() {
    browser.get('/');
    $('#new-todo-name').sendKeys("NewTodo");
    $('#add-todo').click();

    var todo = $$('#todos p').last().getText();
    expect(todo).toMatch('NewTodo: not completed');
  });

  it('can remove a ToDo', function() {
    browser.get('/');
    var todos = $$('#todos p');
    var initialCount = todos.count();

    $('#remove-todo').click();

    expect(todos.count()).toEqual(1);
  });

  it('can mark a ToDo as complete', function(){
    browser.get('/');
    var todo = $$('#todos p').last();
    todo.element(by.css('.complete')).click();

    expect(todo.getText()).toMatch("ToDo2: Completed");
  });

  afterEach(function(){
    mock.teardown();
  });

});