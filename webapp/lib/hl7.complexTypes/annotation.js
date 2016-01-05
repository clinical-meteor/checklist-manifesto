

annotationSchema = new SimpleSchema({
  "authorReference" : {
    type: ReferenceSchema 
    },
  "authorString" : {
    type: String
    },
  "time" : {
    type: DateTime
    },
  "text" : {
    type: String
    }
});