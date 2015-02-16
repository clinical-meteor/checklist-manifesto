Session.setDefault('resize', null);

Meteor.startup(function(){
  $(window).resize(function(evt) {
    Session.set("resize", new Date());
  });
});


Template.registerHelper('resized', function(){
  return Session.get('resize');
});
