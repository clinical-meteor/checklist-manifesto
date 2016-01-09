

Template.libraryItem.helpers({
  getText: function(){
    return this.text;
  },
  checkedClass: function() {
    return this.checked && 'checked';
  },
  editingClass: function() {
    return Session.equals("editingTaskId", this._id) && 'editing';
  }
});

Template.libraryItem.events({
  'click .previewButton': function (){
    Router.go('/lists/' + this._id);
  },
  'click .cloneButton': function (){
    Lists.insert({
      name: this.name,
      creator: Meteor.user().emails[0].address,
      public: false,
      incompleteCount: this.incompleteCount
    }, function(error, result){
      Todos.find({listId: currentList._id}).forEach(function(task){
        Todos.insert({
          createdAt: new Date(),
          listId: result,
          ordinal: task.ordinal,
          public: task.public,
          text: task.text
        });
      });
      Router.go('/lists/' + result);
    });
  }
});
