
// - it should resize templates when window resized
// - it should resize templates when device orientation changes


// Gagarin Verification Tests
// - it should display in fullscreen mode
// - it should display in sidebar mode
// - it should display in page mode
// - it should display in fence mode
// - it should specify a northFence for templates
// - it should specify a southFence for templates
// - it should specify an eastFemce for templates
// - it should specify a westFence for templates
// - it should hide/show sidebar

// - swipe right should open menu on phone and portrait tablet
// - swipe left should close menu on phone and portrait tablet

// Nightwatch Validation Tests
// - it should display menu and fullscreen offset on phone instead of in a mode
// - it should only display page mode on tablet when in landscape mode
// - it should display menu and fullscreen offset on tablet when in portrait mode

// - it should hide/show navbars
// - it should hide/show footer
// - it should hide/show header

module.exports = {
  tags: ['layout'],
  before: function(client){
    // this depends on the accounts-housemd package
    client
      .url("http://localhost:3000")
      .initializeLists()
      .pause(500)
  },
  "background color should be the theme color": function(client){
    client
      // .verify.elementPresent("#navbarHeader")
  },
  // "it should hide/show navbar": function(client){
  //   client
  //     .resizeWindow(1024,768)
  //     .verify.elementPresent("#navbarHeader")
  //     .verify.elementPresent("#navbarFooter")
  //     .keys(client.Keys.CONTROL)
  //     .keys(client.Keys.COMMAND)
  //     .keys(client.Keys.N)
  //     .pause(300)
  //     .keys(client.Keys.NULL)
  //     .verify.elementNotPresent("#navbarHeader")
  //     .verify.elementNotPresent("#navbarFooter")
  //     .keys(client.Keys.CONTROL)
  //     .keys(client.Keys.COMMAND)
  //     .keys(client.Keys.N)
  //     .pause(300)
  //     .keys(client.Keys.NULL)
  //     .verify.elementPresent("#navbarHeader")
  //     .verify.elementPresent("#navbarFooter")
  // },
  "sidebar should be visible in landscape and desktop modes" : function (client) {
    client
      .resizeWindow(1024, 768)
      .verify.elementPresent("#sidebar")
      .verify.elementPresent("#usernameLink")
      .verify.elementPresent("#mainPanel")
  },
  "sidebar should be hidden in phone mode" : function (client) {
    client
      .resizeWindow(480, 800)
        .verify.visible("#sidebarToggle")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
  },
  "sidebar should be hidden in portrait mode" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#sidebarToggle")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
  },
  "sidebar should be visible in landscape mode" : function (client) {
    client
      .resizeWindow(1024, 768)
        .verify.visible("#sidebarToggle")
        .verify.elementPresent("#panelSurface")
        .verify.cssProperty("#panelSurface", "left", "270px")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
  },
  "anonymous user - sidebar toggle opens and closes in phone mode" : function (client) {
    client
      .resizeWindow(480, 800)
        .verify.visible("#sidebarToggle")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
        .click("#sidebarToggle").pause(500)
        .verify.cssProperty("#panelSurface", "left", "0px")
        .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 270, 0)")
        .click("#sidebarToggle").pause(500)
  },
  "anonymous user - sidebar toggle opens and closes in portrait mode" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#sidebarToggle")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
        .click("#sidebarToggle").pause(500)
        .verify.cssProperty("#panelSurface", "left", "0px")
        .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 270, 0)")
        .click("#sidebarToggle").pause(500)
  },
  // "anonymous user - sidebar toggle switches between pagescreen and fullscreen in landscape mode" : function (client) {
  //   client
  //     .resizeWindow(1024, 768)
  //       .verify.visible("#sidebarToggle")
  //       .verify.elementPresent("#panelSurface")
  //       .verify.cssProperty("#panelSurface", "left", "0px")
  //       .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 270, 0)")
  //       .click("#sidebarToggle").pause(500)
  //       .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
  // },
  after: function(client){
    client.end();
  }
}
