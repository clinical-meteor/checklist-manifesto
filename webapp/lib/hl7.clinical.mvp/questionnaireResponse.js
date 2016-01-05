



QuestionnaireResponseSchema = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue: "QuestionnaireResponse"
    },
  "identifier" : {
    type: Identifier 
    }, 
  "questionnaire" : {
    type: Reference(Questionnaire) 
    }, 
  "status" : {
    type: String
    },
  "subject" : {
    type: Reference(Any) 
    }, 
  "author" : {
    type: Reference(Device|Practitioner|Patient|RelatedPerson) 
    }, 
  "authored" : {
    type: DateTime
    },
  "source" : {
    type: Reference(Patient|Practitioner|RelatedPerson) 
    }, 
  "encounter" : {
    type: Reference(Encounter) 
    }, 
  "group.linkId" : {
    type: String
    },
  "group.title" : {
    type: String
    },
  "group.text" : {
    type: String
    },
  "group.subject" : {
    type: Reference(Any) 
    }, 
  "group.group" : {
    type: [{ Content as for QuestionnaireResponse.group }]
    },
  "group.question.$.linkId" : {
    type: String
    },
  "group.question.$.text" : {
    type: String
    },
  "group.question.$.answer.$.valueBoolean" : {
    type: Boolean
    },
  "group.question.$.answer.$.valueDecimal" : {
    type: Boolean
    },
  "group.question.$.answer.$.valueInteger" : {
    type: Integer
    },
  "group.question.$.answer.$.valueDate" : {
    type: Date
    },
  "group.question.$.answer.$.valueDateTime" : {
    type: DateTime
    },
  "group.question.$.answer.$.valueInstant" : {
    type: "<instant>"
    },
  "group.question.$.answer.$.valueTime" : {
    type: Time
    },
  "group.question.$.answer.$.valueString" : {
    type: String
    },
  "group.question.$.answer.$.valueUri" : {
    type: String
    },
  "group.question.$.answer.$.valueAttachment" : {
    type: Attachment 
    },
  "group.question.$.answer.$.valueCoding" : {
    type:Coding 
    },
  "group.question.$.answer.$.valueQuantity" : {
    type: Quantity 
    },
  "group.question.$.answer.$.valueReference" : {
    type: Reference(Any) 
    }
  }
});