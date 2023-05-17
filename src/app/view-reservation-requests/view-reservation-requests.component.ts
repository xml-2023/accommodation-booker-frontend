import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservationRequestService } from '../service/reservation-request.service';

@Component({
  selector: 'app-view-reservation-requests',
  templateUrl: './view-reservation-requests.component.html',
  styleUrls: ['./view-reservation-requests.component.css']
})
export class ViewReservationRequestsComponent implements OnInit {

  public accommodationId: number = 0;
  public requests: any[] = [];
  constructor(private reservationService: ReservationRequestService, private route: ActivatedRoute, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.accommodationId = params['id']
      this.reservationService.findAllByAccommodation(this.accommodationId).subscribe(res => {
        this.requests = res
        console.log(this.requests)
      })
    })
  }

  acceptRequest(requestId : any): void {
    this.reservationService.changeRequestStatus(requestId, 'ACCEPTED').subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }

  rejectRequest(requestId : any): void {
    this.reservationService.changeRequestStatus(requestId, 'REJECTED').subscribe({
      next : res => {
        this.toastr.success("Success", "Rejected request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }
}
