import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RatingService } from '../service/rating.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-ratings-for-accommodation',
  templateUrl: './all-ratings-for-accommodation.component.html',
  styleUrls: ['./all-ratings-for-accommodation.component.css']
})
export class AllRatingsForAccommodationComponent implements OnInit {

  public accommodationId : any
  public accommodationRatings: any[] = []
  public hasFoundAccommodationGrades : any
  public averageGrade : number = 0
  constructor(private ratingService : RatingService, private toastr : ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.accommodationId = params['accommodationId']

      this.ratingService.findAccommodationRatingsByAccommodationId(this.accommodationId).subscribe( res => {
        this.accommodationRatings = res
        console.log('Accommodation ratings: ', this.accommodationRatings)
      })

      this.ratingService.getAccommodationAverageGrade(this.accommodationId).subscribe( res => {
        this.averageGrade = res
        console.log('Accommodation average grade: ', this.averageGrade)
      })
    })

    
  }

}
