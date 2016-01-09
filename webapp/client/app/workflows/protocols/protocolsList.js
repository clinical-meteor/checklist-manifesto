Router.route("/protocols", {
  template: "protocolLibrary",
  name: "protocolLibrary"
});


Template.protocolLibrary.helpers({
  lists: function() {
    return Lists.find();
  }
});

Template.protocolLibrary.events({
  "click #event": function(event, template){

  }
});
