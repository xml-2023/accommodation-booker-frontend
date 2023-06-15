import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RatingService } from '../service/rating.service';
import { AccountService } from '../service/account.service';
import { AccommodationService } from '../service/accommodation.service';
import { CreateHostRating } from '../model/create-host-rating.model';
import { EditAccommodationRating } from '../model/edit-accommodation-rating.model';

@Component({
  selector: 'app-edit-host-rating',
  templateUrl: './edit-host-rating.component.html',
  styleUrls: ['./edit-host-rating.component.css']
})
export class EditHostRatingComponent implements OnInit {

  public hostGradeId : number = 0
  public rating : CreateHostRating = new CreateHostRating
  public starRating: number = 0;
  public stars: number[];
  public newHostGrade :  EditAccommodationRating = new EditAccommodationRating
  public currentDate : string | null = ''
  
  constructor(private accommodationService : AccommodationService, private accountService : AccountService, private ratingService : RatingService, private toastr : ToastrService, private route: ActivatedRoute) { 
    this.stars = [1, 2, 3, 4, 5];
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  ngOnInit(): void {

    this.route.params.subscribe((params : Params)=>{
      this.hostGradeId = params['hostGradeId']
      this.newHostGrade.gradeId = this.hostGradeId

      this.ratingService.findHostRatingsById(this.hostGradeId).subscribe( res => {
        this.rating = res
        console.log('Rating: ', this.rating)
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
    this.newHostGrade.value = this.starRating;
    if (this.currentDate !== null) {
      this.newHostGrade.ratingDate = this.currentDate;
    }
    console.log(this.newHostGrade)
    this.ratingService.editHostGrade(this.newHostGrade).subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted rating request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }

}
