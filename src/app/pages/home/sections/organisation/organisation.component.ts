import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-organisation',
  imports: [],
  templateUrl: './organisation.component.html',
  styleUrl: './organisation.component.css'
})
export class OrganisationComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialize the main slider
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      dots: true,
    });

    // Initialize the thumbnail slider


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
