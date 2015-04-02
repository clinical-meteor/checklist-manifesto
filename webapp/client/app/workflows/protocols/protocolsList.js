Router.route("/protocols", {
  template: "protocolsListPage",
  name: "protocolsListPage"
});


Template.protocolsListPage.helpers({
  lists: function() {
    return Lists.find();
  }
});

Template.protocolsListPage.events({
  "click #event": function(event, template){

  }
});
