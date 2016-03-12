

Template.checklistHeader.helpers({
  list: function(){
    return Lists.findOne({_id: Session.get('selectedListId')});
  }
});


Template.checklistHeader.events({
  'click #showNewTaskToggle': function (event, template) {
    event.stopPropagation();
    Session.toggle('showSearchbar');
  },
  'click #checklistConfig': function (event, template) {
    event.stopPropagation();
    
    Overlay.show();
    Session.set('displayModal', true);

    // this is stuff we do when the modal closes
    $('#configListModal').on('hidden.bs.modal', function(e) {
      console.log('closing configListModal');

      if(Session.get('deleteListConfirmed')){
        console.log('delete list', Session.get('selectedListId'));

        DiagnosticOrders.find({listId: this._id}).forEach(function(task) {
          DiagnosticOrders.remove(task._id);
        });
        Lists.remove(Session.get('selectedListId'));

        Session.set('selectedListId', false);
        Session.set('deleteListConfirmed', false);
        Router.go('home');
      }
    });
  },
  // 'click .sidebarToggle': function(){
  //   if (Session.get("appWidth") > 1040) {
  //     WestPanel.show();
  //     MainPanel.toggleFullscreen();
  //   } else {
  //     Session.toggle('useHorizontalFences')
  //     WestPanel.toggle();
  //   }
  // }
});
