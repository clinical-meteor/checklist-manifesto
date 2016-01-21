


Template.newTaskRibbon.events({
  'click #newItemAddIcon': function () {
    List.save(Session.get('selectedListId'));
  },
  'keyup #newTaskInput': function(event) {
    // keyCode 13 is the 'Enter' key
    if(event.keyCode == 13) {
      List.save(Session.get('selectedListId'));
    }
  }
});

Template.newTaskRibbon.helpers({
  list: function(){
    return Lists.findOne({_id: Session.get('selectedListId')});
  }
});
