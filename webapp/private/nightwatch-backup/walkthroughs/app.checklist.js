// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "Checklist" : function (client) {
    client
      .url("http://localhost:3000/entrySignIn")
      .resizeWindow(1024, 768)

      //============================================================================================
      .sectionBreak("A. Sign In Page")

      .waitForPage("#entrySignIn")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/A-signInPage.png")
      .reviewSignInPage()
      .verify.elementNotPresent("#logoutButton")
      .signIn("janedoe@gmail.com", "janedoe123")


      //============================================================================================
      .sectionBreak("B. Home Page")

      .waitForPage("#checklistPage")
      .reviewMainLayout()
      .reviewSidebar()

      //============================================================================================
      .sectionBreak("C. Static Pages")

      .verify.elementPresent("#checklistPage")
      .verify.elementPresent("#listPanelHeader")
      .verify.elementPresent("#listPanelFooter")

      .verify.elementPresent("#listPanelItems")
      .verify.elementPresent("#listPanelItems .taskItem:nth-child(1) .taskInput")
      .verify.elementPresent("#listPanelItems .taskItem:nth-child(7) .taskInput")
      .verify.elementNotPresent("#listPanelItems .taskItem:nth-child(8) .taskInput")

      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(1) .taskInput", "value", "Simplicity Equals Productivity")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(7) .taskInput", "value", "Data on the Wire")


      .verify.elementPresent("#newTaskInput")
      .verify.attributeEquals("#newTaskInput", "value", "")

      .setValue('#newTaskInput', "Foo").pause(1000)

      .setValue('#newTaskInput', String.fromCharCode(13)).pause(10000)

      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(1) .taskInput", "value", "Foo")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(2) .taskInput", "value", "Simplicity Equals Productivity")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(8) .taskInput", "value", "Data on the Wire")


      .end();
  }
};
