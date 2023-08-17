import Monitoring from './Monitoring';
import Tool from './Tool';

export default class ToolMonitoring extends Tool implements Monitoring {
  constructor(name: string) {
    super(name);
  }
  run(): void {
    throw new Error('Method not implemented.');
  }
}
