import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
// import { OrganisationComponent } from './sections/organisation/organisation.component';

// import { OverviewWebsiteComponent } from './sections/overview-website/overview-website.component';

// import { DefinitionsofCreativityComponent } from './sections/definitionsof-creativity/definitionsof-creativity.component';
// import { IntroductionorgComponent } from './sections/introductionorg/introductionorg.component';
// import { ContactComponent } from './sections/contact/contact.component';
import { CreativeExpressionsOrganisationComponent } from '../creative-expressions-organisation/creative-expressions-organisation.component';
import { EssenceofOrganisationComponent } from '../essenceof-organisation/essenceof-organisation.component';
import { OrganisationInContextsComponent } from '../organisation-in-contexts/organisation-in-contexts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,CreativeExpressionsOrganisationComponent,EssenceofOrganisationComponent,OrganisationInContextsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
}
