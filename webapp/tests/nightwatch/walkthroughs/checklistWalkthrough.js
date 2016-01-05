
// foo


module.exports = {
  tags: ['checklist'],
  before: function(client){
    // this depends on the accounts-housemd package
    client
      .url("http://localhost:3000")
      .initializeLists()
      .pause(500)
  },
  "list of lists should be visible in landscape mode" : function (client) {
    var newUserId = false;
    client
      .resizeWindow(1024, 768)
      .expect.element("#sidebar").to.be.visible
      .expect.element("#signInLink").to.be.visible
      .expect.element("#protocolLibraryLink").to.be.visible
      .expect.element("#newListLink").to.be.visible
      .expect.element("#lists .list:nth-child(1)").to.be.visible
  },
  "list of lists should be hidden in portrait mode" : function (client) {
    var newUserId = false;
    client
      .resizeWindow(768, 1024)
      .expect.element("#sidebar").to.be.hidden
      .expect.element("#signInLink").to.be.hidden
      .expect.element("#protocolLibraryLink").to.be.hidden
      .expect.element("#newListLink").to.be.hidden
      .expect.element("#lists .list:nth-child(1)").to.be.hidden
  },
  "checklist should be displayed" : function (client) {
    client
      .resizeWindow(768, 1024)
        .expect.element("#sidebarToggle").to.be.visible
        .expect.element("#checklist").to.be.visible
        .expect.element("#checklistName").to.be.visible
        .expect.element("#newTaskInput").to.be.visible
        .expect.element("#checklist .task:nth-child(1)").to.be.visible
  },
  "checklist should be displayed" : function (client) {
    client
      .resizeWindow(768, 1024)
        .expect.element("#sidebarToggle").to.be.visible
        .expect.element("#checklist").to.be.visible
        .expect.element("#checklistName").to.be.visible
        .expect.element("#newTaskInput").to.be.visible
        .expect.element("#checklist .task:nth-child(1)").to.be.visible
  },
  "sidebar toggle opens and closes in portrait mode" : function (client) {
    client
      .resizeWindow(1024, 768)
        .expect.element("#sidebarToggle").to.be.visible
        .expect.element("#checklist").to.have.css("left", "0px")
        .click("#sidebarToggle").pause(500)
        .expect.element("#checklist").to.have.css("left", "300px")
      .resizeWindow(768, 1024)
        .expect.element("#sidebarToggle").to.be.visible
        .expect.element("#checklist").to.have.css("left", "300px")
        .click("#sidebarToggle").pause(500)
        .expect.element("#checklist").to.have.css("left", "300px")
  },
  "can add new task" : function (client) {
    client
      .resizeWindow(768, 1024)
        .expect.element("#checklist .task:nth-child(1)").to.not.exist
        .expect.element("#newTaskInput").to.be.visible
        .setValue("#newTaskInput", "Publish app in App Store")
        .sendKey("Enter").pause(500)
        .expect.element("#checklist .task:nth-child(1)").to.be.visible
        .expect.element("#checklist .task:nth-child(1)").to.have.text("Publish app in App Store")
  },
  "can complete task" : function (client) {
    client 
      .expect.element("#checklist .task:nth-child(1)").to.be.visible
      .expect.element("#checklist .task:nth-child(1)").to.have.text("Publish app in App Store")
      .expect.element("#checklist .task:nth-child(1) .checkbox").to.be.visible
      .expect.element("#checklist .task:nth-child(1) .delete").to.not.be.visible
      .expect.element("#checklist .task:nth-child(1)").to.have.css("color", "black")
      .click("#checklist .task:nth-child(1) .checkbox").pause(500)
      .expect.element("#checklist .task:nth-child(1)").to.have.css("color", "gray")
      .expect.element("#checklist .task:nth-child(1) .checkbox").to.be.visible
  },
  
  "can delete task" : function (client) {
    client
      .resizeWindow(768, 1024)
        .expect.element("#checklist .task:nth-child(1)").to.be.visible
        .expect.element("#checklist .task:nth-child(1)").to.have.text("Publish app in App Store")
        .expect.element("#checklist .task:nth-child(1) .delete").to.not.be.visible
        .click("#checklist .task:nth-child(1) .delete").pause(500)
        .expect.element("#checklist .task:nth-child(1)").to.not.exist
  },
  
});