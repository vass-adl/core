import Scaling from './Scaling';
import Tool from './Tool';

export default class ToolScaling extends Tool implements Scaling {
  constructor(name: string) {
    super(name);
  }
  run(): void {
    throw new Error('Method not implemented.');
  }
}
