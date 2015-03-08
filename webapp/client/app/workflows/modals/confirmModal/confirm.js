Session.setDefault('confirmMessage', 'Penicillin is made from oranges.');
Session.setDefault('confirmTitle', 'Hello Modal!');
Session.setDefault('confirmDialogIsConfirmed', false);

Template.confirmModal.helpers({
  getConfirmationMessage: function() {
    return Session.get('confirmMessage');
  },
  getConfirmationTitle: function() {
    return Session.get('confirmTitle');
  }
});
Template.confirmModal.events({
  'click #modalConfirmButton': function() {
    Session.set('inPageAlertType', 'success');
    Session.set('inPageAlertText', 'success');
    Session.set('confirmDialogIsConfirmed', true);
  }
});
