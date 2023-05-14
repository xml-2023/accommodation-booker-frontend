import { Component, OnInit } from '@angular/core';
import { CreateAccommodation } from '../model/create-accommodation.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccommodationService } from '../service/accommodation.service';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-accommodation-create',
  templateUrl: './accommodation-create.component.html',
  styleUrls: ['./accommodation-create.component.css']
})
export class AccommodationCreateComponent implements OnInit {

  public accommodation : CreateAccommodation = new CreateAccommodation

  accommodationForm = new FormGroup({
    name : new FormControl(),
    minGuests : new FormControl(),
    maxGuests : new FormControl(),
    description : new FormControl(),
    country : new FormControl(),
    city : new FormControl(),
    street : new FormControl(),
    number : new FormControl(),
    isAutomaticConfirmation : new FormControl(),
    priceType : new FormControl(),
    images : new FormControl()
  })

  constructor( private accommodationService : AccommodationService, private formBuilder : FormBuilder, private toastr: ToastrService, private imageService : ImageService){ }

  ngOnInit(): void {
    
    this.accommodationForm = this.formBuilder.group({
      name : [this.accommodation.name, Validators.required],
      minGuests: [this.accommodation.minGuests, Validators.compose([
           Validators.required,  Validators.min(1) ])],
      maxGuests: [this.accommodation.maxGuests, Validators.compose([
           Validators.required,  Validators.min(1) ])  ],
      description : [this.accommodation.description, Validators.required],
      country : [this.accommodation.country, Validators.required],
      city : [this.accommodation.city, Validators.required],
      street : [this.accommodation.street, Validators.required],
      number : [this.accommodation.number, Validators.required],
      isAutomaticConfirmation : [this.accommodation.isAutomaticConfirmation, Validators.required],
      priceType : [this.accommodation.priceType, Validators.required],
      images: ['', Validators.required]
    })
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      const imagesControl = this.accommodationForm.get('images');
      if (imagesControl) {
        imagesControl.setValue(files);
      }
    }
  }

  public createAccommodation() : void{
    this.accommodation.name = this.accommodationForm.value.name;
    this.accommodation.minGuests = this.accommodationForm.value.minGuests;
    this.accommodation.maxGuests = this.accommodationForm.value.maxGuests;
    this.accommodation.description = this.accommodationForm.value.description;
    this.accommodation.country = this.accommodationForm.value.country;
    this.accommodation.city = this.accommodationForm.value.city;
    this.accommodation.street = this.accommodationForm.value.street;
    this.accommodation.number = this.accommodationForm.value.number;
    this.accommodation.isAutomaticConfirmation = this.accommodationForm.value.isAutomaticConfirmation;
    this.accommodation.priceType = this.accommodationForm.value.priceType;
    this.accommodation.userId = 1
    console.log(this.accommodation)
    this.imageService.uploadImages(this.accommodationForm.value.images, this.accommodationForm.value.name).subscribe({
      next: res => {
        this.accommodationService.createAccommodation(this.accommodation).subscribe(res => {
          this.toastr.success('Success', 'Accommodation is created!');
         });
      },
      error: error => {
        console.error(error);
      }
    });
    
   
  }  

}
