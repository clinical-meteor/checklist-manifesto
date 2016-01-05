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
    // this depends on the accounts-housemd package
    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 768)
      .meteorCall("removeAllUsers", false, false)
      .pause(500)
  },
  //beforeEach: function(client){
  //  client.meteorCall("removeAllUsers", false, false).pause(500)
  //},
  "new user should be able to register on desktop" : function (client) {
    var newUserId = false;
    client
      .url("http://localhost:3000/entrySignUp")
      .reviewSignInPage()
  },
  "company logo should display on sign-in page" : function (client) {
    client
      .expect.element("#logo").to.be.visible
  },
  "error messages should be empty by default" : function (client) {
    client
      .expect.element("#errorMessages").to.not.be.visible
  },
  "user should be able to request be able to create new account" : function (client) {
    client
      .expect.element("#signUpPageEmailInput").to.be.visible
      .expect.element("#signUpPagePasswordInput").to.be.visible
      .expect.element("#signUpPagePasswordInput").to.be.visible
      .expect.element("#signUpPageJoinNowButton").to.be.visible
  },
  "guest should be notified if email already exists" : function (client) {
    client
      //.confirmUserExists()
      .setValue("signUpPageEmailInput", "janedoe@symptomatic.io")
      .click("signUpPageEmailInput").pause(500)
 	  .expect.element("#signUpPageErrorMessages").to.be.visible
 	  .expect.element("#signUpPageErrorMessages").to.have.text("That email is already registered.")
  },

  "guest should be notified if passwords do not match" : function (client) {
    client
      .expect.element("#signUpPageErrorMessages").to.not.be.visible
	  .setValue("signUpPagePasswordInput", "janedoe123")
	  .setValue("signUpPageConfirmPasswordInput", "janedoe123")
	  .expect.element("#signUpPageErrorMessages").to.be.visible
	  .expect.element("#signUpPageErrorMessages").to.have.text("Passwords do not match.")
  },
  "guest should be notified if email is not correctly formatted" : function (client) {
    client
      .expect.element("#signUpPageErrorMessages").to.not.be.visible
      .setValue("signUpPageEmailInput", "janedoe@symptomatic")
      .click("signUpPageEmailInput").pause(500)
 	  .expect.element("#signUpPageErrorMessages").to.be.visible
 	  .expect.element("#signUpPageErrorMessages").to.have.text("That email is already registered.")
  },
  "when new user fills out form and registers, new user should get created" : function (client) {
    client
      .collectionIsEmpty("Meteor.users")
	  .collectionCount("Meteor.users", 0)
      .setValue("signUpPageEmailInput", "janedoe@symptomatic.io")
	  .setValue("signUpPagePasswordInput", "janedoe123")
	  .setValue("signUpPageConfirmPasswordInput", "janedoe123")
	  .click("signUpPageEmailInput").pause(500)
	  .collectionIsNotEmpty("Meteor.users")
	  .collectionCount("Meteor.users", 1)
	  .collectionContains("Meteor.users", {'username', "janedoe@symptomatic.io"}, 1)
  },
  "when user signs in with username and password, should redirect to home page" : function (client) {
    client
	  collectionIsEmpty("Meteor.users")
	  .setValue("signUpPagePasswordInput", "janedoe123")
	  .setValue("signUpPageConfirmPasswordInput", "janedoe123")
	  .click("signUpPageEmailInput").pause(500)
	  .expect.element("#homePage").to.be.visible // this seems awefully restrictive 
  },
  "user should be able to request reset password email" : function (client) {
    client
	  .expect.element("#resetPasswordButton").to.be.visible
  },
  "existing user should be able to sign in on desktop" : function (client) {
    client
      .resizeWindow(1600, 1200)
      .signIn("janedoe@symptomatic.io", "janedoe123")
      .expect.element("#homePage").to.be.visible.
  },
  "existing user should be able to sign in on tablet" : function (client) {
    client
	  .resizeWindow(1024, 768)
	  .signIn("janedoe@symptomatic.io", "janedoe123")
	  .expect.element("#homePage").to.be.visible.
  },
  "existing user should be able to sign in on phone" : function (client) {
    client
	  .resizeWindow(320, 960)
	  .signIn("janedoe@symptomatic.io", "janedoe123")
	  .expect.element("#homePage").to.be.visible.
  },
};



