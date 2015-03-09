Session.setDefault('deleteListConfirmed', false);

Template.removeListModal.events({
  'click #confirmRemoveListButton': function() {
    // console.log('removing list ', Session.get('selectedUserId'));

    console.log('removing list ', Session.get('selectedListId'));
    var list = Lists.findOne({
      _id: Session.get('selectedListId')
    });

    console.log('list.name', list.name);
    console.log($('#confirmRemoveListButton').val());

    if ($('#confirmRemoveListButton').val() === list.name) {
      Session.set('deleteListConfirmed', true);
    }
  }
});
