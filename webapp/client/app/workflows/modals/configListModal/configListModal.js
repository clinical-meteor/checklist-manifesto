Session.setDefault('deleteListConfirmed', false);
Session.setDefault("isEditing", true);


Template.configListModal.events({
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
  isPublic: function (){
    var currentList = Lists.findOne(Session.get('selectedListId'));
    if (currentList.public === true) {
      return "btn-active";
    } else {
      return "btn-default";
    }
  },
  isPrivate: function (){
    var currentList = Lists.findOne(Session.get('selectedListId'));
    if (currentList.public === false) {
      return "btn-active";
    } else {
      return "btn-default";
    }
  },
  currentList: function () {
    return Lists.findOne(Session.get('selectedListId'));
  },
  isEditing: function(){
    return Session.get('isEditing');
  }
});
