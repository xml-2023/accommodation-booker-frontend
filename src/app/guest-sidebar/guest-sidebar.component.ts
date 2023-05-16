import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-sidebar',
  templateUrl: './guest-sidebar.component.html',
  styleUrls: ['./guest-sidebar.component.css'],
})
export class GuestSidebarComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('');
  }
}
