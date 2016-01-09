

Meteor.publish('libraryLists', function() {
  return Lists.find({$or: [
    {userId: {$exists: false}},
    {public: true}
  ]});
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
