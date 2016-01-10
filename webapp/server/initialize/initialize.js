// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    Meteor.call('initializeChecklists');
  }
});
