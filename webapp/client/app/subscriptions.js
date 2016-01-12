
//Deps.autorun(function(){
  // if(Meteor.userId()){
  //   Meteor.subscribe('tasks', Meteor.userId());
  // }else{
  //   Meteor.subscribe('tasks', false);
  // }
//});
//Meteor.subscribe('libraryLists');

Meteor.subscribe('lists'),
Meteor.subscribe('tasks')
