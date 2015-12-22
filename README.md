# Budget allocator

A small JavaScript library to calculate a group or departments' monthly expense allocation given the allocation values and organizational hierarchy.

## Installation
  npm install budget-allocator --save

## Usage

	var budget-allocator = require('budget-allocator');
	var group = {group object}
	var budget = budget-allocator.calculateGroup(group);

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

## Testing

Execute `npm test` in the terminal to run the test suite. Tests can be found in the test/ directory. This project uses Mocha and Chai.
