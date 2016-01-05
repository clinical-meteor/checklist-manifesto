


SpecimenSchema = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue: "Specimen"
    },
  "identifier" : 
    type: [{ Identifier }]
    },
  "status" : {
    type: String
    },
  "type" : 
    type: CodeableConcept 
    }, 
  "parent" : {
    type: [{ Reference(Specimen) }]
    },
  "subject" : {
    type: Reference(Patient|Group|Device|Substance) 
    }, 
  "accessionIdentifier" : {
    type: Identifier 
    }, 
  "receivedTime" : {
    type: DateTime
    },
  "collection.collector" : {
    type: Reference(Practitioner) 
    }, 
  "collection.comment" : {
    type: [String]
    },
  "collection.collectedDateTime" : {
    type: DateTime
    },
  "collection.collectedPeriod" : {
    type: Period 
    },
  "collection.quantity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "collection.method" : {
    type: CodeableConcept 
    }, 
  "collection.bodySite" : {
    type: CodeableConcept 
    } 
  "treatment.$.description" : {
    type: String
    },
  "treatment.$.procedure" : {
    type: CodeableConcept 
    }, 
  "treatment.$.additive" : {
    type: [{ Reference(Substance) }] 
    },
  "container.$.identifier" : {
    type: [{ Identifier }]
    },
  "container.$.description" : {
    type:String
    },
  "container.$.type" : {
    type: CodeableConcept 
    }, 
  "container.$.capacity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "container.$.specimenQuantity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "container.$.additiveCodeableConcept" : {
    type: CodeableConcept 
    }
  "container.$.additiveReference" : {
    type: Reference(Substance) 
    }
});