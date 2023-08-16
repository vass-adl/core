import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Manuel')).toBe('Hello Manuel');
});
