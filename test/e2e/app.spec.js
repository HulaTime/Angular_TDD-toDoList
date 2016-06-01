describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Todos App")
  })
})

describe('Todos tracker', function() {
  it('has a todo', function() {
    browser.get('/')
    var todos = $$('#todos p')
    expect(todos.get(0).getText()).toEqual('ToDo1: Completed')
    expect(todos.get(1).getText()).toEqual('ToDo2: not completed')
  })
})
