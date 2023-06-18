import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RatingService } from '../service/rating.service';

@Component({
  selector: 'app-all-ratings-for-host',
  templateUrl: './all-ratings-for-host.component.html',
  styleUrls: ['./all-ratings-for-host.component.css']
})
export class AllRatingsForHostComponent implements OnInit {

  public hostId : any
  public hostRatings: any[] = []
  public hasFoundHostGrades : any
  public averageGrade : number = 0
  constructor(private ratingService : RatingService, private toastr : ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.hostId = params['hostId']

      this.ratingService.findHostRatingsByHostId(this.hostId).subscribe( res => {
        this.hostRatings = res
        console.log('Host raings:', this.hostRatings);
      })

      this.ratingService.getHostAverageGrade(this.hostId).subscribe( res => {
        this.averageGrade = res
        console.log('Host average grade: ', this.averageGrade)
      })
    })
  }

}
