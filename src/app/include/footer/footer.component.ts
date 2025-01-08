import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
