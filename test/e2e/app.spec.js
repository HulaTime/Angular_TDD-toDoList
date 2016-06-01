describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toMatch("Todos App")
  })
})


