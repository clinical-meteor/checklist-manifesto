checklist-manifesto
============================

HIPAA and FDA ready version of the Todos demo example.  

[![Circle CI](https://circleci.com/gh/clinical-meteor/checklist-manifesto/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/checklist-manifesto/tree/master)

============================
#### Meteor Version

1.0.3.1


============================
#### Installation

````sh
# Should be as simple as cloning the repository...  
git clone https://github.com/awatson1978/clinical-checklists

# And then running it...
cd clinical-checklists/webapp
meteor
````

============================
#### Local Development

ChecklistManifesto uses many packages shared between ClinicalFramework apps.  Use the ``starrynight fetch`` command to fetch the shared packages for local development.

````sh
# Install the starrynight utility...
npm install -g starrynight

# And then running it...
cd packages
starrynight fetch
````


============================
#### HL7 Conformance Statement  

All tasks are implemented with the HL7 FHIR [DiagnosticOrder](https://www.hl7.org/fhir/diagnosticorder.html) resource type.  Please see the HL7 FHIR DTSU2 for reference type schema definition.


============================
#### HIPAA Compliance  

This app supports logging events to a HIPAA Audit Log.  See the [HIPAA Audit Utility](https://github.com/clinical-meteor/hipaa-utility) for details on viewing the Hipaa Audit Log.

============================
#### FDA Validation and Verification Testing

````sh

# optional:  you may want to reset your application data
terminal-a$ meteor reset

# run your application as usual
terminal-a$ meteor

# then open up a second terminal and run the validation tests
terminal-b$ starrynight autoconfig
terminal-b$ starrynight run-tests --type validation

# if you want to run verification tests, you'll need to fetch the packages in the app
terminal-a$ starrynight fetch

# then open up a second terminal and run_nightwatch to run all tests
terminal-b$ starrynight run-tests --type verification
````

============================
#### Run Acceptance Tests

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
