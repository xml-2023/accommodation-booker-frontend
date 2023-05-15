import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accommodations-of-host',
  templateUrl: './accommodations-of-host.component.html',
  styleUrls: ['./accommodations-of-host.component.css']
})
export class AccommodationsOfHostComponent implements OnInit {
  allAccommodations : any[] = []
  constructor(private accommodationService: AccommodationService, private route: ActivatedRoute,  private router : Router) { }

  ngOnInit(): void {
    this.accommodationService.findAll().subscribe(res => {
      this.allAccommodations = res
    })
  }

  createAvailability(accommodationId: any):void{
    this.router.navigate(['create-availability', accommodationId]);
  }

  viewAvailability(accommodationId: any):void{
    this.router.navigate(['view-availability', accommodationId]);
  }

  viewRequests(accommodationId : any): void{
    this.router.navigate(['view-reservations', accommodationId]);
  }
}
