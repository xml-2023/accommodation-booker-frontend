import { Component, OnInit } from '@angular/core';
import { EditAccommodationRating } from '../model/edit-accommodation-rating.model';
import { AccountService } from '../service/account.service';
import { RatingService } from '../service/rating.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-accommodation-rating',
  templateUrl: './edit-accommodation-rating.component.html',
  styleUrls: ['./edit-accommodation-rating.component.css']
})
export class EditAccommodationRatingComponent implements OnInit {

  public ratingId : number = 0;
  public accommodationRating : any
  public starRating: number = 0;
  public stars: number[];
  public accommodationGrade : EditAccommodationRating = new EditAccommodationRating;
  public currentDate : string | null = ''
  public gradeDate : string = ''
  public accommodation : any
  
  constructor(private accountService : AccountService, private ratingService : RatingService, private toastr : ToastrService, private route: ActivatedRoute) { 
    this.stars = [1, 2, 3, 4, 5];
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  ngOnInit(): void {

    this.route.params.subscribe((params : Params)=>{
      this.ratingId = params['accommodationGradeId']

      this.ratingService.findAccommodationRatingsById(this.ratingId).subscribe( res => {
        this.accommodationRating = res
        console.log('Accommodation rating: ', this.accommodationRating)
        // this.starRating = this.accommodationRating.value
        // this.gradeDate = this.accommodationRating.ratingDate
        // this.accommodation = this.accommodationRating.accommodation
      })
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
    this.accommodationGrade.gradeId = this.ratingId
    console.log(this.accommodationGrade)
    this.ratingService.editAccommodationGrade(this.accommodationGrade).subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted rating request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }

}
