Session.setDefault('displayModal', false);
Session.setDefault('deleteListConfirmed', false);
Session.setDefault("isEditing", true);


Template.configListModal.events({
  'click .close': function(){
    Session.set('displayModal', false);
    Overlay.hide();
  },
  'click #publicListButton': function () {
    Lists.update({_id: Session.get('selectedListId')}, {$set: {
      public: true
    }});
  },
  'click #privateListButton': function () {
    Lists.update({_id: Session.get('selectedListId')}, {$set: {
      public: false
    }});
  },
  'click #cancelEditListButton': function () {
    Session.set('displayModal', false);
    Overlay.hide();
  },
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
    Session.set('displayModal', false);
    Overlay.hide();
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
      List.delete(Session.get('selectedListId'));
      Session.set('deleteListConfirmed', true);
      Session.set('isEditing', true);
      Session.set('displayModal', false);
      Overlay.hide();
    }
  }
});


Template.configListModal.helpers({
  activeLayoutModal: function(){
    return "margin: 0px; padding: 10px;";
  },
  isModalVisible: function(){
    if (Session.get('displayModal')) {
      return "z-index: 10000; opacity: 1; display: block;";
    } else {
      return "z-index: -1; opacity: 0; display: none;";
    }
  },
  isPublic: function (){
    var currentList = Lists.findOne(Session.get('selectedListId'));
    if (currentList.public === true) {
      return "btn-default";
    } else {
      return "btn-active";
    }
  },
  isPrivate: function (){
    var currentList = Lists.findOne(Session.get('selectedListId'));
    if (currentList.public === false) {
      return "btn-default";
    } else {
      return "btn-active";
    }
  },
  currentList: function () {
    return Lists.findOne(Session.get('selectedListId'));
  },
  isEditing: function(){
    return Session.get('isEditing');
  }
});
