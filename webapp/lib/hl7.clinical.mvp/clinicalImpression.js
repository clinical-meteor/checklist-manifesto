
/**
 * @summary Represents a Clinical Impression; typically documented by a clinician.  A Clinical Impression can be self-assigned, in which case it may be considered a Status or ReportedCondition.  
 * @class ClinicalImpression
 * @param {Object} document An object representing an impression, ususally a Mongo document.
 * @example 
 
 // Validate an object against the schema
newImpression = new ClinicalImpression({
  patient: {
    display: "Jane Doe", 
    reference: Meteor.userId()
  },
  description: "Feeling better after 4 days of GI distress."
});


newImpression.clean();
newImpression.validate();
newImpression.save();
 */
 

// create the object using our BaseModel
ClinicalImpression = BaseModel.extend();


//Assign a collection so the object knows how to perform CRUD operations
ClinicalImpression.prototype._collection = HL7.Resources.ClinicalImpressions;

// Create a persistent data store for addresses to be stored.
HL7.DataTypes.ClinicalImpressions = new Mongo.Collection('HL7.Resources.ClinicalImpressions');

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
HL7.Resources.ClinicalImpressions._transform = function (document) {
  return new ClinicalImpression(document);
};






ClinicalImpressionSchema = SimpleSchema({
  "resourceType" : {
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



/**
 * @summary If the impression is self-assessed by the patient.
 * @memberOf ClinicalImpression
 * @name isSelfDiagnosed
 * @version 1.2.3
 * @returns {Boolean} 
 * @example
 * ```js
 * var mostRecentImpression = ClinicalImpressions.findOne({'patient.display': "Jane Doe"});
 * if(mostRecentImpression.isSelfDiagnosed()){
 *   // route impression to workqueue for review
 * }
 * ```
 */

ClinicalImpression.prototype.isSelfAssessed = function () {
  if(this.assessor.display !=== this.patient.display){
    return true;
  } else {
    return false;
  }
};

