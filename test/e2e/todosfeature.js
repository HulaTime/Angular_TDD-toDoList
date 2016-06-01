describe('ToDoController', function() {
  it('can add a ToDo', function() {
    browser.get('/');
    // sendKeys tells protractor to enter the string "NewToDo" into the input
    $('#new-todo-name').sendKeys("NewToDo");
    $('#add-todo').click();

    var todo = $$('#todos p').last().getText();
    expect(todo).toEqual('NewToDo: not completed');
  });
});
