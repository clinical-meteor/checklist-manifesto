


Template.sidebarMenu.rendered = function() {
  this.find('#todosLists a')._uihooks = {
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


Template.sidebarMenu.helpers({
  getConnectionStatus: function () {
    return Meteor.status().status;
  },
  email: function() {
    return Meteor.user().emails[0].address;
  },
  lists: function() {
    return Lists.find();
  },
  activeListClass: function() {
    var current = Router.current();
    if (current.route.name === 'todosListPage' && current.params._id === this._id) {
      return 'active';
    }
  }
});
