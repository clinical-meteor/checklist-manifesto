Session.setDefault('editingList', false);
Session.setDefault('newTaskRibbonVisible', true);


//==============================================================================
// TEMPLATE OUTPUTS

Template.checklistPage.helpers({
  isNewTaskRibbonVisible: function () {
    return Session.get('newTaskRibbonVisible');
  },
  list: function(){
    return Lists.findOne(Session.get('selectedListId'));
  },
  todos: function() {
    return Todos.find({listId: this._id}, {sort: {ordinal : 1}});
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

  'click #listPanelConfig': function (event, template) {
    // trigger our modal dialog
    $('#configListModal').modal("show");

    // this is stuff we do when the modal closes
    $('#configListModal').on('hidden.bs.modal', function(e) {
      console.log('closing configListModal');

      if(Session.get('deleteListConfirmed')){
        console.log('delete list', Session.get('selectedListId'));

        Todos.find({listId: this._id}).forEach(function(todo) {
          Todos.remove(todo._id);
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

  'click .js-todo-add': function(event, template) {
    template.$('.js-todo-new input').focus();
  },

  'keyup #newTaskInput': function(event) {
    //console.log('click #newTaskInput', event.keyCode);

    if(event.keyCode == 13) {
      saveList(this);
    }
  }
});


saveList = function(record){
  var newTask = {
    listId: record._id,
    text: $('#newTaskInput').val(),
    checked: false,
    createdAt: new Date()
  }

  if(Meteor.userId()){
    newTask.public = false;
  }else{
    newTask.public = true;
  }

  console.log('newTask', newTask);

  var result = Todos.insert(newTask);

  //console.log('result', result);

  Lists.update(record._id, {$inc: {incompleteCount: 1}});
  $('#newTaskInput').val('');
}

//==============================================================================
// TEMPLATE HELPERS

var editList = function(list, template) {
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
//   Todos.find({listId: list._id}).forEach(function(todo) {
//     Todos.remove(todo._id);
//   });
//   Lists.remove(list._id);
//
//   Router.go('home');
// };

var toggleListPrivacy = function(list) {
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
