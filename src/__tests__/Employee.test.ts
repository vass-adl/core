import Employee from '../Employee';

describe('My Employee', () => {
  const employee = new Employee(
    'Manuel',
    'manuel.florez@company.com',
    'ENTERPRISE_1',
    'DEVOPS'
  );

  test('defines setEnterprise', () => {
    expect(typeof employee.setEnterprise).toBe('function');
  });

  test('defines getEnterprise', () => {
    expect(employee.getEnterprise()).toBe('ENTERPRISE_1');
    employee.setEnterprise('ENTERPRISE_2');
    expect(employee.getEnterprise()).toBe('ENTERPRISE_2');
  });

  test('defines setPosition', () => {
    expect(typeof employee.setPosition).toBe('function');
  });

  test('defines getPosition', () => {
    expect(employee.getPosition()).toBe('DEVOPS');
    employee.setPosition('ANALITY');
    expect(employee.getPosition()).toBe('ANALITY');
  });
});
