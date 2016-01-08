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
        .verify.visible("#newTaskInput")
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
      .resizeWindow(1024, 768)
        .verify.hidden("#sidebarToggle")
        .verify.cssProperty("#contentContainer", "left", "270px")
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
      .resizeWindow(768, 1024)
        .verify.elementNotPresent("#checklistPage .taskItem:nth-child(1)")
        .verify.visible("#newTaskInput")
        .setValue("#newTaskInput", "Publish app in App Store")
        .keys(client.Keys.ENTER).pause(500)
        .verify.visible("#checklistPage .taskItem:nth-child(1)")
        .verify.containsText("#checklistPage .taskItem:nth-child(1)", "Publish app in App Store")
  },
  "signed in user - can complete task" : function (client) {
    client
      .verify.visible("#checklistPage .taskItem:nth-child(1)")
      .verify.containsText("#checklistPage .taskItem:nth-child(1)", "Publish app in App Store")
      .verify.visible("#checklistPage .taskItem:nth-child(1) .checkbox")
      .verify.hidden("#checklistPage .taskItem:nth-child(1) .delete")
      .verify.cssProperty("#checklistPage .taskItem:nth-child(1)", "color", "black")
      .click("#checklistPage .taskItem:nth-child(1) .checkbox").pause(500)
      .verify.cssProperty("#checklistPage .taskItem:nth-child(1)", "color", "gray")
      .verify.visible("#checklistPage .taskItem:nth-child(1) .checkbox")
  },

  "signed in user - can delete completed task" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#checklistPage .taskItem:nth-child(1)")
        .verify.containsText("#checklistPage .taskItem:nth-child(1)", "Publish app in App Store")
        .verify.visible("#checklistPage .taskItem:nth-child(1) .delete")
        .click("#checklistPage .taskItem:nth-child(1) .delete").pause(500)
        .verify.elementPresent("#checklistPage .taskItem:nth-child(1)")
  },

  "signed in user - can add list(s)": function(client) {
    client
      .verify.visible("#newListButton")
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")

      .verify.containsText("#lists .listItem:nth-child(1)", "Blood Draw")
      .verify.containsText("#lists .listItem:nth-child(2)", "MRI Procedure")
      .verify.containsText("#lists .listItem:nth-child(3)", "Linen Change")
      .verify.elementNotPresent("#lists .listItem:nth-child(4)")
      .verify.elementNotPresent("#lists .listItem:nth-child(5)")
      .click("#newListButton")
      .pause(300)
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")
      .verify.containsText("#lists .listItem:nth-child(4)", "List A")
      .verify.elementNotPresent("#lists .listItem:nth-child(5)")
      .click("#newListButton")
      .pause(300)
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")
      .verify.containsText("#lists .listItem:nth-child(4)", "List A")
      .verify.containsText("#lists .listItem:nth-child(5)", "List B")
  },
  "signed in user - can delete own list": function(client) {
    client
      .click("#lists .listItem:nth-child(5)")
      .verify.containxText("#checklistTitle", "List B")
      .verify.visible("#checklistTitle")
      .verify.visible("#listConfigToggle")
      .verify.hidden("#listConfigModal")
      .click("#listConfig").pause(300)
      .verify.visible("#listConfigModal")
      .verify.visible("#listConfigModal .delete")
      .click("#listConfigModal .delete").pause(300)
      .verify.visible("#listConfigModal .confirmListNameInput")
      .verify.visible("#listConfigModal .confirmDelete")
      .setValue("#listConfigModal .confirmListNameInput", "List B").pause(200)
      .verify.containsText("#listConfigModal .confirmListNameInput", "List B")
      .click("#listConfigModal .confirmDelete").pause(200)
      .verify.visible("#lists .listItem:nth-child(1)")
      .verify.visible("#lists .listItem:nth-child(2)")
      .verify.visible("#lists .listItem:nth-child(3)")
      .verify.containsText("#lists .listItem:nth-child(4)", "List A")
      .verify.elementNotPresent("#lists .listItem:nth-child(5)")
  },
  "signed in user - can edit own list(s)": function(client) {
    client
      .click("#lists .list:nth-child(4)")
      .verify.containxText("#checklistTitle", "List A")
      .verify.visible("#checklistTitle")
      .verify.visible("#listConfigToggle")
      .verify.hidden("#listConfigModal")
      .click("#listConfig").pause(300)
      .verify.visible("#listConfigModal")
      .verify.visible("#listConfigModal .listNameInput")
      .verify.containsText("#listConfigModal .listNameInput", "List A")
      .setValue("#listConfigModal .listNameInput", "Jane's List")
      .verify.containsText("#listConfigModal .listNameInput", "Jane's List")
      .verify.hidden("#listConfigModal .save")
      .click("#listConfigModal .save").pause(300)
      .verify.hidden("#listConfigModal")
      .verify.containsText("#checklistTitle", "Jane's List")
  },
  "signed in user - can display list library": function(client) {
    client
      .verify.elementNotPresent("#protocolLibrary")
      .click("#protocolLibraryLink").pause(300)
      .verify.visible("#protocolLibrary")
  },
  "signed in user - can see public lists in library": function(client) {
    client
      .verify.visible("#searchBar")
      .setValue("#searchBar", "Joe")
      .verify.visible("#protocolLibrary #protocolList .protocol:nth-child(1)")
      .verify.containsText("#protocolLibrary #protocolList .protocol:nth-child(1)", "Joe's Public List")
  },
  "signed in user - can not see private lists in library": function(client) {
    client
      .verify.elementNotPresent("#protocolLibrary #protocolList .protocol:nth-child(2)")
  },
  "signed in user - can clone protocol from library": function(client) {
    client
      .click("#protocolLibrary #protocolList .protocol:nth-child(1)").pause(300)
      .verify.visible("#protocolDetails .clone")
      .click("#protocolDetails .clone").pause(300)
      .verify.elementPresent("#lists .listItem:nth-child(5)")
      .verify.containsText("#lists .listItem:nth-child(5)", "Joe's Public List")
  },
  "anonymous user - can view public checklistPage with URL" : function (client) {
    client
      .url("http://localhost:3000/janedoe/lists/foo")
        .verify.visible("#checklistPage")
        .verify.visible("#checklistTitle")
        .verify.hidden("#newTaskInput")
        .verify.visible("#checklistPage .taskItem:nth-child(1)")
  },
  after: function (client){
    client
      .dropEntryUsers()
      .end();
  }
};



