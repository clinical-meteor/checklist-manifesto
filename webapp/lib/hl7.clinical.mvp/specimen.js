
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



SpecimenSchema = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue: "Specimen"
    },
  "identifier" : 
    type: [{ Identifier }]
    },
  "status" : {
    type: String
    },
  "type" : 
    type: CodeableConcept 
    }, 
  "parent" : {
    type: [{ Reference(Specimen) }]
    },
  "subject" : {
    type: Reference(Patient|Group|Device|Substance) 
    }, 
  "accessionIdentifier" : {
    type: Identifier 
    }, 
  "receivedTime" : {
    type: DateTime
    },
  "collection.collector" : {
    type: Reference(Practitioner) 
    }, 
  "collection.comment" : {
    type: [String]
    },
  "collection.collectedDateTime" : {
    type: DateTime
    },
  "collection.collectedPeriod" : {
    type: Period 
    },
  "collection.quantity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "collection.method" : {
    type: CodeableConcept 
    }, 
  "collection.bodySite" : {
    type: CodeableConcept 
    } 
  "treatment.$.description" : {
    type: String
    },
  "treatment.$.procedure" : {
    type: CodeableConcept 
    }, 
  "treatment.$.additive" : {
    type: [{ Reference(Substance) }] 
    },
  "container.$.identifier" : {
    type: [{ Identifier }]
    },
  "container.$.description" : {
    type:String
    },
  "container.$.type" : {
    type: CodeableConcept 
    }, 
  "container.$.capacity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "container.$.specimenQuantity" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "container.$.additiveCodeableConcept" : {
    type: CodeableConcept 
    }
  "container.$.additiveReference" : {
    type: Reference(Substance) 
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

