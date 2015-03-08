// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "Accounts SignIn" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)

      .verify.elementPresent('#appBody')
      .verify.elementPresent('#sidebarMenu')
      .verify.elementPresent('#signInButton')

      .click("#signInButton").pause(500)

      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== A. SIGN IN PAGE")

      .verify.elementPresent("#entrySignIn")
      .verify.elementPresent("#signInPageTitle")
      .verify.elementPresent("#signInPageMessage")
      .verify.elementPresent("#signInPageEmailInput")
      .verify.elementPresent("#signInPagePasswordInput")
      .verify.elementPresent("#signInToAppButton")
      .verify.elementPresent("#needAnAccountButton")

      .verify.containsText("#signInPageTitle", "Sign In.")
      .verify.containsText("#signInPageMessage", "Signing in allows you to view private lists")

      .setValue('#signInPageEmailInput', "janedoe@gmail.com")
      .setValue('#signInPagePasswordInput', "janedoe")

      .click("#signInToAppButton").pause(200)


      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== B. FOO")


      .verify.elementPresent('#contentContainer')

      .end();
  }
};
