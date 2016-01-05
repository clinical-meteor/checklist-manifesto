

AllergyIntoleranceSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "AllergyIntolerance"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "onset" : {
    type: DateTime
    },
  "recordedDate" : {
    type: DateTime
    },
  "recorder" : {
    type: ReferenceSchema
    }, 
  "patient" : {
    type: ReferenceSchema
    }, 
  "reporter" : {
    type: ReferenceSchema,
    }, 
  "substance" : {
    type: CodeableConcept 
    }, 
  "status" : {
    type: Code
    },
  "criticality" : {
    type: Code
    },
  "type" : {
    type: Code
    },
  "category" : {
    type: Code
    },
  "lastOccurence" : {
    type: DateTime
    },
  "note" : {
    type: Annotation 
    }, 
  "reaction.$.substance" : {
    type: CodeableConcept 
    }, 
  "reaction.$.certainty" : {
    type: Code
    },
  "reaction.$.manifestation" : {
    type: [ CodeableConcept ]
    },
  "reaction.$.description" : {
    type: String
    },
  "reaction.$.onset" : {
    type: DateTime
    },
  "reaction.$.severity" : {
    type: Code
    },
  "reaction.$.exposureRoute" : {
    type: CodeableConcept 
    }, 
  "reaction.$.note" : {
    type: Annotation 
    }
});