

Session.setDefault('iFrameLocation', 'http://www.wikipedia.org');

Template.iframe.helpers({
  browserWindowLocation: function (){
    return Session.get('iFrameLocation');
  }
});
