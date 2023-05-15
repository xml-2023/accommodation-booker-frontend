import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AvailabilityService } from '../service/availability.service';
import { AccommodationService } from '../service/accommodation.service';

@Component({
  selector: 'app-availability-list-by-accommodation',
  templateUrl: './availability-list-by-accommodation.component.html',
  styleUrls: ['./availability-list-by-accommodation.component.css']
})
export class AvailabilityListByAccommodationComponent implements OnInit {
  public accommodationId : number = 0;
  public allAvailability : any[] = []
  public accommodation : any

  constructor( private accommodationService : AccommodationService,private availabilityService : AvailabilityService, private route: ActivatedRoute,  private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.accommodationId = params['id']
    })

    console.log(this.accommodationId)
    this.accommodationService.findById(this.accommodationId).subscribe(res => {
      this.accommodation = res
      this.allAvailability = res.availableSlots
    })

  }

  editAvailability(availabilityId : number) : void {
    console.log('edit-availability', this.accommodationId, '/',availabilityId)
    this.router.navigate(['edit-availability', this.accommodationId, availabilityId]);
  }


}
