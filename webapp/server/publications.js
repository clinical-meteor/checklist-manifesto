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


Meteor.publish('tasks', function() {
  if(this.userId){
    return Tasks.find({$or:[
      {ownerId: this.userId},
      {public: true}
      ]});
  }else{
    return Tasks.find({public: true});
  }
});
