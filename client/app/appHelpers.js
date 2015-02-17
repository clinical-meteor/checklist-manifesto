Template.registerHelper("connected", function(argument){
  return Meteor.status().connected;
});
Template.registerHelper("userEmailAddress", function(argument){
  return Meteor.user().emails[0].address;
});
