export default class Service {
  private name: string;
  private priority: string;

  constructor(name: string, priority: string) {
    this.name = name;
    this.priority = priority;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getPriority(): string {
    return this.priority;
  }

  setPriority(priority: string) {
    this.priority = priority;
  }
}
