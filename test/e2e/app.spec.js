describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Todos App")
  })
})

describe("app", function() {
  it("should say 'Hello world' on the page", function() {
    browser.get('/')
    expect($$("p").first().getText()).toEqual("Hello world")
  })
})

describe('Todos tracker', function() {
  it('has a todo', function() {
    browser.get('/')
    var todo = $('#todo')
    expect(todo.getText()).toEqual('ToDo1')
  })
})