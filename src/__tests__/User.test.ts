import User from '../User';

describe('My Users', () => {
  const user = new User('Manuel', 'devops.manuel@gmail.com');

  test('defines setName', () => {
    expect(typeof user.setName).toBe('function');
  });

  test('defines getName', () => {
    expect(user.getName()).toBe('Manuel');
    user.setName('Juan');
    expect(user.getName()).toBe('Juan');
  });

  test('defines setEmail', () => {
    expect(typeof user.setEmail).toBe('function');
  });

  test('defines getEmail', () => {
    expect(user.getEmail()).toBe('devops.manuel@gmail.com');
    user.setEmail('juan@gmail.com');
    expect(user.getEmail()).toBe('juan@gmail.com');
  });
});
