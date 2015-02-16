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

      .verify.elementPresent('#entryButtons')
      .verify.elementPresent('#signInButton')
      .verify.elementPresent('#signUpButton')

      .verify.elementPresent('#todosLists')
      .verify.elementPresent('#newListButton')
      .verify.elementPresent('#todosLists .listItem:nth-child(2)')

      .verify.elementPresent('#contentContainer')
      .verify.elementPresent("#todosListPage")
      .verify.elementPresent("#listPanelHeader")
      .verify.elementPresent("#listPanelTitle")
      .verify.elementPresent("#listPanelItemCount")
      .verify.elementPresent("#listPanelLockIcon")
      .verify.elementPresent("#listPanelDeleteIcon")
      .verify.elementPresent("#listPanelNewItemIcon")
      .verify.elementPresent("#listPanelNewItemInput")
      .verify.elementPresent("#listPanelItems")
      .verify.elementPresent("#listPanelItems .taskItem:nth-child(1)")

      .verify.containsText("#listPanelTitle", "Grove Installation")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(1) .taskInput", "value", "Connect lights and sensors.")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(2) .taskInput", "value", "Put rock wool in net pots with hydroton clay.")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(3) .taskInput", "value", "Place seeds in rock wool.")

      .end();
  }
};
