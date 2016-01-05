

OrderSchema = new SimpleSchema({
  "resourceType" : 
    type: String,
    defaultValue: "OrderResponse"
    },
  "identifier" : 
    type: [ Identifier ]
    },
  "request" : {
    type: ReferenceSchema 
    }, 
  "date" : {
    type: DateTime
    },
  "who" : {
    type: ReferenceSchema 
    }, 
  "orderStatus" : {
    type: Code
    },
  "description" : {
    type: String
    },
  "fulfillment" : {
    type: [ ReferenceSchema ] 
    }
});