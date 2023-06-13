import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GuestReservationResponse } from '../model/guest-reservation-response.model';
import { ReservationRequestService } from '../service/reservation-request.service';
import { AccountService } from '../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guests-reservations',
  templateUrl: './guests-reservations.component.html',
  styleUrls: ['./guests-reservations.component.css']
})
export class GuestsReservationsComponent implements OnInit {

  public userReservations : GuestReservationResponse[] = []
  constructor(private reservationService : ReservationRequestService, private toastr : ToastrService, private accountService : AccountService, private route: ActivatedRoute,  private router : Router) { }

  ngOnInit(): void {
    this.reservationService.getAllRequestsByUser(this.accountService.currentUser.id).subscribe( res => {
      this.userReservations = res
    })
  }

  cancelReservation(requestId : number) : void{
    this.reservationService.changeRequestStatus(requestId, 'CANCELLED').subscribe({
      next: res => {
        this.toastr.success('Success', 'Cancelled reservation request!')
      },
      error: err => {
        this.toastr.error('Error', err)
      }
    })
  }

  rateAccommodation(accommodationName : string) : void{
    this.router.navigate(['rate-accommodation', accommodationName]);
  }
}
