import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RatingService } from '../service/rating.service';
import { AccountService } from '../service/account.service';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateHostRating } from '../model/create-host-rating.model';

@Component({
  selector: 'app-rate-host',
  templateUrl: './rate-host.component.html',
  styleUrls: ['./rate-host.component.css']
})
export class RateHostComponent implements OnInit {

  public accommodationName : string = ''
  public accommodation : any
  public starRating: number = 0;
  public stars: number[];
  public hostGrade : CreateHostRating = new CreateHostRating;
  public currentDate : string | null = ''
  
  constructor(private accommodationService : AccommodationService, private accountService : AccountService, private ratingService : RatingService, private toastr : ToastrService, private route: ActivatedRoute) { 
    this.stars = [1, 2, 3, 4, 5];
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  ngOnInit(): void {

    this.route.params.subscribe((params : Params)=>{
      this.accommodationName = params['accommodationName']
      this.hostGrade.guestId = this.accountService.currentUser.id

      this.accommodationService.findByName(this.accommodationName).subscribe( res => {
        this.accommodation = res
        console.log('Accommodation: ', this.accommodation)
        this.hostGrade.hostId = this.accommodation.user.id
        console.log('HostId: ', this.hostGrade.hostId )
      })
      console.log('GuestId: ', this.accountService.currentUser.id)
      
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
    this.hostGrade.value = this.starRating;
    if (this.currentDate !== null) {
      this.hostGrade.ratingDate = this.currentDate;
    }
    console.log(this.hostGrade)
    this.ratingService.createHostRating(this.hostGrade).subscribe({
      next : res => {
        this.toastr.success("Success", "Accepted rating request!");
      },
      error : error => {
        this.toastr.error('Error occured', error);
      }
    })
  }
}
