import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  imageForm!: FormGroup;
  uploadedImages: any[] = [];
  files : any[]=[]
  name : string = ''

  constructor(private formBuilder: FormBuilder, private imageService: ImageService) {}
  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      name: ['', Validators.required],
      images: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.imageForm.value.images)
    console.log(this.imageForm.value.name)
    this.imageService.uploadImages(this.imageForm.value.images, this.imageForm.value.name).subscribe(
      res => {
        console.log(res);
        console.log("Importovale se")
      },
      error => {
        console.error(error);
      }
    );
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      const imagesControl = this.imageForm.get('images');
      if (imagesControl) {
        imagesControl.setValue(files);
      }
    }
  }
}
