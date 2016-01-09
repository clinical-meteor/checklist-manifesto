



Meteor.publish('lists', function() {
  if (this.userId) {
    return Lists.find({$or: [
      {userId: this.userId},
      {public: true}
    ]});
  } else {
    return Lists.find({public: true});
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
