import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../service/account.service';
import { LoginData } from '../model/login-data.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public data: LoginData = new LoginData();
  public currentUser: any;

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login() {
    this.accountService.login(this.data).subscribe(
      (res) => {
        console.log(res);
        this.accountService
          .getByUsername(this.data.username)
          .subscribe((res) => {
            this.accountService.currentUser = res;
            this.currentUser = res;
            localStorage.setItem(
              'loggedUser',
              JSON.stringify(this.currentUser)
            );
            localStorage.setItem('role', res.role.name);
            this.accountService.setRole(res.role.name);
            if (this.currentUser.role.name === 'Host') {
              this.router.navigate(['host']);
            } else if (this.currentUser.role.name === 'Guest') {
              this.router.navigate(['guest']);
            }
          });
      },
      (error) => {
        this.toastr.error('Error!', 'Incorrect username or password.');
      }
    );
  }
}
