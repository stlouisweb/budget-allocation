var _ = require('lodash');

/**
*  Traverses the organizational heriarchy of a group and adds to the budget for each team member found
*  in the group.
*/
traverseLevels = function(level, allocation) {
	_.forIn(level, function(value, key) {
		var levelKey = level[key];
		var position = level[key].position;
		budget = budget + allocation[position];
		if ( position == 'Manager' ) {
			traverseLevels(level[key].reports, allocation);
		}
		return budget;
	});
	return budget;
}

module.exports = {
	/**
	* Calculates and returns the monthly expense allocation for a group of employees.
	* Pass in a group object that contains the employees in that group and
	* optionally an allocation object that contains the budget allocation values for each position.
	*
	* @param {Object} group - a group of employees
	* @param {Object} group.employee - an indvidual employee
	* @param {String} group.employee.position - position that the employee holds, must match a string value in the allocation object
	* @param {Object} [group.employee.reports] - a nested object that contains the employees who report to this manager
	*
	* @return {Int} budget
	*/
	calculateGroup: function(group, allocation) {
		budget = 0;

		if ( ! allocation ) {
			allocation = {'Developer': 1000, 'QA Tester': 500, 'Manager': 300};
		}

		budget = traverseLevels(group, allocation);

		return budget;
	},

	/**
	* Calculates and returns the monthly expense allocation for a department.
	* Pass in a department object that contains groups of employees and
	* optionally an allocation object that contains the budget allocation values for each position.
	*
	* @param {Array} department - one or more group objects
	* @param {Object} department[].group - a group of employees
	* @param {Object} department[].group.employee - an indvidual employee
	* @param {String} department[].group.employee.position - position that the employee holds, must match a string value in the allocation object
	* @param {Object} [group.employee.reports] - a nested object that contains the employees who report to this manager
	*
	* @return {Int} budget
	*/
	calculateDepartment: function(department, allocation) {
		budget = 0;

		if ( ! allocation ) {
			allocation = {'Developer': 1000, 'QA Tester': 500, 'Manager': 300};
		}

		for	(index = 0; index < department.length; index++) {
			var departmentGroup = department[index];
			budget = budget + traverseLevels(departmentGroup, allocation);
		}

		return budget;
	}
}
