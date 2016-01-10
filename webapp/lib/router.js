Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appBody',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',
});


Router.route("/notfound", {
  template: "pageNotFound"
});
Router.route("/loading", {
  template: "appLoading"
});


Router.map(function() {

  this.route('checklistPage', {
    path: '/lists/:_id',
    onBeforeAction: function() {
      Session.set('selectedListId', this.params._id);
      this.next();
    }
  });

  this.route('home', {
    path: '/',
    action: function() {
      if (Lists.find({userId: Meteor.userId()}).count() > 0) {
        Router.go('checklistPage', Lists.findOne({userId: Meteor.userId()}));
      } else {
        Router.go('checklistPage', Lists.findOne({_id: Lists.createNew()}));
      }

    }
  });
});

if (Meteor.isClient) {
  Router.onBeforeAction('loading', {except: ['entrySignUp', 'entrySignIn']});
  Router.onBeforeAction('dataNotFound', {except: ['entrySignUp', 'entrySignIn']});
}
