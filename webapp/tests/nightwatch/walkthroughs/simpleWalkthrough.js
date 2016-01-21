// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  tags: ['simple', 'static'],
  "A. Sign In Page" : function (client) {
    client
      .url("http://localhost:3000/entrySignUp")
      .resizeWindow(1024, 768)
      .waitForPage("#entrySignUp")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/A-signInPage.png")
      .reviewSignUpPage()
      .verify.elementNotPresent("#logoutButton")
      .signUp("carl@somewhere.com", "carl123").pause(1000)
  },
  "B. Home Page": function (client){
    client
      .waitForPage("#checklistPage")
      .reviewMainLayout()
      .reviewSidebar()
  },
  "B. Static Pages": function (client){
    client
      .click("#aboutButton")
      .waitForPage("#aboutPage")

      .click("#eulaButton")
      .waitForPage("#eulaPage")

      .click("#privacyButton")
      .waitForPage("#privacyPage")
  },
  "D. Logout": function(client){
    client
      .verify.elementPresent("#logoutButton")
      .click("#logoutButton").pause(300)
      .verify.containsText("#usernameLink", "Sign In")
      .verify.elementNotPresent("#logoutButton")
  },
  after: function(client){
    client
      .dropEntryUsers()
      .end();
  }
};
