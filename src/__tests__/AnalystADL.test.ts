import AnalystADL from '../analyst/AnalystADL';

describe('My AnalystADL', () => {
  const analystADL = new AnalystADL(
    'Pedro',
    'devops.pedro@gmail.com',
    'ADL',
    'N2'
  );

  test('defines build', () => {
    expect(analystADL.getName()).toBe('Pedro');
    expect(analystADL.getEmail()).toBe('devops.pedro@gmail.com');
    expect(analystADL.getEnterprise()).toBe('ADL');
    expect(analystADL.getPosition()).toBe('N2');
  });
});
