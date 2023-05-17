import { Component, OnInit } from '@angular/core';
import { CreateAccount } from '../model/create-account.model';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public createAccount: CreateAccount = new CreateAccount();

  ngOnInit(): void {}

  public onSubmit() {
    if (this.validateForm() && this.createAccount.roleName === 'Host') {
      this.accountService
        .createHostAccount(this.createAccount)
        .subscribe((res) => {
          this.toastr.success('Success', 'Host account is created!');
          this.router.navigateByUrl('');
        });
    } else if (this.validateForm() && this.createAccount.roleName === 'Guest') {
      this.accountService
        .createGuestAccount(this.createAccount)
        .subscribe((res) => {
          this.toastr.success('Success', 'Guest account is created!');
          this.router.navigateByUrl('');
        });
    } else {
      this.toastr.error('Please, fill in all fields!');
    }
  }

  private validateForm(): boolean {
    if (
      this.createAccount.username !== '' &&
      this.createAccount.email !== '' &&
      this.createAccount.password !== '' &&
      this.createAccount.name !== '' &&
      this.createAccount.surname !== '' &&
      this.createAccount.country !== '' &&
      this.createAccount.city !== '' &&
      this.createAccount.street !== '' &&
      this.createAccount.number !== '' &&
      this.createAccount.roleName !== ''
    ) {
      return true;
    }
    return false;
  }
}
