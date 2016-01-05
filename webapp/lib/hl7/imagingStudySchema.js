

ImagingStudySchema = new SimpleSchema({
  "resourceType" : {
    type: "ImagingStudy"
    },
  "started" : {
    type: DateTime
    },
  "patient" : {
    type: ReferenceSchema
    }, 
  "uid" : {
    type: Oid
    },
  "accession" : {
    type: Identifier
    }, 
  "identifier" : {
    type: [ Identifier ]
    },
  "order" : {
    type: [ ReferenceSchema ]
    },
  "modalityList" : {
    type: [ Coding ]
    },
  "referrer" : {
    type: ReferenceSchema 
    }, 
  "availability" : {
    type: Code
    },
  "url" : {
    type: Uri
    },
  "numberOfSeries" : {
    type: UnsignedInt
    },
  "numberOfInstances" : {
    type: UnsignedInt
    },
  "procedure" : {
    type: [ ReferenceSchema ]
    },
  "interpreter" : {
    type: ReferenceSchema 
    }, 
  "description" : {
    type: String
    },
    
  "series.$.number" : {
    type: UnsignedInt
    },
  "series.$.modality" : {
    type: Coding 
    }, 
  "series.$.uid" : {
    type: Oid
    },
  "series.$.description" : {
    type: String
    },
  "series.$.numberOfInstances" : {
    type: UnsignedInt
    },
  "series.$.availability" : {
    type: Code
    },
  "series.$.url" : {
    type: Uri
    },
  "series.$.bodySite" : {
    type: Coding 
    }, 
  "series.$.laterality" : {
    type: Coding 
    }, 
  "series.$.started" : {
    type: DateTime
    },
 
  "series.$.instance.$.number" : {
    type: UnsignedInt
    },
  "series.$.instance.$.uid" : {
    type: Oid
    },
  "series.$.instance.$.sopClass" : {
    type:  Oid
    },
  "series.$.instance.$.type" : {
    type: String
    },
  "series.$.instance.$.title" : {
    type: String
    },
  "series.$.instance.$.content" : {
    type: [ Attachment ] 
    }
});