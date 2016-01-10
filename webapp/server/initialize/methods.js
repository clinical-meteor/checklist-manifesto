Meteor.methods({
  initializeLists: function (){
    console.log('Initializing Lists', Lists.find().fetch());

  },
  dropChecklists: function (){
    console.log('Dropping Checklists', Lists.find().fetch());
    Lists.find().forEach(function(list){
      Lists.remove({_id: list._id});
    });
    Todos.find().forEach(function(task){
      Todos.remove({_id: task._id});
    })
  }
});
