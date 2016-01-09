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
      .url("http://localhost:3000/entrySignUp").pause(300)
      // .initializeChecklists()
      .signUp("alice@somewhere.com", "alice123").pause(500)
  },
  "signed in user - can display protocol library": function(client) {
    client
      .verify.containsText("#usernameLink", "alice@somewhere.com")
      .verify.elementPresent("#protocolLibraryLink")
      .click("#protocolLibraryLink").pause(500)
      .verify.elementPresent("#protocolLibrary")
      // TODO:  implement this
      //.verify.containsText("pageTitle", "Protocol Library")
  },
  "signed in user - can see public lists in library": function(client) {
    client
      .verify.elementPresent("#protocolLibraryItems")
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1)")
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1) .protocolName")
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1) .protocolCreator")
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1) .previewButton")
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1) .cloneButton")
      .verify.elementPresent("#lists .listItem:nth-child(1)")
      .verify.elementNotPresent("#lists .listItem:nth-child(2)")
  },
  "signed in user - can not see unpublished private lists in library": function(client) {
    client
      .click("#newListButton").pause(300)
      .verify.containsText("#lists .listItem:nth-child(1)", "List A")
      .verify.elementNotPresent("#protocolLibraryItems .libraryItem:nth-child(4)")
  },
  "signed in user - can publish list to library (by making it public)": function(client) {
    client
      .click("#lists .listItem:nth-child(1)").pause(300)
      .click("#checklistConfig").pause(300)
      .verify.visible("#configListModal")

      .verify.elementPresent("#publicListButton")
      .verify.elementPresent("#privateListButton")

      .click("#publicListButton").pause(200)

      .clearValue("#listNameInput")
      .setValue("#listNameInput", "Public List")
      .click("#saveListButton").pause(300)

      .click("#protocolLibraryLink").pause(300)
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(4)")
      .verify.containsText("#protocolLibraryItems .libraryItem:nth-child(4) .protocolName", "Public List")
      .verify.containsText("#lists .listItem:nth-child(1)", "Public List")
      .verify.containsText("#lists .listItem:nth-child(2)", "List B")

      .click("#logoutButton").pause(300)
  },


  "signed in user - can clone protocol from library": function(client) {
    client
      .url("http://localhost:3000/entrySignUp")
      .signUp("betty@somewhere.com", "betty123")
      .verify.elementPresent("#lists .listItem:nth-child(1)")
      .verify.elementNotPresent("#lists .listItem:nth-child(2)")
      .click("#protocolLibraryLink").pause(300)
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(4) .protocolName", "Public List")
      .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(4) .cloneButton")
      .click("#protocolLibraryItems .libraryItem:nth-child(4) .cloneButton").pause(400)
      .verify.elementPresent("#lists .listItem:nth-child(1)")
      .verify.elementPresent("#lists .listItem:nth-child(2)")
      .verify.containsText("#lists .listItem:nth-child(1)", "List A")
      .verify.containsText("#lists .listItem:nth-child(2)", "Public List")
      .click("#logoutButton").pause(300)
  },
  "anonymous user - can view public checklistPage with URL" : function (client) {
    client
      .url("http://localhost:3000/protocols")
        .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1)")
        .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1) .previewButton")
        .verify.elementPresent("#protocolLibraryItems .libraryItem:nth-child(1) .protocolName")
        .verify.containsText("#protocolLibraryItems .libraryItem:nth-child(1) .protocolName", "Collect Blood Specimen")
        .click("#protocolLibraryItems .libraryItem:nth-child(1) .previewButton").pause(300)

        .verify.visible("#checklistPage")
        .verify.visible("#checklistTitle")
        .verify.visible("#checklistTitle")
        .verify.containsText("#checklistTitle", "Collect Blood Specimen")
        .verify.visible("#checklistPage .taskItem:nth-child(1)")
        .verify.visible("#checklistPage .taskItem:nth-child(1) .taskInput")
        .verify.attributeEquals("#checklistPage .taskItem:nth-child(1) .taskInput", "placeholder", "Step 1a:  Assemble equipment for collecting blood.")
  },
  after: function (client){
    client
      .dropEntryUsers()
      .end();
  }
};
