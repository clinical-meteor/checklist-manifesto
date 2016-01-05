


GoalSchema = new SimpleSchema({
  "resourceType" : {
    type: "Goal"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "subject" : {
    type: ReferenceSchema 
    }, 
  "startDate" : {
    type: Date
    },
  "startCodeableConcept" : {
    type: CodeableConcept 
    },
  "targetDate" : {
    type: Date
    },
  "targetQuantity" : {
    type: Quantity(Duration) 
    },
  "category" : {
    type: [ CodeableConcept ]
    },
  "description" : {
    type: String
    },
  "status" : {
    type: Code
    },
  "statusDate" : {
    type: Date
    },
  "statusReason" : {
    type: CodeableConcept 
    }, 
  "author" : {
    type: ReferenceSchema 
    }, 
  "priority" : {
    type: CodeableConcept 
    }, 
  "addresses" : {
    type: [ ReferenceSchema ]
    },
  "note" : {
    type: [ Annotation ]
    },
  "outcome.$.resultCodeableConcept" : {
    type: CodeableConcept 
    },
  "outcome.$.resultReference" : {
    type: ReferenceSchema 
    }
});