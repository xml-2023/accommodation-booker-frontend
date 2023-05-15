import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateReservationRequest } from '../model/create-reservation-request.model';
import { AccommodationService } from '../service/accommodation.service';
import { ReservationRequestService } from '../service/reservation-request.service';

@Component({
  selector: 'app-guest-search-accommodation',
  templateUrl: './guest-search-accommodation.component.html',
  styleUrls: ['./guest-search-accommodation.component.css']
})
export class GuestSearchAccommodationComponent implements OnInit {
  formGroup!: FormGroup;
  accommodations : any
  selectedNum : any
  allAccommodations : any
  allPlaces : string[] = []
  hasFoundAccommodation : boolean = false
  dto : CreateReservationRequest = new CreateReservationRequest

  constructor(private accommodationService: AccommodationService, private reservationService : ReservationRequestService, private toastr : ToastrService,
     private router : Router){}

  ngOnInit(): void {
    this.accommodationService.findAll().subscribe(res => {
      this.allAccommodations = res
      console.log(this.allAccommodations)
      this.getAllPlaces(this.allAccommodations)
      console.log(this.allPlaces)
    })

    this.formGroup = new FormGroup({
      location: new FormControl("", Validators.required),
      startDate: new FormControl("", Validators.required),
      endDate: new FormControl("", Validators.required),
      numOfGuests: new FormControl("", Validators.required),
    })
  }

  public search(){
    this.selectedNum = this.formGroup.value.numOfGuests
    this.accommodationService.searchAccommodation(this.formGroup.value.location, this.formGroup.value.numOfGuests, this.formGroup.value.startDate, this.formGroup.value.endDate)
      .subscribe(res => {
        this.accommodations = res
        if(this.accommodations.length == 0){
          this.hasFoundAccommodation = true
        } else {
          this.hasFoundAccommodation = false
        }
        console.log(this.accommodations)
      })
  }

  public getAllPlaces(allAccommodations : any){
    for(let accommodation of allAccommodations){
      if(!this.allPlaces.includes(accommodation.country)){
        this.allPlaces.push(accommodation.country)
      }
      if(!this.allPlaces.includes(accommodation.city)){
        this.allPlaces.push(accommodation.city)
      }
    }
  }

  public makeReservation(accommodationId : any) : void{
    this.dto.accommodationId = accommodationId;
    this.dto.userId = 1
    this.dto.guestNumber = this.formGroup.value.numOfGuests
    this.dto.reserveFrom = this.formGroup.value.startDate
    this.dto.reserveTo = this.formGroup.value.endDate

    this.reservationService.createReservation(this.dto).subscribe({
      next : res => {
        this.toastr.success('Success', 'Created reservation!')
      },
      error : err => {
        this.toastr.error('Error', err)
      }
    })
  }

  public goToDetails(accommodationName : any) : void{
    this.router.navigate(['guest-search-accommodation', accommodationName]);
  }
}
