// wait until tests are in place to refactor

// Tasks = new Meteor.Collection('tasks');
// //Ground.Collection(Tasks);
//
// if (Meteor.isClient){
//   Meteor.subscribe('tasks');
// }
//
// DiagnosticOrders.attachSchema(DiagnosticOrderSchema);


if (Meteor.isClient){
  Meteor.subscribe("diagnosticOrders");
}


if (Meteor.isServer){
  Meteor.publish("diagnosticOrders", function (argument){
    return DiagnosticOrders.find();
  });
}
