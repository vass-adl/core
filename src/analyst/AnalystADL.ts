import Employee from '../Employee';

export default class AnalystADL extends Employee {
  constructor(
    name: string,
    email: string,
    enterprise: string,
    position: string
  ) {
    super(name, email, enterprise, position);
  }
}
