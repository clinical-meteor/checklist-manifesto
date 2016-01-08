Meteor.methods({
  initializeLists: function (){
    console.log('Initializing Lists', Lists.find().fetch());

  },
  initializeUsers: function (){
    console.log('Initializing Users', Meteor.users.find().fetch());

  },
  dropUsers: function (){
    console.log('Drop Users', Meteor.users.find().fetch());    
  }
});
