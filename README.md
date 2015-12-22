# Budget allocator

A small JavaScript library to calculate a group or departments' monthly expense allocation given the allocation values and organizational hierarchy.

## Installation
  `npm install git://github.com/stlouisweb/budget-allocation.git`

## Usage

	var budgetallocator = require('budgetallocator');
	var group = {group object}
	var budget = budgetallocator.calculateGroup(group);

	console.log(budget);

Sample group object:
	
	{
	      	"Manager Jim": {
			"position": "Manager",
			"reports": {
				"Manager Bill": {
					"position": "Manager",
					"reports": {
						"Johnny Developer": {
							"position": "Developer"
						},
						"Sally Q A'Tester": {
							"position": "QA Tester"
						}
					}
				}
			}
		}
	}
	
### Calculate Department Allocation
You can use the `calculateDepartment` method, passing in an array of group objects, to calculate the expense allocation of a department spanning multiple groups.

	var budgetallocator = require('budgetallocator');
	var department = [{group},{group}]
	var budget = budgetallocator.calculateDepartment(department);

	console.log(budget);

### Custom Allocation
You can specify a custom allocation object, to create your own positions and values. The keys are the position titles and the values are the expense allocation values.

	var budgetallocator = require('budgetallocator');
	var allocation = {
	  "DevOps Engineer": 1000,
	  "Archeitect": 800
	var group = {
	  "Archeitect John" {
	    "position": "Archeitect"
	  },
	  "DevOps Jeremy" {
	    "position": "DevOps Engineer"
	  }
	}
	var budget = budgetallocator.calculateGroup(group, allocation);

	console.log(budget);


## Testing

Execute `npm test` in the terminal to run the test suite. Tests can be found in the test/ directory. This project uses [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/).
