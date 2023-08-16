import User from './User';

export default class Employee extends User {
  private enterprise: string;
  private position: string;

  constructor(
    name: string,
    email: string,
    enterprise: string,
    position: string
  ) {
    super(name, email);
    this.enterprise = enterprise;
    this.position = position;
  }

  getEnterprise(): string {
    return this.enterprise;
  }

  setEnterprise(enterprise: string) {
    this.enterprise = enterprise;
  }

  getPosition(): string {
    return this.position;
  }

  setPosition(position: string) {
    this.position = position;
  }
}
