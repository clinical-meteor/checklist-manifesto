
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




PatientSchema = new SimpleSchema{
  "resourceType" : {
    type: String,
    defaultValue: "Patient"
  },
  "identifier" : {
    type: [ Identifier ]
    },
  "active" : {
    type: Boolean
    },
  "name" : {
    type: [ HumanName ]
    },
  "telecom" : {
    type: [ ContactPoint ]
    },
  "gender" : {
    type: String
    },
  "birthDate" : {
    type: Date
    },
  "deceasedBoolean" : {
    type: Boolean
    },
  "deceasedDateTime" : {
    type: DateTime
    },
  "address" : {
    type: [ Address ]
    },
  "maritalStatus" : { 
    type: CodeableConcept 
    }, 
  "multipleBirthBoolean" : {
    type: Boolean
    },
  "multipleBirthInteger" : {
    type: Integer
    },
  "photo" : {
    type: [ Attachment ]
    },
  "contact.$.relationship" : {
    type: [{ CodeableConcept }]
    },
  "contact.$.name" : { 
    type: HumanName 
    }, 
  "contact.$.telecom" : {
    type: [{ ContactPoint }]
    },
  "contact.$.address" : { 
    type: Address 
    }, 
  "contact.$.gender" : {
    type: String
    },
  "contact.$.organization" : { 
    type: Reference(Organization) 
    },
  "contact.$.period" : { 
    type: Period 
    },
  "animal.species" : { 
    type: CodeableConcept 
    }, 
  "animal.breed" : { 
    type: CodeableConcept 
    }, 
  "animal.genderStatus" : { 
    type: CodeableConcept 
    },
  "communication.$.language" : { 
    type: CodeableConcept 
    }, 
  "communication.$.preferred" : {
    type: Boolean
    },
  "careProvider" : {
    type: [{ Reference(Organization|Practitioner) }]
    },
  "managingOrganization" : { 
    type: Reference(Organization) 
    }, 
  "link.$.other" : { 
    type: Reference(Patient) 
    }, 
  "link.$.type" : 
    type: String
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

