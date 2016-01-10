Session.setDefault('editingList', false);
Session.setDefault('newTaskRibbonVisible', false);


//==============================================================================
// TEMPLATE OUTPUTS

Template.checklistPage.helpers({
  isNewTaskRibbonVisible: function () {
    return Session.get('newTaskRibbonVisible');
  },
  list: function(){
    return Lists.findOne(Session.get('selectedListId'));
  },
  tasks: function() {
    return Tasks.find({listId: this._id}, {sort: {ordinal : 1}});
  },
  editing: function() {
    return Session.get('editingList');
  }
});



//==============================================================================
// TEMPLATE INPUTS

Template.checklistPage.events({
  'click #showNewTaskToggle': function (attribute) {
    Session.toggle('newTaskRibbonVisible');
  },
  'click #newItemAddIcon': function () {
    saveList(this);
  },

  'click #checklistConfig': function (event, template) {
    // trigger our modal dialog
    $('#configListModal').modal("show");

    // this is stuff we do when the modal closes
    $('#configListModal').on('hidden.bs.modal', function(e) {
      console.log('closing configListModal');

      if(Session.get('deleteListConfirmed')){
        console.log('delete list', Session.get('selectedListId'));

        Tasks.find({listId: this._id}).forEach(function(task) {
          Tasks.remove(task._id);
        });
        Lists.remove(Session.get('selectedListId'));

        Session.set('selectedListId', false);
        Session.set('deleteListConfirmed', false);
        Router.go('home');
      }
    });
  },
  'click .js-cancel': function() {
    Session.set('editingList', false);
  },

  'keydown input[type=text]': function(event) {
    // ESC
    if (27 === event.which) {
      event.preventDefault();
      $(event.target).blur();
    }
  },

  'blur input[type=text]': function() {
    Session.set('editingList', false);
  },

  'submit #checklistTitleForm': function(event, template) {
    event.preventDefault();

    Lists.update(this._id, {$set: {name: template.$('[name=name]').val()}});
    Session.set('editingList', false);
  },

  // 'change .list-edit': function(event, template) {
  //   if ($(event.target).val() === 'edit') {
  //     editList(this, template);
  //
  //   } else if ($(event.target).val() === 'delete') {
  //     if (! deleteList(this, template)) {
  //       // reset the select
  //       event.target.selectedIndex = 0;
  //     }
  //   } else {
  //     toggleListPrivacy(this, template);
  //   }
  // },

  // 'click .js-edit-list': function(event, template) {
  //   editList(this, template);
  // },
  'click #checklistTitle': function(event, template) {
    editList(this, template);
  },

  // 'click .js-toggle-list-privacy': function(event, template) {
  //   toggleListPrivacy(this, template);
  // },

  // 'click .js-delete-list': function(event, template) {
  //   deleteList(this, template);
  // },

  'click .js-task-add': function(event, template) {
    template.$('.js-task-new input').focus();
  },

  'keyup #newTaskInput': function(event) {
    // keyCode 13 is the 'Enter' key
    if(event.keyCode == 13) {
      saveList(this);
    }
  }
});




//==============================================================================
// TEMPLATE HELPERS

saveList = function(record){
  var newTask = {
    listId: Session.get('selectedListId'),
    text: $('#newTaskInput').val(),
    checked: false,
    public: true,
    createdAt: new Date(),
    ordinal: 0
  }

  // if(Meteor.userId()){
  //   newTask.public = false;
  // }else{
  //   newTask.public = true;
  // }

  // bump the ordinal of all the tasks
  Tasks.find({listId: Session.get('selectedListId')}).forEach(function(task){
    Tasks.update({_id: task._id}, {$set: {
      ordinal: task.ordinal + 1
    }})
  });

  console.log('newTask', newTask);

  var result = Tasks.insert(newTask);
  console.log('newTask', Tasks.findOne({_id: result}));

  Lists.update(record._id, {$inc: {incompleteCount: 1}});
  $('#newTaskInput').val('');

  Session.set('newTaskRibbonVisible', false);
}

editList = function(list, template) {
  Session.set('editingList', true);

  // wait for the template to redraw based on the reactive change
  Tracker.afterFlush(function() {
    // template.$('.js-edit-form input[type=text]').focus();
    template.$('#checklistTitleForm input[type=text]').focus();
  });
};

// var deleteList = function(list, template) {
//
//   console.log('deleteList', list);
//   // ensure the last public list cannot be deleted.
//   // if (! list.userId && Lists.find({userId: {$exists: false}}).count() === 1) {
//   //   return alert("Sorry, you cannot delete the final public list!");
//   // }
//
//   Tasks.find({listId: list._id}).forEach(function(task) {
//     Tasks.remove(task._id);
//   });
//   Lists.remove(list._id);
//
//   Router.go('home');
// };

toggleListPrivacy = function(list) {
  if (! Meteor.user()) {
    return alert("Please sign in or create an account to make private lists.");
  }

  if (list.userId) {
    Lists.update(list._id, {$unset: {userId: true}});
  } else {
    // ensure the last public list cannot be made private
    if (Lists.find({userId: {$exists: false}}).count() === 1) {
      return alert("Sorry, you cannot make the final public list private!");
    }

    Lists.update(list._id, {$set: {userId: Meteor.userId()}});
  }
};