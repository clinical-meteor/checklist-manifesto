Session.setDefault('menuOpen', false);
Session.setDefault('userMenuOpen', false);


//==============================================================================
// TEMPLATE CONSTRUCTORS

Template.appLayout.rendered = function() {
  if (Meteor.isCordova) {
    // set up a swipe left / right handler
    this.hammer = new Hammer(this.find('#appLayout'));
    this.hammer.on('swipeleft swiperight', function(event) {
      if (event.gesture.direction === 'right') {
        Session.set('menuOpen', true);
      } else if (event.gesture.direction === 'left') {
        Session.set('menuOpen', false);
      }
    });
  }

  this.find('#contentContainer')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    // removeElement: function(node) {
    //   $(node).fadeOut(function() {
    //     this.remove();
    //   });
    // }
  };
};

Template.appLayout.destroyed = function() {
  if (Meteor.isCordova) {
    this.hammer.destroy();
  }
};


//==============================================================================
// TEMPLATE OUTPUTS

Template.appLayout.helpers({

  // We use #each on an array of one item so that the "list" template is
  // removed and a new copy is added when changing lists, which is
  // important for animation purposes. #each looks at the _id property of it's
  // items to know when to insert a new item and when to update an old one.
  thisArray: function() {
    return [this];
  },
  menuOpen: function() {
    if (Session.get('menuOpen')) {
      return 'menu-open';
    }
  },
  userMenuOpen: function() {
    return Session.get('userMenuOpen');
  },

});



//==============================================================================
// TEMPLATE INPUTS

Template.appLayout.events({
  // close the menu when a list is selected
  'click #sidebar a': function() {
    Session.set('menuOpen', false);
  },
  'click .sidebarMenuToggle': function() {
    if (Session.get('appWidth') < 1024) {
      Session.toggle('menuOpen');
    }
  },

  'click .contentOverlay': function(event) {
    Session.set('menuOpen', false);
    event.preventDefault();
  },
  'click #menu a': function() {
    Session.set('menuOpen', false);
  }
});

//==============================================================================
// TEMPLATE HELPERS

Template.registerHelper("connected", function(argument){
  return Meteor.status().connected;
});
