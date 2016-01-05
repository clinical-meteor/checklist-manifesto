

ClinicalImpression = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue: "ClinicalImpression"
    },
  "patient" : {
    type: ReferenceSchema 
    }, 
  "assessor" : {
    type: ReferenceSchema 
    }, 
  "status" : {
    type: Code
    },
  "date" : {
    type: DateTime
    },
  "description" : {
    type: String
    },
  "previous" : {
    type: ReferenceSchema 
    }, 
  "problem" : {
    type: [ ReferenceSchema ]
    },
  "triggerCodeableConcept" : {
    type: CodeableConcept 
    },
  "triggerReference" : {
    type: ReferenceSchema 
    },
  "investigations.$.code" : {
    type: CodeableConcept 
    }, 
  "investigations.$.item" : {
    type: [ ReferenceSchema ]
    },
  "protocol" : {
    type: Uri
    },
  "summary" : {
    type: String
    },
  "finding.$.item" : {
    type: CodeableConcept 
    }, 
  "finding.$.cause" : {
    type: String
    },
  "resolved" : {
    type: [ CodeableConcept ]
    },
  "ruledOut.$.item" : {
    type: CodeableConcept 
    }, 
  "ruledOut.$.reason" : {
    type: String
    },
  "prognosis" : {
    type: String
    },
  "plan" : {
    type: [ ReferenceSchema ]
    },
  "action" : {
    type: [ ReferenceSchema ]
    }
});