// module.exports = {
//   tags: ['checklistPage'],
//   before: function(client){
//     // this depends on the accounts-housemd package
//     client
//       .url("http://localhost:3000")
//       // .initializeLists()
//       // .initializeUsers()
//       //.pause(500)
//   },
//   "anonymous user - can view scratch checklistPage" : function (client) {
//     client
//       .resizeWindow(768, 1024)
//         .verify.visible("#sidebarToggle")
//         .verify.visible("#checklistPage")
//         .verify.visible("#checklistTitle")
//         .verify.visible("#newTaskInput")
//         .verify.visible("#checklistPage .taskItem:nth-child(1)")
//   },
//   "anonymous user - sidebar should be hidden in portrait mode" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(768, 1024)
//       .verify.hidden("#sidebarMenu")
//       .verify.hidden("#usernameLink")
//   },
//   "anonymous user - sidebar should be visible in landscape mode" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .verify.visible("#sidebarMenu")
//       .verify.visible("#usernameLink")
//   },
//   "anonymous user - sidebar toggle opens and closes in portrait mode" : function (client) {
//     client
//       .resizeWindow(1024, 768)
//         .verify.visible("#sidebarToggle")
//         .verify.cssProperty("#checklistPage", "left", "0px")
//         .click("#sidebarToggle").pause(500)
//         .verify.cssProperty("#checklistPage", "left", "300px")
//       .resizeWindow(768, 1024)
//         .verify.visible("#sidebarToggle")
//         .verify.cssProperty("#checklistPage", "left", "300px")
//         .click("#sidebarToggle").pause(500)
//         .verify.cssProperty("#checklistPage", "left", "300px")
//   },
//   "anonymous user - cannot access list of lists" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .verify.visible("#sidebarMenu")
//       .verify.visible("#usernameLink")
//       .verify.elementNotPresent("#protocolLibraryLink")
//       .verify.elementNotPresent("#newListButton")
//       .verify.elementNotPresent("#lists .list:nth-child(1)")
//   },
//   "signed in user - can access list of lists" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .signIn("janedoe", "janedoe123")
//       .verify.visible("#sidebarMenu")
//       .verify.visible("#usernameLink")
//       .verify.visible("#protocolLibraryLink")
//       .verify.visible("#newListButton")
//       .verify.visible("#lists .list:nth-child(1)")
//       .verify.visible("#lists .list:nth-child(2)")
//       .verify.visible("#lists .list:nth-child(3)")
//   },
//   "signed in user - can add new task" : function (client) {
//     client
//       .resizeWindow(768, 1024)
//         .verify.elementNotPresent("#checklistPage .taskItem:nth-child(1)")
//         .verify.visible("#newTaskInput")
//         .setValue("#newTaskInput", "Publish app in App Store")
//         .sendKey("Enter").pause(500)
//         .verify.visible("#checklistPage .taskItem:nth-child(1)")
//         .verify.containsText("#checklistPage .taskItem:nth-child(1)", "Publish app in App Store")
//   },
//   "signed in user - can complete task" : function (client) {
//     client
//       .verify.visible("#checklistPage .taskItem:nth-child(1)").to.be.visible
//       .verify.containsText("#checklistPage .taskItem:nth-child(1)", "Publish app in App Store")
//       .verify.visible("#checklistPage .taskItem:nth-child(1) .checkbox")
//       .verify.hidden("#checklistPage .taskItem:nth-child(1) .delete")
//       .verify.cssProperty("#checklistPage .taskItem:nth-child(1)", "color", "black")
//       .click("#checklistPage .taskItem:nth-child(1) .checkbox").pause(500)
//       .verify.cssProperty("#checklistPage .taskItem:nth-child(1)", "color", "gray")
//       .verify.visible("#checklistPage .taskItem:nth-child(1) .checkbox")
//   },
//
//   "signed in user - can delete completed task" : function (client) {
//     client
//       .resizeWindow(768, 1024)
//         .verify.visible("#checklistPage .taskItem:nth-child(1)")
//         .verify.containsText("#checklistPage .taskItem:nth-child(1)", "Publish app in App Store")
//         .verify.visible("#checklistPage .taskItem:nth-child(1) .delete")
//         .click("#checklistPage .taskItem:nth-child(1) .delete").pause(500)
//         .verify.elementPresent("#checklistPage .taskItem:nth-child(1)")
//   },
//
//   "signed in user - can add list(s)": function(client) {
//     client
//       .verify.visible("#newListButton")
//       .verify.visible("#lists .list:nth-child(1)")
//       .verify.visible("#lists .list:nth-child(2)")
//       .verify.visible("#lists .list:nth-child(3)")
//
//       .verify.containsText("#lists .list:nth-child(1)", "Blood Draw")
//       .verify.containsText("#lists .list:nth-child(2)", "MRI Procedure")
//       .verify.containsText("#lists .list:nth-child(3)", "Linen Change")
//       .verify.elementNotPresent("#lists .list:nth-child(4)")
//       .verify.elementNotPresent("#lists .list:nth-child(5)")
//       .click("#newListButton")
//       .pause(300)
//       .verify.visible("#lists .list:nth-child(1)")
//       .verify.visible("#lists .list:nth-child(2)")
//       .verify.visible("#lists .list:nth-child(3)")
//       .verify.containsText("#lists .list:nth-child(4)", "List A")
//       .verify.elementNotPresent("#lists .list:nth-child(5)")
//       .click("#newListButton")
//       .pause(300)
//       .verify.visible("#lists .list:nth-child(1)")
//       .verify.visible("#lists .list:nth-child(2)")
//       .verify.visible("#lists .list:nth-child(3)")
//       .verify.containsText("#lists .list:nth-child(4)", "List A")
//       .verify.containsText("#lists .list:nth-child(5)", "List B")
//   },
//   "signed in user - can delete own list": function(client) {
//     client
//       .click("#lists .list:nth-child(5)")
//       .verify.containxText("#checklistTitle", "List B")
//       .verify.visible("#checklistTitle")
//       .verify.visible("#listConfigToggle")
//       .verify.hidden("#listConfigModal")
//       .click("#listConfig").pause(300)
//       .verify.visible("#listConfigModal")
//       .verify.visible("#listConfigModal .delete")
//       .click("#listConfigModal .delete").pause(300)
//       .verify.visible("#listConfigModal .confirmListNameInput")
//       .verify.visible("#listConfigModal .confirmDelete")
//       .setValue("#listConfigModal .confirmListNameInput", "List B").pause(200)
//       .verify.containsText("#listConfigModal .confirmListNameInput", "List B")
//       .click("#listConfigModal .confirmDelete").pause(200)
//       .verify.visible("#lists .list:nth-child(1)")
//       .verify.visible("#lists .list:nth-child(2)")
//       .verify.visible("#lists .list:nth-child(3)")
//       .verify.containsText("#lists .list:nth-child(4)", "List A")
//       .verify.elementNotPresent("#lists .list:nth-child(5)")
//   },
//   "signed in user - can edit own list(s)": function(client) {
//     client
//       .click("#lists .list:nth-child(4)")
//       .verify.containxText("#checklistTitle", "List A")
//       .verify.visible("#checklistTitle")
//       .verify.visible("#listConfigToggle")
//       .verify.hidden("#listConfigModal")
//       .click("#listConfig").pause(300)
//       .verify.visible("#listConfigModal")
//       .verify.visible("#listConfigModal .listNameInput")
//       .verify.containsText("#listConfigModal .listNameInput", "List A")
//       .setValue("#listConfigModal .listNameInput", "Jane's List")
//       .verify.containsText("#listConfigModal .listNameInput", "Jane's List")
//       .verify.hidden("#listConfigModal .save")
//       .click("#listConfigModal .save").pause(300)
//       .verify.hidden("#listConfigModal")
//       .verify.containsText("#checklistTitle", "Jane's List")
//   },
//   "signed in user - can display list library": function(client) {
//     client
//       .verify.elementNotPresent("#protocolLibrary")
//       .click("#protocolLibraryLink").pause(300)
//       .verify.visible("#protocolLibrary")
//   },
//   "signed in user - can see public lists in library": function(client) {
//     client
//       .verify.visible("#searchBar")
//       .setValue("#searchBar", "Joe")
//       .verify.visible("#protocolLibrary #protocolList .protocol:nth-child(1)")
//       .verify.containsText("#protocolLibrary #protocolList .protocol:nth-child(1)", "Joe's Public List")
//   },
//   "signed in user - can not see private lists in library": function(client) {
//     client
//       .verify.elementNotPresent("#protocolLibrary #protocolList .protocol:nth-child(2)")
//   },
//   "signed in user - can clone protocol from library": function(client) {
//     client
//       .click("#protocolLibrary #protocolList .protocol:nth-child(1)").pause(300)
//       .verify.visible("#protocolDetails .clone")
//       .click("#protocolDetails .clone").pause(300)
//       .verify.elementPresent("#lists .list:nth-child(5)")
//       .verify.containsText("#lists .list:nth-child(5)", "Joe's Public List")
//   },
//   "anonymous user - can view public checklistPage with URL" : function (client) {
//     client
//       .url("http://localhost:3000/janedoe/lists/foo")
//         .verify.visible("#checklistPage")
//         .verify.visible("#checklistTitle")
//         .verify.hidden("#newTaskInput")
//         .verify.visible("#checklistPage .taskItem:nth-child(1)")
//   }
// });
