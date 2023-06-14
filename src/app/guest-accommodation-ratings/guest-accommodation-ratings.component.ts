import { Component, OnInit } from '@angular/core';
import { RatingService } from '../service/rating.service';
import { AccountService } from '../service/account.service';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guest-accommodation-ratings',
  templateUrl: './guest-accommodation-ratings.component.html',
  styleUrls: ['./guest-accommodation-ratings.component.css']
})
export class GuestAccommodationRatingsComponent implements OnInit {
  public accommodationRatings : any
  public accommodation: any
  public hasFoundAccommodationGrades : any
  constructor(private ratingService : RatingService, private accountService : AccountService, private accommodationService : AccommodationService, private toastr : ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ratingService.findAccommodationRatingsByGuestId(this.accountService.currentUser.id).subscribe(res => {
      this.accommodationRatings = res
      if(this.accommodationRatings.length == 0){
        this.hasFoundAccommodationGrades = true
      } else {
        this.hasFoundAccommodationGrades = false
      }
    })

    
  }

  deleteGrade(accommodationRating : number){
    this.ratingService.deleteAccommodationGrade(accommodationRating).subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted rating request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }

}
