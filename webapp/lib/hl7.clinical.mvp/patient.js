



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


