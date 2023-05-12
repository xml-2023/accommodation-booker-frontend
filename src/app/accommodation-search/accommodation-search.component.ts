import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccommodationService } from '../service/accommodation.service';

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.css']
})
export class AccommodationSearchComponent implements OnInit{
  formGroup!: FormGroup;
  accommodations : any
  selectedNum : any
  allAccommodations : any
  allPlaces : string[] = []
  hasFoundAccommodation : boolean = false

  constructor(private accommodationService: AccommodationService){}

  ngOnInit(): void {
    this.accommodationService.findAll().subscribe(res => {
      this.allAccommodations = res.payload.ArrayList
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
        this.accommodations = res.payload.ArrayList
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
      if(!this.allPlaces.includes(accommodation.location)){
        this.allPlaces.push(accommodation.location)
      }
    }
  }
}
