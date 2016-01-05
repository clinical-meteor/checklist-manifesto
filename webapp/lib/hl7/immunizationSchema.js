

ImmunizationSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Immunization"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "status" : {
    type: String
    },
  "date" : {
    type: DateTime
    },
  "vaccineCode" : {
    type: CodeableConcept 
    }, 
  "patient" : {
    type: ReferenceSchema
    }, 
  "wasNotGiven" : {
    type: Boolean
    },
  "reported" : {
    type: Boolean
    },
  "performer" : {
    type: ReferenceSchema
    }, 
  "requester" : {
    type: ReferenceSchema 
    }, 
  "encounter" : {
    type: ReferenceSchema 
    }, 
  "manufacturer" : {
    type: ReferenceSchema 
    }, 
  "location" : {
    type: ReferenceSchema
    }, 
  "lotNumber" : {
    type: String
    },
  "expirationDate" : {
    type: Date
    },
  "site" : {
    type: CodeableConcept 
    }, 
  "route" : {
    type: CodeableConcept 
    }, 
  "doseQuantity" : {
    type: Quantity(SimpleQuantity) }
    , 
  "note" : {
    type: [ Annotation ]
    },
  "explanation.reason" : {
    type: [ CodeableConcept ]
    },
  "explanation.reasonNotGiven" : {
    type: [ CodeableConcept ] 
    },
  "reaction.$.date" : {
    type: DateTime
    },
  "reaction.$.detail" : {
    type: ReferenceSchema 
    }, 
  "reaction.$.reported" : {
    type: Boolean
    },
  "vaccinationProtocol.$.doseSequence" : {
    type: Integer
    },
  "vaccinationProtocol.$.description" : {
    type: String
    },
  "vaccinationProtocol.$.authority" : {
    type: ReferenceSchema 
    }, 
  "vaccinationProtocol.$.series" : {
    type: String
    },
  "vaccinationProtocol.$.seriesDoses" : {
    type: Integer
    },
  "vaccinationProtocol.$.targetDisease" : {
    type: [ CodeableConcept ]
    },
  "vaccinationProtocol.$.doseStatusReason" : {
    type: CodeableConcept 
    } 
});