
ReferenceSchema = new SimpleSchema({
  "reference" : {
    type: String,
    optional: true
    },
  "display" : {
    type: String,
    optional: true
    },
  "meteorObject" : {
    type: Object,
    blackbox: true,
    optional: true
    }
});


PeriodSchema = new SimpleSchema({
  "start" : {
    type : Date
    },
  "end" : {
    type : Date
    }
});

CodingSchema = new SimpleSchema({
  "system" : {
    type: String
    },
  "version" : {
    type: String
    },
  "code" : {
    type: String
    },
  "display" : {
    type: String
    },
  "userSelected" : {
    type: Boolean
    }
});

CodableConceptSchema = new SimpleSchema({
  "coding" : {
    type: [ CodingSchema ]
  },
  "text" : {
    type: String
    }
});

Identifier = new SimpleSchema({
  "use" : {
    type: String
    },
  "type" : {
    type: CodableConceptSchema
    },
  "system" : {
    type: String
    },
  "value" : {
    type: String
    },
  "period" : {
    type: PeriodSchema
    },
  "assigner" : {
    type: ReferenceSchema
    }
});
