

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
  "group" : {
    type: GroupSchema
    }
});

GroupSchema = new SimpleSchema({
  "linkId" : {
    type: String
    },
  "title" : {
    type: String
    },
  "concept" : {
    type: [{ Coding }]
    },
  "text" : {
    type: String
    },
  "required" : {
    type: Boolean
    },
  "repeats" : {
    type: Boolean
    },
  "group" : {
    type: GroupSchema
    },
  "question.$.linkId" : {
    type: String
    },
  "question.$.concept" : {
    type: [{ Coding }]
    },
  "question.$.text" : {
    type: String
    },
  "question.$.type" : {
    type: String
    },
  "question.$.required" : {
    type: Boolean
    },
  "question.$.repeats" : {
    type: Boolean
    },
  "question.$.options" : {
    type: Reference(ValueSet) 
    }, 
  "question.$.option" : {
    type: [{ Coding }]
    },
  "question.$.group" : {
    type: GroupSchema
    },
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

