import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { RatingService } from '../service/rating.service';
import { CreateAccommodationRating } from '../model/create-accommodation-rating.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rate-accommodation',
  templateUrl: './rate-accommodation.component.html',
  styleUrls: ['./rate-accommodation.component.css']
})
export class RateAccommodationComponent implements OnInit {

  public accommodationName : string = ''
  public accommodation : any
  public starRating: number = 0;
  public stars: number[];
  public accommodationGrade : CreateAccommodationRating = new CreateAccommodationRating;
  public currentDate : string | null = ''
  
  constructor(private accommodationService : AccommodationService, private accountService : AccountService, private ratingService : RatingService, private toastr : ToastrService, private route: ActivatedRoute) { 
    this.stars = [1, 2, 3, 4, 5];
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  ngOnInit(): void {

    this.route.params.subscribe((params : Params)=>{
      this.accommodationName = params['accommodationName']
      this.accommodationGrade.userId = this.accountService.currentUser.id

      this.accommodationService.findByName(this.accommodationName).subscribe( res => {
        this.accommodation = res
        console.log('Accommodation: ', this.accommodation)
        this.accommodationGrade.accommodationId = this.accommodation.id
      })
      console.log('UserId: ', this.accountService.currentUser.id)
    })
    
  }

  rate(rating: number) {
    this.starRating = rating;
  }

  formatDate(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  submitRating() {
    console.log('Rated stars:', this.starRating);
    this.accommodationGrade.value = this.starRating;
    if (this.currentDate !== null) {
      this.accommodationGrade.ratingDate = this.currentDate;
    }
    console.log(this.accommodationGrade)
    this.ratingService.createAccommodationRating(this.accommodationGrade).subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted rating request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }
}
