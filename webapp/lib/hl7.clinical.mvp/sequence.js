

SequenceSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue : "Sequence"
  },
  "variationID" : {
    type : [{ CodeableConcept }]
    },
  "referenceSeq" : {
    type : CodeableConcept 
    }, 
  "quantity" : {
    type : Quantity 
    }, 
  "coordinate.$.chromosome" : {
    type : CodeableConcept 
    }, 
  "coordinate.$.start" : {
    type : Integer
    },
  "coordinate.$.end" : {
    type : Integer
    },
  "coordinate.$.genomeBuild" : {
    type : CodeableConcept 
    } 
  "species" : {
    type : CodeableConcept 
    }, 
  "observedAllele" : {
    type : String
    },
  "referenceAllele" : {
    type : String
    },
  "cigar" : {
    type : String
    },
  "quality.$.start" : {
    type : Integer
    },
  "quality.$.end" : {
    type : Integer
    },
  "quality.$.score" : {
    type : Quantity 
    }, 
  "quality.$.platform" : {
    type : CodeableConcept 
    } 
  "allelicState" : {
    type : CodeableConcept 
    }, 
  "allelicFrequency" : {
    type : Decimal
    },
  "copyNumberEvent" : { 
    type :CodeableConcept 
    }, 
  "readCoverage" : {
    type : Integer
    },
  "chip.chipId" : {
    type : String
    },
  "chip.manufacturerId" : {
    type : String
    },
  "chip.version" : {
    type : String
    },
  "repository.$.url" : {
    type : String
    },
  "repository.$.name" : {
    type : String
    },
  "repository.$.structure" : {
    type : String
    },
  "repository.$.variantId" : {
    type : String
    },
  "repository.$.readGroupSetId" : {
    type : String
    }
});