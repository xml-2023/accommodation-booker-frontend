export class CreateAccount {
  username: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  city: string = '';
  country: string = '';
  street: string = '';
  number: string = '';
  role: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.username = obj.username;
      this.email = obj.email;
      this.password = obj.password;
      this.name = obj.name;
      this.surname = obj.surname;
      this.city = obj.city;
      this.country = obj.country;
      this.street = obj.street;
      this.number = obj.number;
      this.role = obj.role;
    }
  }
}
