
/**
 * @summary Represents a Patient; typically documented by a clinician.  A Clinical Impression can be self-assigned, in which case it may be considered a Status or ReportedCondition.  
 * @class Patient
 * @param {Object} document An object representing an impression, ususally a Mongo document.
 * @example 
newPatient = new Patient({
  name: {
    given: "Jane", 
    family: "Doe"
  },
  gender: "female",
  identifier: "12345"
});


newPatient.clean();
newPatient.validate();
newPatient.save();
 */
 

// create the object using our BaseModel
Patient = BaseModel.extend();


//Assign a collection so the object knows how to perform CRUD operations
Patient.prototype._collection = HL7.Resources.Patients;

// Create a persistent data store for addresses to be stored.
HL7.Resources.Patients = new Mongo.Collection('HL7.Resources.Patients');

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
HL7.Resources.Patients._transform = function (document) {
  return new Patient(document);
};


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



//================================================================





/**
 * @summary The displayed name of the patient.
 * @memberOf Patient
 * @name displayName
 * @version 1.2.3
 * @returns {Boolean} 
 * @example
 * ```js
 * ```
 */

Patient.prototype.displayName = function () {
  
};

