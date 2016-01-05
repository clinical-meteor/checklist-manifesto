
ObservationSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Observation",
    },
  "identifier" : {
    type: [ Identifier ]
    },
  "status" : {
    type: String
    },
  "category" : {
    type: CodeableConcept 
    },
  "code" : {
    type: CodeableConcept 
    },
  "subject" : {
    type: ReferenceSchema
    }, 
  "encounter" : {
    type: ReferenceSchema
    }, 
  "effectiveDateTime" : {
    type: DateTime
    },,
  "effectivePeriod" : {
    type: Period 
    },
  "issued" : {
    type: DateTime,
    },
  "performer" : {
    type: [ ReferenceSchema ]
    },
  "valueQuantity" : {
    type: Quantity 
    },
  "valueCodeableConcept" : {
    type: CodeableConcept 
    },
  "valueString" : {
    type: String
    },
  "valueRange" : {
    type: Range 
    },
  "valueRatio" : {
    type: Ratio 
    },
  "valueSampledData" : {
    type: SampledData 
    },
  "valueAttachment" : {
    type: Attachment 
    },
  "valueTime" : {
    type: Time
    },,
  "valueDateTime" : {
    type: DateTime
    },
  "valuePeriod" : {
    type: Period 
    },
  "dataAbsentReason" : {
    type: CodeableConcept 
    }, 
  "interpretation" : {
    type: CodeableConcept 
    }, 
  "comments" : {
    type: String
    },,
  "bodySite" : {
    type: CodeableConcept 
    }, 
  "method" : {
    type: CodeableConcept 
    }, 
  "specimen" : { 
    type: ReferenceSchema
    }, 
  "device" : { 
    type: ReferenceSchema
    }, 
  "referenceRange.$.low" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "referenceRange.$.high" : {
    type: Quantity(SimpleQuantity) 
    }, 
  "referenceRange.$.meaning" : {
    type: CodeableConcept 
    }, 
  "referenceRange.$.age" : {
    type: Range 
   }, 
  "referenceRange.$.text" : {
    type: String
    },
  "related.$.type" : {
    type: String
    },
  "related.$.target" : {
    type: ReferenceSchema
    },
  "component.$.code" : {
    type: CodeableConcept 
    }, 
  "component.$.valueQuantity" : {
    type: Quantity 
    },
  "component.$.valueCodeableConcept" : {
    type: CodeableConcept 
    },
  "component.$.valueString" : {
    type: String
    },
  "component.$.valueRange" : {
    type: Range 
    },
  "component.$.valueRatio" : {
    type: Ratio 
    },
  "component.$.valueSampledData" : {
    type: SampledData 
    },
  "component.$.valueAttachment" : {
    type: Attachment 
    },
  "component.$.valueTime" : {
    type: Time
    },
  "component.$.valueDateTime" : {
    type: DateTime
    },
  "component.$.valuePeriod" : {
    type: Period 
    },
  "component.$.dataAbsentReason" : {
    type: CodeableConcept 
    }, 
  "component.$.referenceRange" : 
    type: [{ Content as for Observation.referenceRange }] 
    }
});