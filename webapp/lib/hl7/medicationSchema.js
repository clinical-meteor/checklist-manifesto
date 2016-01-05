

MedicationSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Medication"
    },
  "code" : {
    type:  CodeableConcept 
    }, 
  "isBrand" : {
    type: Boolean
    },
  "manufacturer" : {
    type: ReferenceSchema 
    }, 
  "product.form" : {
    type:  CodeableConcept 
    },
  "product.ingredient.$.item" : {
    type:  ReferenceSchema 
    }, 
  "product.ingredient.$.amount" : {
    type: Ratio 
    },
  "product.batch.$.lotNumber" : {
    type: String
    },
  "product.batch$.expirationDate" : {
    type: DateTime
    },
  "package.content.$.item" : {
    type:  Reference(Medication) 
    }, 
  "package.content.$.amount" : {
    type: Quantity(SimpleQuantity) 
    } 
});