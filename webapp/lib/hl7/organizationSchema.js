

OrganizationSchema = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue: "Organization"
    },
  "identifier" : 
    type: [ Identifier ]
    },
  "active" : 
    type: Boolean
    },
  "type" : {
    type: CodeableConcept 
    }, 
  "name" : 
    type: String
    },
  "telecom" : 
    type: [ ContactPoint ]
    },
  "address" : 
    type: [ Address ]
    },
  "partOf" : {
    type: ReferenceSchema 
    }, 
  "contact.$.purpose" : {
    type: CodeableConcept 
    }, 
  "contact.$.name" : {
    type: HumanName 
    },
  "contact.$.telecom" : 
    type: [ ContactPoint ]
    },
  "contact.$.address" : {
    type: Address 
    } 
}