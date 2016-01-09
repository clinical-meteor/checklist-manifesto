Session.setDefault('menuOpen', false);
Session.setDefault('userMenuOpen', false);



//==============================================================================
// TEMPLATE CONSTRUCTORS

Template.appBody.rendered = function() {
  if (Meteor.isCordova) {
    // set up a swipe left / right handler
    this.hammer = new Hammer(this.find('#appBody'));
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

Template.appBody.destroyed = function() {
  if (Meteor.isCordova) {
    this.hammer.destroy();
  }
};


//==============================================================================
// TEMPLATE OUTPUTS

Template.appBody.helpers({

  // We use #each on an array of one item so that the "list" template is
  // removed and a new copy is added when changing lists, which is
  // important for animation purposes. #each looks at the _id property of it's
  // items to know when to insert a new item and when to update an old one.
  thisArray: function() {
    return [this];
  },
  menuOpen: function() {
    return Session.get('menuOpen') && 'menu-open';
  },
  userMenuOpen: function() {
    return Session.get('userMenuOpen');
  },

});



//==============================================================================
// TEMPLATE INPUTS

Template.appBody.events({
  // close the menu when a list is selected
  'click #sidebarMenu a': function() {
    Session.set('menuOpen', false);
  },
  'click .sidebarMenuToggle': function() {
    Session.set('menuOpen', ! Session.get('menuOpen'));
  },

  'click .contentOverlay': function(event) {
    Session.set('menuOpen', false);
    event.preventDefault();
  },
  'click #menu a': function() {
    Session.set('menuOpen', false);
  }
});
