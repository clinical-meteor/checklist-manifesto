


QuestionnaireSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Questionnaire"
    },
  "identifier" : {
    type: [{ Identifier }]
    },
  "version" : {
    type: String
    },
  "status" : {
    type: String
    },
  "date" : {
    type: Date
    },
  "publisher" : {
    type: String
    },
  "telecom" : {
    type: [{ ContactPoint }]
    },
  "subjectType" : {
    type: [String]
    },
 
  "group.linkId" : {
    type: String
    },
  "group.title" : {
    type: String
    },
  "group.concept" : {
    type: [{ Coding }]
    },
  "group.text" : {
    type: String
    },
  "group.required" : {
    type: Boolean
    },
  "group.repeats" : {
    type: Boolean
    },

  "group.$.question.linkId" : {
    type: String
    },
  "group.$.question.concept" : {
    type: [{ Coding }]
    },
  "group.$.question.text" : {
    type: String
    },
  "group.$.question.type" : {
    type: String
    },
  "group.$.question.required" : {
    type: Boolean
    },
  "group.$.question.repeats" : {
    type: Boolean
    },
  "group.$.question.options" : {
    type: Reference(ValueSet) 
    }, 
  "group.$.question.option" : {
    type: [{ Coding }]
    }
});