import Service from './Service';
import AnalystADL from './analyst/AnalystADL';
import Tool from './tools/Tool';

export default class Channel {
  private name: string;
  private tools: Tool[];
  private analystADL: AnalystADL;
  private services: Service[];

  constructor(
    name: string,
    tools: Tool[],
    analystADL: AnalystADL,
    services: Service[]
  ) {
    this.name = name;
    this.tools = tools;
    this.analystADL = analystADL;
    this.services = services;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getTools(): Tool[] {
    return this.tools;
  }

  setTools(tools: Tool[]) {
    this.tools = tools;
  }

  getAnalystADL(): AnalystADL {
    return this.analystADL;
  }

  setAnalystADL(analystADL: AnalystADL) {
    this.analystADL = analystADL;
  }

  getServices(): Service[] {
    return this.services;
  }

  setServices(services: Service[]) {
    this.services = services;
  }
}
