// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "App Layout" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)

      .verify.elementPresent('#appBody')
      .verify.elementPresent('#sidebarMenu')
      .verify.elementPresent('#entryButtons')
      .verify.elementPresent('#signInButton')
      .verify.elementPresent('#signUpButton')

      .click("#signInButton").pause(200)

      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== A. SIGN UP PAGE")

      .verify.elementPresent("#entrySignIn")
      .verify.elementPresent("#signInPageEmailInput")
      .verify.elementPresent("#signInPagePasswordInput")
      .verify.elementPresent("#signInToAppButton")

      .verify.containsText("#signInPageTitle", "Sign In.")
      .verify.containsText("#signInPageMessage", "Signing in allows you to view private lists")

      .setValue('#signInPageEmailInput', "janedoe@gmail.com")
      .setValue('#signInPagePasswordInput', "janedoe")

      .click("#signInToAppButton").pause(200)


      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== B. FOO")

      .verify.elementPresent("#currentUserEmail")
      .verify.elementPresent("#todosListPage")

      .click('#currentUserEmail').pause(100)
      .verify.elementPresent("#aboutButton")
      .verify.elementPresent("#glossaryButton")
      .verify.elementPresent("#eulaButton")
      .verify.elementPresent("#privacyButton")
      .verify.elementPresent("#logoutButton")

      .click("#aboutButton").pause(100)
      .verify.elementPresent("#aboutPage")

      .click("#glossaryButton").pause(100)
      .verify.elementPresent("#glossaryPage")

      .click("#eulaButton").pause(100)
      .verify.elementPresent("#eulaPage")

      .click("#privacyButton").pause(100)
      .verify.elementPresent("#privacyPage")



      .end();
  }
};
