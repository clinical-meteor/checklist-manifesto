
DiagnosticOrderSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "DiagnosticOrder"
  },

  // R!  Who and/or what test is about
  "subject" : {
    type: ReferenceSchema
  },

  // Who ordered the test
  "orderer" : {
    type: ReferenceSchema
  },

  // Identifiers assigned to this order
  "identifier" : {
    type: [ Identifier ]
  },

  // The encounter that this diagnostic order is associated with
  "encounter" : {
    type: ReferenceSchema
  },

  // Explanation/Justification for test
  "reason" : {
    type: [ CodableConceptSchema ]
  },

  // Additional clinical information
  "supportingInformation" : {
    type: [ ReferenceSchema ]
  },

  // If the whole order relates to specific specimens
  "specimen" : {
    type: [ ReferenceSchema ]
  },

  // proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
  "status" : {
    type: String
  },

  // routine | urgent | stat | asap
  "priority" : {
    type: String
  },

  // R!  proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
  "event.$.status" : {
    type: String
  },

  // More information about the event and its context
  "event.$.description" : {
    type: CodableConceptSchema
  },

  // R!  The date at which the event happened
  "event.$.dateTime" : {
    type: Date
  },

  // Who recorded or did this
  "event.$.actor" : {
    type: ReferenceSchema
  },

  // R!  Code to indicate the item (test or panel) being ordered
  "item.$.code" : {
    type: CodableConceptSchema
  },

  // If this item relates to specific specimens
  "item.$.specimen" : {
    type: [ ReferenceSchema ]
  },

  // Location of requested test (if applicable)
  "item.$.bodySite" : {
    type: CodableConceptSchema
  },

  // proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
  "item.$.status" : {
    type: String
  },

  // Events specific to this item
  "item.$.event" : {
    type: [ String ]
  },

  // Other notes and comments
  "note" : {
    type: [ String ]
  }
});
