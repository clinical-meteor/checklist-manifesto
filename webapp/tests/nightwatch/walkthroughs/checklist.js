//
// // foo
//
// var newListName = "Foo List";
// var joesPrivateList = {
//   listName: "Joe's Private List"
// }
// var joesPublicList = {
//   listName: "Joe's Public List"
// }


// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  tags: ["checklist"],
  before: function(client){
    client
      .url("http://localhost:3000")
      // .initializeLists()
      // .initializeUsers()
      //.pause(500)
  },
  "anonymous user - can view scratch checklist" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#sidebarToggle")
        .verify.visible("#checklistPage")
        .verify.visible("#checklistTitle")
        .verify.visible("#checklistPage .taskItem:nth-child(1)")
  },
  "anonymous user - sidebar should be hidden in portrait mode" : function (client) {
    client
      .resizeWindow(768, 1024)
      .verify.elementPresent("#sidebarMenu")
      .verify.elementPresent("#usernameLink")
      .verify.cssProperty("#sidebarMenu", "left", "0px")
      .verify.cssProperty("#contentContainer", "left", "0px")
  },
  "anonymous user - sidebar should be visible in landscape mode" : function (client) {
    client
      .resizeWindow(1024, 768)
      .verify.elementPresent("#sidebarMenu")
      .verify.elementPresent("#usernameLink")
      .verify.cssProperty("#sidebarMenu", "left", "0px")
      .verify.cssProperty("#contentContainer", "left", "270px")
  },
  "anonymous user - sidebar toggle opens and closes in portrait mode" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#sidebarToggle")
        .verify.cssProperty("#contentContainer", "left", "0px")
        .verify.cssProperty("#contentContainer", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .click("#sidebarToggle").pause(500)
        .verify.cssProperty("#contentContainer", "left", "0px")
        .verify.cssProperty("#contentContainer", "transform", "matrix(1, 0, 0, 1, 270, 0)")
  },
  "anonymous user - cannot access list of lists" : function (client) {
    client
      .resizeWindow(1024, 768)
      .verify.visible("#sidebarMenu")
      .verify.visible("#usernameLink")
      .verify.elementNotPresent("#protocolLibraryLink")
      .verify.elementNotPresent("#newListButton")
      .verify.elementNotPresent("#lists .listItem:nth-child(1)")
  },
  "signed in user - can access list of lists" : function (client) {
    client
      .resizeWindow(1024, 768)
      .click("#usernameLink").pause(300)
        .click("#needAnAccountButton").pause(300)
        .setValue("#signUpPageFullNameInput", "Alice Doe")
        .setValue("#signUpPageEmailInput", "alice@symptomatic.io")
        .setValue("#signUpPagePasswordInput", "alice123")
        .setValue("#signUpPagePasswordConfirmInput", "alice123")
        .click("#signUpPageJoinNowButton").pause(300)

      .verify.visible("#sidebarMenu")
      .verify.visible("#usernameLink")
      .verify.visible("#protocolLibraryLink")
      .verify.visible("#newListButton")
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      //.verify.visible("#lists .list:nth-child(3)")
  },
  "signed in user - can add new task" : function (client) {
    client
      .resizeWindow(1024, 768)
        .verify.elementPresent("#checklistItems .taskItem:nth-child(1)")
        .click("#showNewTaskToggle").pause(300)
        .verify.visible("#newTaskInput")
        .setValue("#newTaskInput", "Publish app in App Store")
        .keys(client.Keys.ENTER).pause(500)
        .verify.visible("#checklistItems .taskItem:nth-child(1)")
        .verify.attributeEquals("#checklistItems .taskItem:nth-child(1) .taskInput", "placeholder", "Publish app in App Store")
  },
  "signed in user - can complete task" : function (client) {
    client
      .verify.visible("#checklistPage .taskItem:nth-child(1)")
      .verify.attributeEquals("#checklistPage .taskItem:nth-child(1) .taskInput", "placeholder", "Publish app in App Store")
      .verify.visible("#checklistPage .taskItem:nth-child(1) .checkbox")
      // .verify.hidden("#checklistPage .taskItem:nth-child(1) .delete")
      .verify.cssProperty("#checklistPage .taskItem:nth-child(1)", "color", "rgba(51, 51, 51, 1)")
      .click("#checklistPage .taskItem:nth-child(1) .checkbox").pause(500)
      .verify.cssProperty("#checklistPage .taskItem:nth-child(1)", "color", "rgba(51, 51, 51, 1)")
      .verify.visible("#checklistPage .taskItem:nth-child(1) .checkbox")
  },

  "signed in user - can delete completed task" : function (client) {
    client
      .resizeWindow(1024, 768)
        .verify.visible("#checklistPage .taskItem:nth-child(1)")
        .verify.attributeEquals("#checklistPage .taskItem:nth-child(1) .taskInput", "placeholder", "Publish app in App Store")
        .verify.visible("#checklistPage .taskItem:nth-child(1) .delete-item")
        .click("#checklistPage .taskItem:nth-child(1) .delete-item").pause(500)
        .verify.elementPresent("#checklistPage .taskItem:nth-child(1)")
  },

  "signed in user - can add list(s)": function(client) {
    client
      .verify.visible("#newListButton")
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      //.verify.visible("#lists .listItem:nth-child(3)")

      .verify.containsText("#lists .listItem:nth-child(1)", "MRI Procedure")
      .verify.containsText("#lists .listItem:nth-child(2)", "Change Bed Linens")
      .verify.containsText("#lists .listItem:nth-child(3)", "Collect Blood Specimen")
      .verify.elementNotPresent("#lists .listItem:nth-child(4)")
      .verify.elementNotPresent("#lists .listItem:nth-child(5)")
      .click("#newListButton")
      .pause(500)
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")
      .verify.containsText("#lists .listItem:nth-child(4)", "List A")
      .verify.elementNotPresent("#lists .listItem:nth-child(5)")
      .click("#newListButton")
      .pause(500)
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")
      .verify.containsText("#lists .listItem:nth-child(4)", "List A")
      .verify.containsText("#lists .listItem:nth-child(5)", "List B")
  },
  "signed in user - can delete own list": function(client) {
    client
      .click("#lists .listItem:nth-child(5)")
      .verify.containsText("#checklistTitle", "List B")
      .verify.visible("#checklistConfig")
      .verify.hidden("#configListModal")
      .click("#checklistConfig").pause(300)
      .verify.visible("#configListModal")
      .verify.visible("#configListModal #deleteListButton")
      .click("#configListModal #deleteListButton").pause(300)
      .verify.visible("#configListModal #configListModalInput")
      .verify.visible("#configListModal #confirmRemoveListButton")
      .setValue("#configListModal #configListModalInput", "List B").pause(200)
      .verify.attributeEquals("#configListModal #configListModalInput", "value", "List B")
      .click("#confirmRemoveListButton").pause(500)
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")
      .verify.containsText("#lists .listItem:nth-child(4)", "List A")
      .verify.elementNotPresent("#lists .listItem:nth-child(5)")
  },
  "signed in user - can edit own list(s)": function(client) {
    client
      .click("#lists .listItem:nth-child(4)")
      .verify.containsText("#checklistTitle", "List A")
      .verify.visible("#checklistTitle")
      .verify.visible("#checklistConfig")
      .verify.hidden("#configListModal")
      .click("#checklistConfig").pause(300)
      .verify.visible("#configListModal")
      .verify.visible("#configListModal #listNameInput")
      .verify.attributeEquals("#configListModal #listNameInput", "value", "List A")
      .clearValue("#configListModal #listNameInput")
      .setValue("#configListModal #listNameInput", "Jane's List")
      .verify.attributeEquals("#configListModal #listNameInput", "value", "Jane's List")
      .verify.elementPresent("#configListModal #saveListButton")
      .click("#configListModal #saveListButton").pause(300)
      .verify.hidden("#configListModal")
      .verify.containsText("#checklistTitle", "Jane's List")
  },
  after: function (client){
    client
      .dropEntryUsers()
      .end();
  }
};
