import Service from '../Service';
import { ServicePriority } from '../ServicePriority';

describe('My Services', () => {
  const service = new Service('SERVICE_1', ServicePriority.URGENTE);

  test('defines setName', () => {
    expect(typeof service.setName).toBe('function');
  });

  test('defines getName', () => {
    expect(service.getName()).toBe('SERVICE_1');
    service.setName('SERVICE_2');
    expect(service.getName()).toBe('SERVICE_2');
  });

  test('defines setPriority', () => {
    expect(typeof service.setPriority).toBe('function');
  });

  test('defines getPriority', () => {
    expect(service.getPriority()).toBe(ServicePriority.URGENTE);
    service.setPriority(ServicePriority.BAJA);
    expect(service.getPriority()).toBe(ServicePriority.BAJA);
  });
});
