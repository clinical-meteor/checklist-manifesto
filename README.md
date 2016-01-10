checklist-manifesto
============================

HIPAA and FDA ready version of the Todos demo example.  Includes:

- multiuser / multiactor pattern
- validation and verification tests
- responsive design to support mobile devices
- clinical checklist examples
- offline mode via Ground.Collection


[![Circle CI](https://circleci.com/gh/awatson1978/clinical-checklists/tree/master.svg?style=svg)](https://circleci.com/gh/awatson1978/clinical-checklists/tree/master)

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
#### Run Acceptance Tests

````sh

# optional:  you may want to reset your application data
terminal-a$ meteor reset

# run your application as usual
terminal-a$ meteor

# then open up a second terminal and run the validation tests
terminal-b$ starrynight run-tests --type validation

# if you want to run verification tests, you'll need to fetch the packages in the app
terminal-a$ starrynight fetch

# then open up a second terminal and run_nightwatch to run all tests
terminal-b$ starrynight run-tests --type verification
````

============================
#### Run Acceptance Tests

The code is open source under MIT license.
