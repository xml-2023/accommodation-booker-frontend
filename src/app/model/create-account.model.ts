export class CreateAccount {
  username: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  country: string = '';
  city: string = '';
  street: string = '';
  number: string = '';
  roleName: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.username = obj.username;
      this.password = obj.password;
      this.name = obj.name;
      this.surname = obj.surname;
      this.email = obj.email;
      this.country = obj.country;
      this.city = obj.city;
      this.street = obj.street;
      this.number = obj.number;
      this.roleName = obj.roleName;
    }
  }
}
