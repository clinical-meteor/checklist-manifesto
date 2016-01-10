

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
    if (Meteor.user()) {
      var selectedListId = this._id;
      Lists.insert({
        name: this.name,
        creator: Meteor.user().emails[0].address,
        userId: Meteor.userId(),
        public: false,
        incompleteCount: this.incompleteCount
      }, function(error, newListId){
        console.log('List Cloned to ' + newListId);
        Todos.find({listId: selectedListId}).forEach(function(task){
          Todos.insert({
            createdAt: new Date(),
            listId: newListId,
            ordinal: task.ordinal,
            public: task.public,
            text: task.text
          });
        });
        Router.go('/lists/' + newListId);
      });
    }
  }
});
