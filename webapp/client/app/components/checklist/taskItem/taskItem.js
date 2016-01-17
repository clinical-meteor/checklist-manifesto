

Template.tasksItem.helpers({
  getStatusColor: function(){
    if (this.status === "completed") {
      return "color: #D3D3D3;";
    } else {
      return "color: #333333;";
    }
  },
  getStatusIcon: function(){
    if (this.status === "completed") {
      return "fa-check-square-o";
    } else {
      return "fa-square-o";
    }
  },
  getEventDescription: function (){
    return this.event[0].description;
  },
  getText: function(){
    return this.text;
  },
  checkedClass: function() {
    if (this.status === "completed") {
      return "checked";
    }
  },
  editingClass: function() {
    return Session.equals("editingTaskId", this._id) && 'editing';
  }
});

Template.tasksItem.events({
  'click .checkbox': function(event) {
    if (this.status === "completed") {
      Tasks.update(this._id, {$set: {status: "planned"}});
    } else {
      Tasks.update(this._id, {$set: {status: "completed"}});
    }
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
    Tasks.update(this._id, {$set: {text: event.target.value}});
  }, 300),

  // handle mousedown otherwise the blur handler above will swallow the click
  // on iOS, we still require the click event so handle both
  'mousedown .js-delete-item, click .js-delete-item': function() {
    Tasks.remove(this._id);
    if (! this.checked) {
      Lists.update(this.listId, {$inc: {incompleteCount: -1}});
    }
  }
});
