import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AvailabilityService } from '../service/availability.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-availability',
  templateUrl: './edit-availability.component.html',
  styleUrls: ['./edit-availability.component.css']
})
export class EditAvailabilityComponent implements OnInit {
  public accommodationId : number = 0
  public availabilityId : number = 0
  public availability : any

  availabilityForm = new FormGroup({
    availableFrom : new FormControl(),
    availableTo : new FormControl(),
    priceInEuros : new FormControl()
  })

  constructor( private availabilityService : AvailabilityService, private formBuilder : FormBuilder, private route: ActivatedRoute,  private router : Router, private toastr: ToastrService){ }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.accommodationId = params['accId']
      this.availabilityId = params['avaId']


      this.availabilityService.findById(this.availabilityId).subscribe(res =>{
        this.availability = res
        console.log(this.availability)

        this.availabilityForm = this.formBuilder.group({
          availableFrom : [new Date(this.availability.availableFrom).toISOString().substring(0, 10)],
          availableTo: [new Date(this.availability.availableTo).toISOString().substring(0, 10)],
          priceInEuros: [this.availability.priceInEuros]
        })
    })
    })

   
  }

  public editAvailability() : void{
    this.availability.availableFrom = this.availabilityForm.value.availableFrom;
    this.availability.availableTo = this.availabilityForm.value.availableTo;
    this.availability.priceInEuros = this.availabilityForm.value.priceInEuros;
    this.availability.accommodationId = this.accommodationId
    console.log(this.availability)
    this.availabilityService.editAvailability(this.availability).subscribe({
      next: res => {
        this.toastr.success('Success', 'Availability for accommodation is edited!');
      },
      error: error => {
        console.error(error);
      }
    });
  }  

}
