// wait until tests are in place to refactor

Tasks = new Meteor.Collection('tasks');
//Ground.Collection(Tasks);

if (Meteor.isClient){
  Meteor.subscribe('tasks');
}

DiagnosticOrderSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "DiagnosticOrder"
  },

  "listId" : {
    type: String,
    optional: true
  },
  "public" : {
    type: Boolean,
    optional: true,
    defaultValue: true
  },
  "ordinal" : {
    type: Number,
    optional: true
  },

  // R!  Who and/or what test is about
  "subject" : {
    type: ReferenceSchema,
    optional: true
  },

  // Who ordered the test
  "orderer" : {
    type: ReferenceSchema,
    optional: true
  },

  // Identifiers assigned to this order
  "identifier" : {
    type: [ Identifier ],
    optional: true
  },

  // The encounter that this diagnostic order is associated with
  "encounter" : {
    type: ReferenceSchema,
    optional: true
  },

  // Explanation/Justification for test
  "reason" : {
    type: [ CodableConceptSchema ],
    optional: true
  },

  // Additional clinical information
  "supportingInformation" : {
    type: [ ReferenceSchema ],
    optional: true
  },

  // If the whole order relates to specific specimens
  "specimen" : {
    type: [ ReferenceSchema ],
    optional: true
  },

  "status" : {
    type: String,
    allowedValues: [
      "proposed",
      "draft",
      "planned",
      "requested",
      "received",
      "accepted",
      "in-progress",
      "review",
      "completed",
      "cancelled",
      "suspended",
      "rejected",
      "failed"
    ],
    defaultValue: "planned"
  },

  //
  "priority" : {
    type: String,
    allowedValues: [
      "routine",
      "urgent",
      "stat",
      "asap"
    ],
    defaultValue: "routine"
  },

  "event.$.status" : {
    type: String,
    allowedValues: [
      "proposed",
      "draft",
      "planned",
      "requested",
      "received",
      "accepted",
      "in-progress",
      "review",
      "completed",
      "cancelled",
      "suspended",
      "rejected",
      "failed"
    ],
    defaultValue: "planned"
  },

  // More information about the event and its context
  "event.$.description" : {
    type: String,
    optional: true
  },

  // R!  The date at which the event happened
  "event.$.dateTime" : {
    type: Date,
    optional: true
  },

  // Who recorded or did this
  "event.$.actor" : {
    type: ReferenceSchema,
    optional: true
  },

  // R!  Code to indicate the item (test or panel) being ordered
  "item.$.code" : {
    type: CodableConceptSchema,
    optional: true
  },

  // If this item relates to specific specimens
  "item.$.specimen" : {
    type: [ ReferenceSchema ],
    optional: true
  },

  // Location of requested test (if applicable)
  "item.$.bodySite" : {
    type: CodableConceptSchema,
    optional: true
  },

  "item.$.status" : {
    type: String,
    allowedValues: [
      "proposed",
      "draft",
      "planned",
      "requested",
      "received",
      "accepted",
      "in-progress",
      "review",
      "completed",
      "cancelled",
      "suspended",
      "rejected",
      "failed"
    ],
    defaultValue: "planned",
    optional: true
  },

  // Events specific to this item
  "item.$.event" : {
    type: [ String ],
    optional: true
  },

  // Other notes and comments
  "note" : {
    type: [ String ],
    optional: true
  }
});
Tasks.attachSchema(DiagnosticOrderSchema);
