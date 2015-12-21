var should = require('chai').should(),
    budget = require('../index'),
    calcGroup = budget.calculateGroup,
    calcDepartment = budget.calculateDepartment;

describe('#calcGroup', function() {
  it('should calculate total group budget allocation', function() {
		var group = {"Manager_A": {"position": "Manager","reports": {"Manager_B": {"position": "Manager","reports": {"Developer": {"position": "Developer",},"QA Tester": {"position": "QA Tester"}}}}}};
    calcGroup(group).should.equal(2100);
  });
});

describe('#calcDepartment', function() {
  it('should do math', function() {
		var department = 	[{"Manager_A":{"position": "Manager","reports":{"Manager_B":{"position": "Manager","reports":{"Developer":{"position": "Developer",},"QA Tester":{"position": "QA Tester"}}}}}},{"Manager_C":{"position": "Manager","reports":{"Manager_D":{"position": "Manager","reports":{"Developer":{"position": "Developer",},"QA Tester":{"position": "QA Tester"}}}}}}];
    calcDepartment(department).should.equal(6300);
  });
});
