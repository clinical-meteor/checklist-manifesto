

Template.checklistHeader.helpers({
  list: function(){
    return Lists.findOne({_id: Session.get('selectedListId')});
  }
});


Template.checklistHeader.events({
  "click #sidebarToggle": function (event, template){
    if (Session.get("appWidth") < 1024) {
       Session.toggle('appSurfaceOffset');
    } else {
       Session.toggle('appSurfaceOffset', true);
       Session.toggle('useEastFence', true);
    }
  }
});
