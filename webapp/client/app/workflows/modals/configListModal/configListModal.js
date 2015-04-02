Session.setDefault('deleteListConfirmed', false);
Session.setDefault("isEditing", true);


Template.configListModal.events({
  'click #cancelRemoveListButton': function () {
    Session.set('isEditing', true);
  },
  'click #deleteListButton': function () {
    Session.set("isEditing", false);
  },
  'click #saveListButton': function () {
    Lists.update({_id: Session.get('selectedListId')}, {$set: {
      'imageUrl': $('#listImageInput').val(),
      'name': $('#listNameInput').val()
    }});
  },
  'click #confirmRemoveListButton': function() {
    // console.log('removing list ', Session.get('selectedUserId'));

    console.log('removing list ', Session.get('selectedListId'));
    var list = Lists.findOne({
      _id: Session.get('selectedListId')
    });

    console.log('list.name', list.name);
    console.log($('#configListModalInput').val());

    if ($('#configListModalInput').val() === list.name) {
      Session.set('deleteListConfirmed', true);
      Session.set('isEditing', true);
    }
  }
});


Template.configListModal.helpers({
  currentList: function () {
    return Lists.findOne(Session.get('selectedListId'));
  },
  isEditing: function(){
    return Session.get('isEditing');
  }
});
