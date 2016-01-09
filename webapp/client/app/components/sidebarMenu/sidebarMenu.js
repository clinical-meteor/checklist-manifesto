


Template.sidebarMenu.rendered = function() {
  this.find('#sidebarMenuContents a')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        this.remove();
      });
    }
  };
};


Template.sidebarMenu.events({
  "click #usernameLink": function(){
    if (!Meteor.user()) {
      Router.go('/entrySignIn');
    }
  },
  "click #protocolLibraryLink": function (event, template){
     Router.go('/protocols');
  },
  'click #logoutButton': function() {
    Meteor.logout();

    // if we are on a private list, we'll need to go to a public one
    var current = Router.current();
    if (current.route.name === 'checklistPage' && current.data().userId) {
      Router.go('checklistPage', Lists.findOne({userId: {$exists: false}}));
    }
  },
  'click #newListButton': function() {
    Router.go('checklistPage', Lists.createNew());
  }
});

Template.sidebarMenu.helpers({
  getUsername: function () {
    if (Meteor.user()) {
      if (Meteor.user().emails[0]) {
        return Meteor.user().emails[0].address;
      } else {
        return "---";
      }
    } else {
      return "Sign In";
    }
  },
  getConnectionStatus: function () {
    return Meteor.status().status;
  },
  email: function() {
    return Meteor.user().emails[0].address;
  },
  lists: function() {
    return Lists.find({userId: Meteor.userId()});
  },
  activeListClass: function() {
    var current = Router.current();
    if (current.route.name === 'checklistPage' && current.params._id === this._id) {
      return 'active';
    }
  }
});
