
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
  tags: ['checklist'],
  before: function(client){
    // this depends on the accounts-housemd package
    client
      .url("http://localhost:3000")
      .initializeLists()
      .pause(500)
  },
  "it should hide/show navbar": function(client){
    client
      .windowSize(1024,768)
      .expect.element("#navbarHeader").to.be.visible
      .expect.element("#navbarFooter").to.be.visible
      .sendKeys('cmd-ctrl-n')
      .pause(300)
      .expect.element("#navbarHeader").to.not.be.visible
      .expect.element("#navbarFooter").to.not.be.visible
      .sendKeys('cmd-ctrl-n')
      .pause(300)
      .expect.element("#navbarHeader").to.be.visible
      .expect.element("#navbarFooter").to.be.visible
  },
  "sidebar should be visible in landscape and desktop modes" : function (client) {
    var newUserId = false;
    client
      .resizeWindow(1024, 768)
      .expect.element("#sidebar").to.be.visible
      .expect.element("#signInLink").to.be.visible
      .expect.element("#mainPanel").to.be.visible
  },
  "sidebar should be hidden in portrait and phone mode" : function (client) {
    var newUserId = false;
    client
      .resizeWindow(480, 690)
        .expect.element("#sidebar").to.be.hidden
        .expect.element("#signInLink").to.be.hidden
        .expect.element("#mainPanel").to.be.visible
      .resizeWindow(480, 690)
        .expect.element("#sidebar").to.be.hidden
        .expect.element("#signInLink").to.be.hidden
        .expect.element("#mainPanel").to.be.visible
  },
}