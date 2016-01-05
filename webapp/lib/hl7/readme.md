
#### Contributing FHIR Resources

We'll take pull requests that include SimpleSchemas that conform to any FHIR Resource or Extension.  

#### Steps to Convert FHIR JSON to SimpleSchema

0. Copy JSON to file
1. Remove comments
2. Convert "<boolean>" to Boolean
3. Convert subdocuments fields into dotted notation
4. Remove indentation spacing 
5. Add {type: {}} structure to each entry
6. Add optional:true 
7. Add {meta: {version: ""}}
8. SimpleSchema()
9. JSDoc definition
10. lib/object.js file
11. base object
12. _transform function
13. collection definition
14. package.js file
