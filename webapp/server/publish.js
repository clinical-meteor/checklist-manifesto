Meteor.publish('publicLists', function() {
  return Lists.find({userId: {$exists: false}});
});

Meteor.publish('privateLists', function() {
  if (this.userId) {
    return Lists.find({userId: this.userId});
  } else {
    this.ready();
  }
});


Meteor.publish('todos', function() {
  if(this.userId){
    return Todos.find({$or:[
      {ownerId: this.userId},
      {public: true}
      ]});
  }else{
    return Todos.find({public: true});
  }
});
