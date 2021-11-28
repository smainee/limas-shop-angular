import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [SlideComponent],
  imports: [CommonModule, CarouselModule],
  exports: [SlideComponent],
})
export class SlideModule {}
