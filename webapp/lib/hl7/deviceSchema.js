

DeviceSchema  = new SimpleSchema({
  "resourceType" : {
    type: "Device"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "type" : {
    type: CodeableConcept 
    }, 
  "note" : {
    type: [ Annotation ]
    },
  "status" : {
    type: Code
    },
  "manufacturer" : {
    type: String
    },
  "model" : {
    type: String
    },
  "version" : {
    type: String
    },
  "manufactureDate" : {
    type: DateTime
    },
  "expiry" : {
    type: DateTime
    },
  "udi" : {
    type: String
    },
  "lotNumber" : {
    type: String
    },
  "owner" : { 
    type: ReferenceSchema 
    }, 
  "location" : {
    type: ReferenceSchema 
    }, 
  "patient" : {
    type: ReferenceSchema 
    }, 
  "contact" : {
    type: [ ContactPoint ]
    },
  "url" : {
    type: Uri
    }
});