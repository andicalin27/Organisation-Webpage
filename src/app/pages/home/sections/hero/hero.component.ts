import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize the main slider
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.thumbnail-slider',
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      dots: true,
      appendDots: $('.custom-dots-container'),
    });

    // Initialize the thumbnail slider
    $('.thumbnail-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.main-slider',
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      pauseOnHover: false,
    });

    // Custom button functionality
    $('.prev-btn').click(() => {
      $('.thumbnail-slider').slick('slickPrev');
    });

    $('.next-btn').click(() => {
      $('.thumbnail-slider').slick('slickNext');
    });

    // Add and remove disabled class for custom buttons
    $('.prev-btn').addClass('slick-disabled');
    $('.thumbnail-slider').on('afterChange', () => {
      if ($('.slick-prev').hasClass('slick-disabled')) {
        $('.prev-btn').addClass('slick-disabled');
      } else {
        $('.prev-btn').removeClass('slick-disabled');
      }

      if ($('.slick-next').hasClass('slick-disabled')) {
        $('.next-btn').addClass('slick-disabled');
      } else {
        $('.next-btn').removeClass('slick-disabled');
      }
    });
  }
}
