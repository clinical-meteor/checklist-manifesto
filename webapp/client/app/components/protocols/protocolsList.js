Router.route("/protocols", {
  template: "protocolLibrary",
  name: "protocolLibrary"
});


Template.protocolLibrary.helpers({
  libraryItemsExist: function(){
    if (Lists.find({public:true}).count() > 0) {
      return true;
    } else {
      return false;
    }
  },
  lists: function() {
    return Lists.find({public: true});
  }
});
