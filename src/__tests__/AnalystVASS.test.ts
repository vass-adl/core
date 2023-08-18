import AnalystVASS from '../analyst/AnalystVASS';

describe('My AnalystVASS', () => {
  const analystVASS = new AnalystVASS(
    'Manuel',
    'devops.manuel@gmail.com',
    'VASS',
    'DEVOPS'
  );

  test('defines build', () => {
    expect(analystVASS.getName()).toBe('Manuel');
    expect(analystVASS.getEmail()).toBe('devops.manuel@gmail.com');
    expect(analystVASS.getEnterprise()).toBe('VASS');
    expect(analystVASS.getPosition()).toBe('DEVOPS');
  });
});
