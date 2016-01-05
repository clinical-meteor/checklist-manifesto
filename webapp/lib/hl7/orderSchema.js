


OrderSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Order"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "date" : {
    type: DateTime
    },
  "subject" : {
    type: ReferenceSchema 
    }, 
  "source" : {
    type: ReferenceSchema 
    }, 
  "target" : {
    type: ReferenceSchema 
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
    },
  "detail" : {
    type: [ ReferenceSchema ] 
    }
});