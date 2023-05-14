import { Component, OnInit } from '@angular/core';
import { CreateAccount } from '../model/create-account.model';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  public createAccount: CreateAccount = new CreateAccount();

  ngOnInit(): void {}

  public onSubmit() {
    if (this.validateForm()) {
      this.accountService.createAccount(this.createAccount).subscribe((res) => {
        this.toastr.success('Success', 'Account is created!');
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
      this.createAccount.role !== ''
    ) {
      return true;
    }
    return false;
  }
}
