import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ngAfterViewInit() {
    // Your jQuery code here
    $('.toggle-menu').click( () => {
      $('.toggle-menu').toggleClass('active');
      $('#menu').toggleClass('open');
    });
  }
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Default behavior বন্ধ করা
    const targetElement = document.getElementById(sectionId); // Section ID 
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start' // Section-
      });
    } else {
      console.error(`Section with ID '${sectionId}' not found!`);
    }
  }
}
