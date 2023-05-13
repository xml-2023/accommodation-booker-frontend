import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AvailabilityService } from '../service/availability.service';
import { ToastrService } from 'ngx-toastr';
import { CreateAvailability } from '../model/create-availability.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-availability',
  templateUrl: './create-availability.component.html',
  styleUrls: ['./create-availability.component.css']
})
export class CreateAvailabilityComponent implements OnInit {
  public accommodationId : number = 0
  public availability : CreateAvailability = new CreateAvailability

  availabilityForm = new FormGroup({
    from : new FormControl(),
    to : new FormControl(),
    priceInEuros : new FormControl(),
  })

  constructor( private availabilityService : AvailabilityService, private formBuilder : FormBuilder, private route: ActivatedRoute,  private router : Router, private toastr: ToastrService){ }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.accommodationId = params['id']
    })
    
    this.availabilityForm = this.formBuilder.group({
      from : [this.availability.from, Validators.required],
      to: [this.availability.to, Validators.required],
      priceInEuros: [this.availability.priceInEuros, Validators.compose([
           Validators.required,  Validators.min(1) ])  ]
    })
  }

  public createAccommodation() : void{
    this.availability.from = this.availabilityForm.value.from;
    this.availability.to = this.availabilityForm.value.to;
    this.availability.priceInEuros = this.availabilityForm.value.priceInEuros;
    this.availability.accommodationId = this.accommodationId;
    console.log(this.availability)
    this.availabilityService.createAvailability(this.availability).subscribe({
      next: res => {
        this.toastr.success('Success', 'Availability for accommodation is created!');
      },
      error: error => {
        console.error(error);
      }
    });
  }  

}
