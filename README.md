clinical-checklists
============================

Improved version of the Todos boilerplate example.  Includes:

- offline mode via Ground.Collection
- responsive design to support tablet rotation  
- selenium/nightwatch acceptance tests  
- migrating towards a workflow-centric MVC pattern
- clinical checklist examples


![travis-build](https://travis-ci.org/awatson1978/clinical-checklists.svg?branch=master)

============================
#### Meteor Version

1.0.3.1


============================
#### Installation

````sh
# Should be as simple as cloning the repository...  
git clone https://github.com/awatson1978/clinical-checklists.git

# And then running it...
cd clinical-checklists
meteor
````


============================
#### Run Acceptance Tests

````sh

# optional:  you may want to reset your application data
terminal-a$ meteor reset

# run your application as usual
terminal-a$ meteor

# then open up a second terminal and run_nightwatch to run all tests
terminal-b$ chmod 777 run_nightwatch.sh
terminal-b$ ./run_nightwatch.sh

# or specify a specific test
terminal-b$ ./run_nightwatch.sh -t tests/homePage.js

````

============================
#### Run Acceptance Tests

The code is open source under MIT license, but the Symptomatic.io trademark is not.  
