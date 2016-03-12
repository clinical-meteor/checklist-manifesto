Router.configure({
  // we use the  appLayout template to define the layout for the entire app
  layoutTemplate: 'appLayout',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  yieldTemplates: {

    'defaultNavbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'globalSearchBar': {
      to: 'globalInput'
    },
    'configListModal': {
      to: 'modalA'
    }
  }
});



Router.map(function() {

  this.route('checklistPage', {
    path: '/lists/:_id',
    onBeforeAction: function() {
      Session.set('selectedListId', this.params._id);
      this.next();
    },
    yieldTemplates: {
      'checklistHeader': {
        to: 'header'
      },
      'defaultNavbarFooter': {
        to: 'footer'
      },
      'reactiveOverlaysTemplate': {
        to: 'overlays'
      },
      'sidebar': {
        to: 'westPanel'
      },
      'newTaskRibbon': {
        to: 'globalInput'
      },
      'configListModal': {
        to: 'modalA'
      },
      'iframe': {
        to: 'secondPage'
      }
    },
    onAfterAction: function(){
      //Session.set('showNavbars', true);
    }
  });

  this.route('/', {
    path: '/',
    name: 'home',
    action: function() {
      if (Lists.find({userId: Meteor.userId()}).count() > 0) {
        Router.go('checklistPage', Lists.findOne({userId: Meteor.userId()}));
      } else {
        Router.go('checklistPage', Lists.findOne({_id: Lists.createNew()}));
      }
    },
    yieldTemplates: {
      // 'navbarHeader': {
      //   to: 'header'
      // },
      'defaultNavbarFooter': {
        to: 'footer'
      },
      'reactiveOverlaysTemplate': {
        to: 'overlays'
      },
      'keybindingsModal': {
        to: 'keybindingsModal'
      },
      'questionnaireActionButtons': {
        to: "footerActionElements"
      }
    }
  });
});

if (Meteor.isClient) {
  Router.onBeforeAction('loading', {except: ['entrySignUp', 'entrySignIn']});
  Router.onBeforeAction('dataNotFound', {except: ['entrySignUp', 'entrySignIn']});

  Router.onBeforeAction(function (){
    Session.set('pageTitle', '');
    Session.set('useCardLayout', true);
    // Session.set('westPanelVisible', false);
    //Session.set('showNavbars', false);
    //WestPanel.hide();
    this.next();
  });

  // Router.onAfterAction(function (){
  //   if (Session.get("appWidth") < 1040) {
  //      Session.set('appSurfaceOffset', true);
  //      Session.set('useEastFence', false);
  //   } else {
  //      Session.set('appSurfaceOffset', true);
  //      Session.set('useEastFence', true);
  //   }
  // });

}
