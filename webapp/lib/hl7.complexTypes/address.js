/**
 * @summary Represents an Address
 * @class Address
 * @param {Object} document An object representing an address, ususally a Mongo document.
 * @example 
 
 // Validate an object against the schema
obj = {address: "444 Somewhere St.", zip: "13456"};

isValid = AddressSchema.namedContext("AddressValidator").validate(obj);
// OR
isValid = AddressSchema.namedContext("AddressValidator").validateOne(obj, "keyToValidate");
// OR
isValid = Match.test(obj, AddressSchema);
 
 patientAddress = new Address({
 use: "home",
 text: "123 Main Street",
 city: "Somewhere",
 state: "Indiana",
 postalCode: "12345"
});
patientAddress.clean();
patientAddress.validate();
patientAddress.save();
 */
 
 
//Address = BaseModel.extendAndSetupCollection('HL7.DataTypes.Addresses');
Address = BaseModel.extend();


//Assign a reference from Meteor.users to User.prototype._collection so BaseModel knows how to access it
Address.prototype._collection = HL7.DataTypes.Addresses;

// Create a persistent data store for addresses to be stored.
HL7.DataTypes.Addresses = new Mongo.Collection('HL7.DataTypes.Addresses');

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
HL7.DataTypes.Addresses._transform = function (document) {
  return new Address(document);
};


// Add  the schema for a collection 
AddressSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Address"
    },
  "use" : {
    type: Code
    },
  "type" : {
    type: Code
    },
  "text" : {
    type: String
    },
  "line" : {
    type: [String]
    },
  "city" : {
    type: String
    },
  "district" : {
    type: String
    },
  "state" : {
    type: String
    },
  "postalCode" : {
    type: String
    },
  "country" : {
    type: String
    },
  "period" : {
    type: Period
    }
});
AddressValidator = AddressSchema.namedContext("AddressValidator");
HL7.DataTypes.Addresses.attachSchema(AddressSchema);
