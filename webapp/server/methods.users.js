Meteor.methods({
  dropTestUsers:function (){
     Meteor.users.forEach(function(user){
       Meteor.users.remove({_id: user._id});
     })
  }
});
