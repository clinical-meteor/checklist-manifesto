
//Deps.autorun(function(){
  // if(Meteor.userId()){
  //   Meteor.subscribe('todos', Meteor.userId());
  // }else{
  //   Meteor.subscribe('todos', false);
  // }
//});
//Meteor.subscribe('libraryLists');

Meteor.subscribe('lists'),
Meteor.subscribe('todos')