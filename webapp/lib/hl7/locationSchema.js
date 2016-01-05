

LocationSchema = new SimpleSchema({
  "resourceType" : {
    type: "Location"
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "status" : {
    type: Code
    },
  "name" : {
    type: String
    },
  "description" : {
    type: String
    },
  "mode" : {
    type: Code
    },
  "type" : { 
    type: CodeableConcept 
    }, 
  "telecom" : {
    type: [ ContactPoint ]
    },
  "address" : {
    type: Address 
    }, 
  "physicalType" : {
    type: CodeableConcept 
    }, 
  "position.longitude" : {
    type: Decimal
    },
  "position.latitude" : {
    type: Decimal
    },
  "position.altitude" : {
    type: Decimal
    },
  "managingOrganization" : {
    type: Reference(Organization) 
    }, 
  "partOf" : {
    type:  Reference(Location)
    } 
});