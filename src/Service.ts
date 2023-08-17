import { ServicePriority } from './ServicePriority';

export default class Service {
  private name: string;
  private priority: ServicePriority;

  constructor(name: string, priority: ServicePriority) {
    this.name = name;
    this.priority = priority;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getPriority(): ServicePriority {
    return this.priority;
  }

  setPriority(priority: ServicePriority) {
    this.priority = priority;
  }
}
