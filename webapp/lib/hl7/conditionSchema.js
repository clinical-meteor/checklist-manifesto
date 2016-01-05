


ConditionSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Condition"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "patient" : {
    type:  ReferenceSchema 
    }, 
  "encounter" : {
    type: ReferenceSchema 
    }, 
  "asserter" : {
    type: ReferenceSchema 
    }, 
  "dateRecorded" : {
    type: Date
    },
  "code" : {
    type: CodeableConcept 
    }, 
  "category" : {
    type: CodeableConcept 
    }, 
  "clinicalStatus" : {
    type: Code
    },
  "verificationStatus" : {
    type: Code
    },
  "severity" : {
    type:  CodeableConcept 
    }, 
  "onsetDateTime" : {
    type: DateTime
    },
  "onsetQuantity" : {
    type: Quantity(Age)
    },
  "onsetPeriod" : {
    type: Period 
    },
  "onsetRange" : {
    type: Range 
    },
  "onsetString" : {
    type: String
    },
  "abatementDateTime" : {
    type: DateTime
    },
  "abatementQuantity" : {
    type: Quantity(Age) 
    },
  "abatementBoolean" : {
    type: Boolean
    },
  "abatementPeriod" : {
    type: Period 
    },
  "abatementRange" : {
    type: Range 
    },
  "abatementString" : {
    type: String
    },
  "stage.summary" : {
    type: CodeableConcept 
    }, 
  "stage.assessment" : {
    type: [ ReferenceSchema ] 
    },
  "evidence.$.code" : {
    type: CodeableConcept 
    }, 
  "evidence.$.detail" : {
    type: [ ReferenceSchema ] 
    },
  "bodySite" : {
    type: [ CodeableConcept ]
    },
  "notes" : {
    type: String
    }
});