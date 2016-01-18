

module.exports = {
  tags: ["checklist"],
  before: function(client){
    client
      .url("http://localhost:3000")
  },
  "signed in user - can view workqueue on desktop" : function (client) {
    client
      .resizeWindow(1600, 1200).pause(300)

        // .verify.visible("#checklistPage .taskItem:nth-child(1)")
  },
  after: function (client){
    client
      .dropEntryUsers()
      .end();
  }
};
