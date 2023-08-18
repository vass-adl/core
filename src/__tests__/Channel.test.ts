import Channel from '../Channel';
import AnalystADL from '../analyst/AnalystADL';

describe('My Channel', () => {
  const analystADL = new AnalystADL(
    'Pedro',
    'devops.pedro@gmail.com',
    'ADL',
    'N2'
  );

  const channel = new Channel('adl-bbog-mb', [], analystADL, []);

  test('defines setName', () => {
    expect(typeof channel.setName).toBe('function');
  });

  test('defines getName', () => {
    expect(channel.getName()).toBe('adl-bbog-mb');
    channel.setName('adl-bbog-pb');
    expect(channel.getName()).toBe('adl-bbog-pb');
  });

  test('defines setTool', () => {
    expect(typeof channel.setTools).toBe('function');
  });

  test('defines getTool', () => {
    expect(channel.getTools()).toEqual([]);
    channel.setTools([]);
    expect(channel.getTools()).toEqual([]);
  });

  test('defines setAnalystADL', () => {
    expect(typeof channel.getAnalystADL).toBe('function');
  });

  test('defines getAnalystADL', () => {
    expect(channel.getAnalystADL()).toBe(analystADL);
    channel.setAnalystADL(analystADL);
    expect(channel.getAnalystADL()).toBe(analystADL);
  });

  test('defines setService', () => {
    expect(typeof channel.setServices).toBe('function');
  });

  test('defines getService', () => {
    expect(channel.getServices()).toEqual([]);
    channel.setServices([]);
    expect(channel.getServices()).toEqual([]);
  });
});
