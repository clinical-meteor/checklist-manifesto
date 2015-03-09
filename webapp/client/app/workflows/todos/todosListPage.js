Session.setDefault('editingList', false);



//==============================================================================
// TEMPLATE OUTPUTS

Template.todosListPage.helpers({
  list: function(){
    return Lists.findOne(Session.get('selectedListId'));
  },
  todos: function() {
    return Todos.find({listId: this._id}, {sort: {createdAt : -1}});
  },
  editing: function() {
    return Session.get('editingList');
  }
});



//==============================================================================
// TEMPLATE INPUTS

Template.todosListPage.events({

  'click #listPanelConfig': function (event, template) {
    // trigger our modal dialog
    $('#removeListModal').modal("show");

    // this is stuff we do when the modal closes
    $('#removeListModal').on('hidden.bs.modal', function(e) {
      console.log('closing removeListModal');

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

  'submit #listPanelTitleForm': function(event, template) {
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
  'click #listPanelTitle': function(event, template) {
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

  'keyup #listPanelNewItemInput': function(event) {
    console.log('click #listPanelNewItemInput');

    event.preventDefault();

    if(event.keyCode == 13) {

      var newTask = {
        listId: this._id,
        text: $('#listPanelNewItemInput').val(),
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

      console.log('result', result);

      Lists.update(this._id, {$inc: {incompleteCount: 1}});
      $('#listPanelNewItemInput').val('');

    }
  }
});


//==============================================================================
// TEMPLATE HELPERS

var editList = function(list, template) {
  Session.set('editingList', true);

  // wait for the template to redraw based on the reactive change
  Tracker.afterFlush(function() {
    // template.$('.js-edit-form input[type=text]').focus();
    template.$('#listPanelTitleForm input[type=text]').focus();
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
