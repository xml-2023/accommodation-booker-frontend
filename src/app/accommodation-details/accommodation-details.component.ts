
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent implements OnInit {

  currentIndex: number = 0;
  timeoutId?: number;
  public accommodationName : string = '';
  public images : string[] = [];
  public errorMessage : string = '';
  constructor(private imageService : ImageService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.accommodationName = params['name']
    })
    this.imageService.getImagesByAccommodation(this.accommodationName).subscribe({
      next : res => {
        this.images = res
        console.log(this.images)
      },
      error : err => {
        console.log(err.error.message)
        this.errorMessage = err.error.message
      }
    })
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.images.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.images[this.currentIndex]}')`;
  }
}