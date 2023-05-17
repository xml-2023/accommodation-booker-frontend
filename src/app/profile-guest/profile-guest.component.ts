import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CreateAccount } from '../model/create-account.model';

@Component({
  selector: 'app-profile-guest',
  templateUrl: './profile-guest.component.html',
  styleUrls: ['./profile-guest.component.css'],
})
export class ProfileGuestComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public createAccount: CreateAccount = new CreateAccount();

  ngOnInit(): void {
    this.accountService
      .findGuestById(this.accountService.currentUser.id)
      .subscribe((res) => {
        this.accountService.currentUser = res;
        this.mapToForm();
      });
  }

  public editProfile() {
    if (this.validateForm()) {
      this.accountService
        .editGuestAccount(
          this.accountService.currentUser.id,
          this.createAccount
        )
        .subscribe((res) => {
          this.toastr.success('Success', 'Guest account is edited!');
          this.router.navigateByUrl('/guest');
        });
    } else {
      this.toastr.error('Please, fill in all fields!');
    }
  }

  public deleteProfile() {
    this.accountService
      .deleteGuestAccount(this.accountService.currentUser.id)
      .subscribe(
        (res) => {
          this.toastr.success('Success', 'Host account is deleted!');
          this.router.navigateByUrl('');
        },
        (err) => alert(err)
      );
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

  private mapToForm(): void {
    this.createAccount.username = this.accountService.currentUser.username;
    this.createAccount.email = this.accountService.currentUser.email;
    this.createAccount.password = this.accountService.currentUser.password;
    this.createAccount.name = this.accountService.currentUser.name;
    this.createAccount.surname = this.accountService.currentUser.surname;
    this.createAccount.country =
      this.accountService.currentUser.address.country;
    this.createAccount.city = this.accountService.currentUser.address.city;
    this.createAccount.street = this.accountService.currentUser.address.street;
    this.createAccount.number = this.accountService.currentUser.address.number;
    this.createAccount.roleName = this.accountService.currentUser.role.name;
  }
}
