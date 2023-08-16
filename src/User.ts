export default class User {
  
  private name: string;
  private email: string;
  
  constructor(name: string, email string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }
  
}
