
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



Template.registerHelper("connected", function(argument){
  return Meteor.status().connected;
});
