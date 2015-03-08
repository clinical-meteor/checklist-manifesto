// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "App Layout" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)

      .verify.elementPresent('#appBody')
      .verify.elementPresent('#sidebarMenu')
      .verify.elementPresent('#signInButton')

      .verify.elementPresent('#sidebarMenuContents')
      .verify.elementPresent('#newListButton')
      .verify.elementPresent('#sidebarMenuContents .listItem:nth-child(2)')

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

      .verify.containsText("#listPanelTitle", "Meteor Principles")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(1) .taskInput", "value", "Simplicity Equals Productivity")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(2) .taskInput", "value", "Embrace the Ecosystem")
      .verify.attributeEquals("#listPanelItems .taskItem:nth-child(3) .taskInput", "value", "Full Stack Reactivity")

      .end();
  }
};
