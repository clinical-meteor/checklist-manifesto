Router.route("/protocols", {
  template: "protocolLibrary",
  name: "protocolLibrary"
});


Template.protocolLibrary.helpers({
  lists: function() {
    return Lists.find({public: true});
  }
});

Template.protocolLibrary.events({
  "click #event": function(event, template){

  }
});
