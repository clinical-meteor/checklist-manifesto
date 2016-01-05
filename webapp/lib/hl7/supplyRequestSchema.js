{
  "resourceType" : { 
    type: String,
    defaultValue: "SupplyRequest"
    },
  "patient" : { 
    type: ReferenceSchema
    }, 
  "source" : { 
    type: ReferenceSchema
    }, 
  "date" : { 
    type: DateTime
    },
  "identifier" : {  
    type: Identifier 
    }, 
  "status" : { 
    type: Code
    },
  "kind" : { 
    type: CodeableConcept 
    }, 
  "orderedItem" : { 
    type: ReferenceSchema
    }, 
  "supplier" :  
    type: [ ReferenceSchema ]
    },
  "reasonCodeableConcept" : { 
    type: CodeableConcept 
    },
  "reasonReference" : { 
    type: ReferenceSchema
    },
  "when.code" : { 
    type: CodeableConcept 
    }, 
  "when.schedule" : { 
    type: Timing 
    } 
}