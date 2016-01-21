Session.setDefault('editingList', false);
Session.setDefault('newTaskRibbonVisible', false);


//==============================================================================
// TEMPLATE OUTPUTS

Template.checklistPage.helpers({
  listId: function(){
    return Session.get('selectedListId');
  },
  isNewTaskRibbonVisible: function () {
    return Session.get('newTaskRibbonVisible');
  },
  list: function(){
    return Lists.findOne({_id: Session.get('selectedListId')});
  },
  tasks: function() {
    return Tasks.find({listId: Session.get('selectedListId')}, {sort: {ordinal : 1}});
  },
  editing: function() {
    return Session.get('editingList');
  }
});



//==============================================================================
// TEMPLATE INPUTS

Template.checklistPage.events({
  'keydown input[type=text]': function(event) {
    // ESC
    if (27 === event.which) {
      event.preventDefault();
      $(event.target).blur();
    }
  },
  'click .js-cancel': function() {
    Session.set('editingList', false);
  },
  'blur input[type=text]': function() {
    Session.set('editingList', false);
  },

  'submit #checklistTitleForm': function(event, template) {
    event.preventDefault();

    Lists.update(this._id, {$set: {name: template.$('[name=name]').val()}});
    Session.set('editingList', false);
  },
  'click #checklistTitle': function(event, template) {
    List.edit(this, template);
  },
  'click .js-task-add': function(event, template) {
    template.$('.js-task-new input').focus();
  }
});
