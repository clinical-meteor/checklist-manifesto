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
  tags: ["library"],
  before: function(client){
    client
      .url("http://localhost:3000")
  },
  "signed in user - can display list library": function(client) {
    client
      .verify.elementNotPresent("#protocolLibraryLink")
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
  "signed in user - can publish list to library": function(client) {
    client
      .click("#protocolLibrary #protocolList .protocol:nth-child(1)").pause(300)
      .verify.visible("#protocolDetails .clone")
      .click("#protocolDetails .clone").pause(300)
      .verify.elementPresent("#lists .listItem:nth-child(5)")
      .verify.containsText("#lists .listItem:nth-child(5)", "Joe's Public List")
  },
  "signed in user - can clone protocol from library": function(client) {
    client
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
