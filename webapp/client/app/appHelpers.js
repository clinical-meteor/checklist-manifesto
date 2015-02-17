Template.registerHelper("connected", function(argument){
  return Meteor.status().connected;
});

Template.registerHelper("userEmailAddress", function(argument){
  return Meteor.user().emails[0].address;
});
Template.registerHelper("userName", function(argument){
  return Meteor.user().profile.name;
});


Template.registerHelper("isLoggedIn", function(argument){
  if(Meteor.user()){
    return true;
  }else{
    return false;
  }
});
Template.registerHelper("isOnRoute", function(routeUrl){
  if (Router.current()) {
    if(Router.current().url.match(routeUrl)){
      return true;
    } else {
      return false;
    }
  }
});
