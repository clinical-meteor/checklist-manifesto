


DiagnosticReportSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "DiagnosticReport"
    },
  "identifier" : {
    type: [{ Identifier }]
    },
  "status" : {
    type: String,
    },
  "category" : {
    type: CodeableConcept 
    }, 
  "code" : {
    type: CodeableConcept
    }, 
  "subject" : {
    type: ReferenceSchema
    }, 
  "encounter" : {
    type: Reference(Encounter) 
    }, 
  "effectiveDateTime" : {
    type: DateTime
    },
  "effectivePeriod" : {
    type: Period
    },
  "issued" : {
    type: String
    },
  "performer" : {
    type: ReferenceSchema
    }, 
  "request" : {
    type: [ ReferenceSchema ]
    }, 
  "specimen" : {
    type: [ ReferenceSchema ]
    },
  "result" : {
    type: [{ Reference(Observation) }]
    },
  "imagingStudy" : {
    type: [ ReferenceSchema ]
    },
  "image.comment" : {
    type: String
    },
  "image.link" : { 
    type: Reference(Media) 
    },
  "conclusion" : {
    type: String
    },
  "codedDiagnosis" : {
    type: [{ CodeableConcept }]
    },
  "presentedForm" : {
    type: [{ Attachment }] 
    }
});