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
//
// module.exports = {
//   tags: ['checklist'],
//   before: function(client){
//     // this depends on the accounts-housemd package
//     client
//       .url("http://localhost:3000")
//       .initializeLists()
//       .initializeUsers()
//       .pause(500)
//   },
//   "anonymous user - can view scratch checklist" : function (client) {
//     client
//       .resizeWindow(768, 1024)
//         .expect.element("#sidebarToggle").to.be.visible
//         .expect.element("#checklist").to.be.visible
//         .expect.element("#checklistName").to.be.visible
//         .expect.element("#newTaskInput").to.be.visible
//         .expect.element("#checklist .task:nth-child(1)").to.be.visible
//   },
//   "anonymous user - sidebar should be hidden in portrait mode" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(768, 1024)
//       .expect.element("#sidebar").to.be.hidden
//       .expect.element("#signInLink").to.be.hidden
//   },
//   "anonymous user - sidebar should be visible in landscape mode" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .expect.element("#sidebar").to.be.visible
//       .expect.element("#signInLink").to.be.visible
//   },
//   "anonymous user - sidebar toggle opens and closes in portrait mode" : function (client) {
//     client
//       .resizeWindow(1024, 768)
//         .expect.element("#sidebarToggle").to.be.visible
//         .expect.element("#checklist").to.have.css("left", "0px")
//         .click("#sidebarToggle").pause(500)
//         .expect.element("#checklist").to.have.css("left", "300px")
//       .resizeWindow(768, 1024)
//         .expect.element("#sidebarToggle").to.be.visible
//         .expect.element("#checklist").to.have.css("left", "300px")
//         .click("#sidebarToggle").pause(500)
//         .expect.element("#checklist").to.have.css("left", "300px")
//   },
//   "anonymous user - cannot access list of lists" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .expect.element("#sidebar").to.be.visible
//       .expect.element("#signInLink").to.be.visible
//       .expect.element("#protocolLibraryLink").to.not.exist
//       .expect.element("#newListLink").to.not.exist
//       .expect.element("#lists .list:nth-child(1)").to.not.exist
//   },
//   "signed in user - can access list of lists" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .signIn("janedoe", "janedoe123")
//       .expect.element("#sidebar").to.be.visible
//       .expect.element("#signInLink").to.be.visible
//       .expect.element("#protocolLibraryLink").to.be.visible
//       .expect.element("#newListLink").to.be.visible
//       .expect.element("#lists .list:nth-child(1)").to.be.visible
//       .expect.element("#lists .list:nth-child(2)").to.be.visible
//       .expect.element("#lists .list:nth-child(3)").to.be.visible
//   },
//   "signed in user - can add new task" : function (client) {
//     client
//       .resizeWindow(768, 1024)
//         .expect.element("#checklist .task:nth-child(1)").to.not.exist
//         .expect.element("#newTaskInput").to.be.visible
//         .setValue("#newTaskInput", "Publish app in App Store")
//         .sendKey("Enter").pause(500)
//         .expect.element("#checklist .task:nth-child(1)").to.be.visible
//         .expect.element("#checklist .task:nth-child(1)").to.have.text("Publish app in App Store")
//   },
//   "signed in user - can complete task" : function (client) {
//     client
//       .expect.element("#checklist .task:nth-child(1)").to.be.visible
//       .expect.element("#checklist .task:nth-child(1)").to.have.text("Publish app in App Store")
//       .expect.element("#checklist .task:nth-child(1) .checkbox").to.be.visible
//       .expect.element("#checklist .task:nth-child(1) .delete").to.not.be.visible
//       .expect.element("#checklist .task:nth-child(1)").to.have.css("color", "black")
//       .click("#checklist .task:nth-child(1) .checkbox").pause(500)
//       .expect.element("#checklist .task:nth-child(1)").to.have.css("color", "gray")
//       .expect.element("#checklist .task:nth-child(1) .checkbox").to.be.visible
//   },
//
//   "signed in user - can delete completed task" : function (client) {
//     client
//       .resizeWindow(768, 1024)
//         .expect.element("#checklist .task:nth-child(1)").to.be.visible
//         .expect.element("#checklist .task:nth-child(1)").to.have.text("Publish app in App Store")
//         .expect.element("#checklist .task:nth-child(1) .delete").to.not.be.visible
//         .click("#checklist .task:nth-child(1) .delete").pause(500)
//         .expect.element("#checklist .task:nth-child(1)").to.not.exist
//   },
//
//   "signed in user - can add list(s)": function(client) {
//     client
//       .expect.element("#newListLink").to.be.visible
//       .expect.element("#lists .list:nth-child(1)").to.be.visible
//       .expect.element("#lists .list:nth-child(2)").to.be.visible
//       .expect.element("#lists .list:nth-child(3)").to.be.visible
//
//       .expect.element("#lists .list:nth-child(1)").to.have.text("Blood Draw")
//       .expect.element("#lists .list:nth-child(2)").to.have.text("MRI Safety Checklist")
//       .expect.element("#lists .list:nth-child(3)").to.have.text("Linen Change")
//       .expect.element("#lists .list:nth-child(4)").to.not.exist
//       .expect.element("#lists .list:nth-child(5)").to.not.exist
//       .click("#newListLink")
//       .pause(300)
//       .expect.element("#lists .list:nth-child(1)").to.be.visible
//       .expect.element("#lists .list:nth-child(2)").to.be.visible
//       .expect.element("#lists .list:nth-child(3)").to.be.visible
//       .expect.element("#lists .list:nth-child(4)").to.have.text("List A")
//       .expect.element("#lists .list:nth-child(5)").to.not.exist
//       .click("#newListLink")
//       .pause(300)
//       .expect.element("#lists .list:nth-child(1)").to.be.visible
//       .expect.element("#lists .list:nth-child(2)").to.be.visible
//       .expect.element("#lists .list:nth-child(3)").to.be.visible
//       .expect.element("#lists .list:nth-child(4)").to.have.text("List A")
//       .expect.element("#lists .list:nth-child(5)").to.have.text("List B")
//   },
//   "signed in user - can delete own list": function(client) {
//     client
//       .click("#lists .list:nth-child(5)")
//       .expect.element("#checklistName").to.have.text("List B")
//       .expect.element("#checklistName").to.be.visible
//       .expect.element("#listConfigToggle").to.be.visible
//       .expect.element("#listConfigModal").to.be.hidden
//       .click("#listConfig").pause(300)
//       .expect.element("#listConfigModal").to.be.visible
//       .expect.element("#listConfigModal .delete").to.be.visible
//       .click("#listConfigModal .delete").pause(300)
//       .expect.element("#listConfigModal .confirmListNameInput").to.be.visible
//       .expect.element("#listConfigModal .confirmDelete").to.be.visible
//       .setValue("#listConfigModal .confirmListNameInput", "List B").pause(200)
//       .expect.element("#listConfigModal .confirmListNameInput").to.have.text("List B")
//       .click("#listConfigModal .confirmDelete").pause(200)
//       .expect.element("#lists .list:nth-child(1)").to.be.visible
//       .expect.element("#lists .list:nth-child(2)").to.be.visible
//       .expect.element("#lists .list:nth-child(3)").to.be.visible
//       .expect.element("#lists .list:nth-child(4)").to.have.text("List A")
//       .expect.element("#lists .list:nth-child(5)").to.not.exist
//   },
//   "signed in user - can edit own list(s)": function(client) {
//     client
//       .click("#lists .list:nth-child(4)")
//       .expect.element("#checklistName").to.have.text("List A")
//       .expect.element("#checklistName").to.be.visible
//       .expect.element("#listConfigToggle").to.be.visible
//       .expect.element("#listConfigModal").to.be.hidden
//       .click("#listConfig").pause(300)
//       .expect.element("#listConfigModal").to.be.visible
//       .expect.element("#listConfigModal .listNameInput").to.be.visible
//       .expect.element("#listConfigModal .listNameInput").to.have.text("List A")
//       .setValue("#listConfigModal .listNameInput", "Jane's List")
//       .expect.element("#listConfigModal .listNameInput").to.have.text("Jane's List")
//       .expect.element("#listConfigModal .save").to.be.hidden
//       .click("#listConfigModal .save").pause(300)
//       .expect.element("#listConfigModal").to.be.hidden
//       .expect.element("#checklistName").to.have.text("Jane's List")
//   },
//   "signed in user - can display list library": function(client) {
//     client
//       .expect.element("#protocolLibrary").to.not.exist
//       .click("#protocolLibraryLink").pause(300)
//       .expect.element("#protocolLibrary").to.be.visible
//   },
//   "signed in user - can see public lists in library": function(client) {
//     client
//       .expect.element("#searchBar").to.be.visible
//       .setValue("#searchBar", "Joe")
//       .expect.element("#protocolLibrary #protocolList .protocol:nth-child(1)").to.be.visible
//       .expect.element("#protocolLibrary #protocolList .protocol:nth-child(1)").to.have.text("Joe's Public List")
//   },
//   "signed in user - can not see private lists in library": function(client) {
//     client
//       .expect.element("#protocolLibrary #protocolList .protocol:nth-child(2)").to.not.exist
//   },
//   "signed in user - can clone protocol from library": function(client) {
//     client
//       .click("#protocolLibrary #protocolList .protocol:nth-child(1)").pause(300)
//       .expect.element("#protocolDetails .clone").to.be.visible
//       .click("#protocolDetails .clone").pause(300)
//       .expect.element("#lists .list:nth-child(5)").to.exist
//       .expect.element("#lists .list:nth-child(5)").to.have.text("Joe's Public List")
//   },
//   "anonymous user - can view public checklist with URL" : function (client) {
//     client
//       .url("http://localhost:3000/janedoe/lists/foo")
//         .expect.element("#checklist").to.be.visible
//         .expect.element("#checklistName").to.be.visible
//         .expect.element("#newTaskInput").to.not.be.visible
//         .expect.element("#checklist .task:nth-child(1)").to.be.visible
//   }
// });
