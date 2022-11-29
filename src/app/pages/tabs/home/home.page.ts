import { Component, OnInit } from '@angular/core';
import { Keyboard, SwiperOptions } from 'swiper';

import SwiperCore, {Navigation, Pagination, Scrollbar, A11y,} from 'swiper'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard])

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1.2,
    navigation: true,
    pagination: {clickable: true},
    centeredSlides: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
