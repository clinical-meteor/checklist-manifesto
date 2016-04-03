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
  Meteor.subscribe("DiagnosticOrders");
}


if (Meteor.isServer){
  Meteor.publish("DiagnosticOrders", function (argument){
    return DiagnosticOrders.find();
  });
}
