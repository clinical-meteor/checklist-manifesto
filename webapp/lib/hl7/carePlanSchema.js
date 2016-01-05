


CarePlanSchema = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue "CarePlan"
    },
  "identifier" : 
    type: [ Identifier ]
    },
  "subject" : {
    type: ReferenceSchema 
    }, 
  "status" : {
    type: Code
    },
  "context" : {
    type: ReferenceSchema 
    }, 
  "period" : {
    type: Period 
    }, 
  "author" : {
    type: [ ReferenceSchema ]
    },
  "modified" : {
    type: DateTime
    },
  "category" : {
    type: [ CodeableConcept ]
    },
  "description" : {
    type: String
    },
  "addresses" : {
    type: [ ReferenceSchema ]
    },
  "support" : {
    type: [ ReferenceSchema ]
    },

  "relatedPlan.$.code" : {
    type: Code
    },
  "relatedPlan.$.plan" : {
    type: ReferenceSchema
    },
  "participant.$.role" : {
    type: CodeableConcept 
    }, 
  "participant.$.member" : {
    type: ReferenceSchema 
    },
  "goal" : {
    type: [ ReferenceSchema ]
    },
 
  "activity.$.actionResulting" : {
    type: [ ReferenceSchema ]
    },
  "activity.$.progress" : {
    type: [ Annotation ]
    },
  "activity.$.reference" : {
    type: ReferenceSchema 
    }, 
  "activity.$.detail.category" : {
    type: CodeableConcept 
    }, 
  "activity.$.detail.code" : {
    type: CodeableConcept 
    }, 
  "activity.$.detail.reasonCode" : {
    type: [ CodeableConcept ]
    },
  "activity.$.detail.reasonReference" : {
    type: [ ReferenceSchema ]
    },
  "activity.$.detail.goal" : 
    type: [ ReferenceSchema ]
    },
  "activity.$.detail.status" : {
    type: Code
    },
  "activity.$.detail.statusReason" : {
    type: CodeableConcept 
    }, 
  "activity.$.detail.prohibited" : {
    type: Boolean
    },
  "activity.$.detail.scheduledTiming" : {
    type: Timing 
    },
  "activity.$.detail.scheduledPeriod" : {
    type: Period 
    },
  "activity.$.detail.scheduledString" : {
    type: String
    },
  "activity.$.detail.location" : {
    type: ReferenceSchema 
    }, 
  "activity.$.detail.performer" : {
    type: [ ReferenceSchema ]
    },
  "activity.$.detail.productCodeableConcept" : {
    type: CodeableConcept 
    },
  "activity.$.detail.productReference" : {
    type: ReferenceSchema 
    },
  "activity.$.detail.dailyAmount" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "activity.$.detail.quantity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "activity.$.detail.description" : {
    type: String
    },
  "note" : { 
    type: Annotation 
    } 
});