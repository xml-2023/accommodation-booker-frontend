import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-rate-accommodation',
  templateUrl: './rate-accommodation.component.html',
  styleUrls: ['./rate-accommodation.component.css']
})
export class RateAccommodationComponent implements OnInit {

  public accommodationName : string = ''
  public userId : any
  public accommodation : any
  
  constructor(private accommodationService : AccommodationService, private accountService : AccountService, private toastr : ToastrService, private route: ActivatedRoute,  private router : Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params : Params)=>{
      this.accommodationName = params['accommodationName']
      this.userId = this.accountService.currentUser.id

      this.accommodationService.findByName(this.accommodationName).subscribe( res => {
        this.accommodation = res
        console.log('Accommodation: ', this.accommodation)
      })
      console.log('UserId: ', this.accountService.currentUser.id)
    })
    
  }

}
