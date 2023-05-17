import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-accommodations-of-host',
  templateUrl: './accommodations-of-host.component.html',
  styleUrls: ['./accommodations-of-host.component.css']
})
export class AccommodationsOfHostComponent implements OnInit {
  allAccommodations : any[] = []
  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute,  private router : Router, 
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.accommodationService.findByHostId(this.accountService.currentUser.id).subscribe(res => {
      this.allAccommodations = res
      console.log(res)
    })
  }

  createAvailability(accommodationId: any):void{
    this.router.navigate(['create-availability', accommodationId]);
  }

  viewAvailability(accommodationId: any):void{
    console.log("acc ID" + accommodationId)
    this.router.navigate(['view-availability', accommodationId]);
  }

  viewRequests(accommodationId : any): void{
    this.router.navigate(['view-reservations', accommodationId]);
  }

  goToDetails(name : any) : void {
    this.router.navigate(['accommodation-details', name]);
  }
}
