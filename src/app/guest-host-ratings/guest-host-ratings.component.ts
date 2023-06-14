import { Component, OnInit } from '@angular/core';
import { RatingService } from '../service/rating.service';
import { AccountService } from '../service/account.service';
import { AccommodationService } from '../service/accommodation.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-host-ratings',
  templateUrl: './guest-host-ratings.component.html',
  styleUrls: ['./guest-host-ratings.component.css']
})
export class GuestHostRatingsComponent implements OnInit {

  public hostRatings : any
  public accommodation: any
  public hasFoundHostGrades : any
  constructor(private ratingService : RatingService, private accountService : AccountService, private accommodationService : AccommodationService, private toastr : ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ratingService.findHostRatingsByGuestId(this.accountService.currentUser.id).subscribe(res => {
      this.hostRatings = res
      console.log(res)
      if(this.hostRatings.length == 0){
        this.hasFoundHostGrades = true
      } else {
        this.hasFoundHostGrades = false
      }
    })

    
  }

  deleteGrade(hostRatingId : number){
    this.ratingService.deleteHostGrade(hostRatingId).subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted rating request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }

}
