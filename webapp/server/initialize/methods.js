Meteor.methods({
  initializeLists: function (){
    console.log('Initializing Lists', Lists.find().fetch());

  }
});
