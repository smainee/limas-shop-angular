import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '@services/firestore.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  slides = [
    { id: 1, img: 'https://dummyimage.com/350x150/423b42/fff' },
    { id: 2, img: 'https://dummyimage.com/350x150/2a2b7a/fff' },
    { id: 3, img: 'https://dummyimage.com/350x150/1a2b7a/fff' },
    { id: 4, img: 'https://dummyimage.com/350x150/7a2b7a/fff' },
    { id: 5, img: 'https://dummyimage.com/350x150/9a2b7a/fff' },
    { id: 6, img: 'https://dummyimage.com/350x150/5a2b7a/fff' },
    { id: 6, img: 'https://dummyimage.com/350x150/4a2b7a/fff' },
  ];

  constructor(private test: FireStoreService) {}

  ngOnInit(): void {
    this.test.get('any').subscribe((res) => {
      console.log(res);
    });
  }
}
