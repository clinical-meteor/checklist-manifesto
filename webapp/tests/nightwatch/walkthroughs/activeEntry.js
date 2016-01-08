// when new user fills out form and registers, new user should get created
// when user signs in with username and password, should redirect to home page
// newly created user record should have role
// newly created user record should have profile
// newly created user record should have full, preferred, and family name
// user object should return first name
// user object should return last name
// user should be able to request reset password email
// user should be able to request be able to create new account
// guest should be notified if username already exists
// guest should be notified if passwords do not match
// guest should be notified if email is not correctly formatted
// new user should be able to register on desktop
// new user should be able to register on tablet
// existing user should be able to sign in on desktop
// existing user should be able to sign in on tablet
// existing user should be able to sign in on phone
// company logo should display on sign//in page



module.exports = {
  tags: ['users', 'entry'],
  before: function(client){
    client
      .url("http://localhost:3000/entrySignUp")
      .initializeUsers()
      .resizeWindow(1024, 768)
  },
  "new user should be able to register on desktop" : function (client) {
    client
      .verify.elementPresent("#entrySignUp")
      .verify.elementPresent("#signUpPageTitle")
      .verify.elementPresent("#signUpPageMessage")
      .verify.elementPresent("#signUpPageEmailInput")
      .verify.elementPresent("#signUpPagePasswordInput")
      .verify.elementPresent("#signUpPageJoinNowButton")
      .verify.elementPresent("#signUpPageSignInButton")
  },
  "company logo should display on sign-in page" : function (client) {
    client
      .verify.elementPresent("#entrySignUp")
      .verify.elementPresent("#entryAppLogo")
  },
  "user should be able to request be able to create new account" : function (client) {
    client.verify.elementPresent("#signUpPageEmailInput")
      .verify.elementPresent("#signUpPagePasswordInput")
      .verify.elementPresent("#signUpPagePasswordInput")
      .verify.elementPresent("#signUpPageJoinNowButton")
  },

  "guest should be notified if password is insecure" : function (client) {
    client
      .clearValue("input")
      .verify.elementPresent("#signUpPagePasswordInput")
      .verify.cssProperty('#signUpPagePasswordInput', 'border', '1px solid gray')
      .setValue("#signUpPagePasswordInput", "jan")
      .verify.cssProperty('#signUpPagePasswordInput', 'border', '1px solid orange')
      .setValue("#signUpPagePasswordInput", "icedoe123")
      .verify.cssProperty('#signUpPagePasswordInput', 'border', '1px solid green')

      .verify.cssProperty('#signUpPagePasswordConfirmInput', 'border', '1px solid gray')
      .setValue("#signUpPagePasswordConfirmInput", "ja")
      .verify.cssProperty('#signUpPagePasswordConfirmInput', 'border', '1px solid orange')
      .clearValue("#signUpPagePasswordConfirmInput")
      .setValue("#signUpPagePasswordConfirmInput", "janicedoe123")
      .verify.cssProperty('#signUpPagePasswordConfirmInput', 'border', '1px solid green')
  },
  "guest should be notified if passwords do not match" : function (client) {
    client
      .clearValue("#signUpPagePasswordConfirmInput")
      .clearValue("#signUpPagePasswordInput")
      .resetEntry()
      .pause(500)
      .verify.cssProperty('#signUpPagePasswordInput', 'border', '1px solid gray')
      .verify.cssProperty('#signUpPagePasswordConfirmInput', 'border', '1px solid gray')
      .setValue("#signUpPagePasswordInput", "janicedoe123")
      .verify.cssProperty('#signUpPagePasswordInput', 'border', '1px solid green')
      .verify.cssProperty('#signUpPagePasswordConfirmInput', 'border', '1px solid gray')
      .setValue("#signUpPagePasswordConfirmInput", "janicedoe123")
      .verify.cssProperty('#signUpPagePasswordInput', 'border', '1px solid green')
      .verify.cssProperty('#signUpPagePasswordConfirmInput', 'border', '1px solid green')

    // client.verify.elementPresent("#signUpPageErrorMessages")
    //   .verify.elementPresent("#signUpPageErrorMessages")
    //   .verify.containsText("#signUpPageErrorMessages", "Passwords do not match.")
  },
  "guest should be notified if email is not correctly formatted" : function (client) {
    client
      .clearValue("#signUpPageEmailInput")
      .resetEntry()
      .verify.elementPresent("#signUpPageEmailInput")
      .verify.cssProperty('#signUpPageEmailInput', 'border', '1px solid gray')
      .setValue("#signUpPageEmailInput", "janicedoe")
      .verify.cssProperty('#signUpPageEmailInput', 'border', '1px solid orange')
      .setValue("#signUpPageEmailInput", "@symptomatic.io")
      .verify.cssProperty('#signUpPageEmailInput', 'border', '1px solid green')
    // client.verify.elementPresent("#signUpPageErrorMessages")
      //.click("signUpPageEmailInput").pause(500)
      //.verify.elementPresent("#signUpPageErrorMessages")
      //.verify.elementPresent("#signUpPageErrorMessages", "That email is already registered.")
  },
  "when new user fills out form and registers, new user should get created" : function (client) {
    client
      .verify.elementPresent("#entrySignUp")

      .clearValue("#signUpPagePasswordConfirmInput")
      .clearValue("#signUpPagePasswordInput")
      .clearValue("#signUpPageFullNameInput")
      .clearValue("#signUpPageEmailInput")
      .resetEntry()

      .setValue("#signUpPageFullNameInput", "Janice Doe")
      .setValue("#signUpPageEmailInput", "janicedoe@symptomatic.io")
      .setValue("#signUpPagePasswordInput", "janicedoe123")
      .setValue("#signUpPagePasswordConfirmInput", "janicedoe123")

      .click("#signUpPageJoinNowButton").pause(1000)

      .verify.containsText("#usernameLink", "janicedoe@symptomatic.io")
  },
  "user should be able to signout" : function (client) {
    client
      .verify.elementPresent("#logoutButton")
      .click("#logoutButton").pause(300)
      .verify.containsText("#usernameLink", "Sign In")
  },
  "user should be able to request reset password email" : function (client) {
     client
      .url("http://localhost:3000/entrySignIn")
      .verify.elementPresent("#forgotPasswordButton")
      .click("#forgotPasswordButton")
      .verify.elementPresent("#forgotPassword")
      .verify.elementPresent("#signInPageEmailInput")
      .verify.elementPresent("#sendReminderButton")
  },
  "existing user should be able to sign in on desktop" : function (client) {
    client
      .url("http://localhost:3000/entrySignIn")
      .resizeWindow(1600, 1200)
      .verify.containsText("#usernameLink", "Sign In")
      .signIn("janicedoe@symptomatic.io", "janicedoe123").pause(500)
      .verify.containsText("#usernameLink", "janicedoe@symptomatic.io")
      .click("#logoutButton").pause(200)
      .verify.containsText("#usernameLink", "Sign In")
  },
  "existing user should be able to sign in on tablet" : function (client) {
    client
      .url("http://localhost:3000/entrySignIn")
      .resizeWindow(1024, 768)
      .verify.containsText("#usernameLink", "Sign In")
      .signIn("janicedoe@symptomatic.io", "janicedoe123").pause(500)
      .verify.containsText("#usernameLink", "janicedoe@symptomatic.io")
      .click("#logoutButton").pause(200)
      .verify.containsText("#usernameLink", "Sign In")
  },
  "existing user should be able to sign in on phone" : function (client) {
    client
      .url("http://localhost:3000/entrySignIn")
      .resizeWindow(320, 960)
      .verify.containsText("#usernameLink", "Sign In")
      .signIn("janicedoe@symptomatic.io", "janicedoe123").pause(500)
      .verify.containsText("#usernameLink", "janicedoe@symptomatic.io")
      .click("#navbarMenu").pause(300)
      .click("#logoutButton").pause(200)
      .verify.containsText("#usernameLink", "Sign In")
  },
  // "error messages should be empty by default" : function (client) {
  //   client.verify.elementPresent("#errorMessages")
  // },
  // "guest should be notified if email already exists" : function (client) {
  //   client
  //     .setValue("signUpPageEmailInput", "janicedoe@symptomatic.io")
  //     .click("signUpPageEmailInput").pause(500)
  //     .verify.elementPresent("#signUpPageErrorMessages")
  //     .verify.containsText("#signUpPageErrorMessages", "That email is already registered.")
  // },
  after: function(client){
    client
      .dropUsers()
      .end();
  }
};
