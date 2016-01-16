Session.setDefault('resize', null);

Meteor.startup(function(){
  $(window).resize(function(evt) {
    Session.set("resize", new Date());

    if($(window).width() > 960){
      Session.set('menuOpen', false);
    }

  });
});

Template.registerHelper('resized', function(){
  return Session.get('resize');
});
