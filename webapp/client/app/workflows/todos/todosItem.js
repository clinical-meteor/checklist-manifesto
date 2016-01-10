

Template.todosItem.helpers({
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

Template.todosItem.events({
  'change [type=checkbox]': function(event) {
    var checked = $(event.target).is(':checked');
    Todos.update(this._id, {$set: {checked: checked}});
    Lists.update(this.listId, {$inc: {incompleteCount: checked ? -1 : 1}});
  },

  'focus input[type=text]': function(event) {
    Session.set("editingTaskId", this._id);
  },

  'blur input[type=text]': function(event) {
    if (Session.equals("editingTaskId", this._id))
      Session.set("editingTaskId", null);
  },

  'keydown input[type=text]': function(event) {
    // ESC or ENTER
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      event.target.blur();
    }
  },

  // update the text of the item on keypress but throttle the event to ensure
  // we don't flood the server with updates (handles the event at most once
  // every 300ms)
  'keyup input[type=text]': _.throttle(function(event) {
    console.log('keyup input[type=text]', event.target.value);
    Todos.update(this._id, {$set: {text: event.target.value}});
  }, 300),

  // handle mousedown otherwise the blur handler above will swallow the click
  // on iOS, we still require the click event so handle both
  'mousedown .js-delete-item, click .js-delete-item': function() {
    Todos.remove(this._id);
    if (! this.checked) {
      Lists.update(this.listId, {$inc: {incompleteCount: -1}});
    }
  }
});