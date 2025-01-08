import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeExpressionsOrganisationComponent } from './creative-expressions-organisation.component';

describe('CreativeExpressionsOrganisationComponent', () => {
  let component: CreativeExpressionsOrganisationComponent;
  let fixture: ComponentFixture<CreativeExpressionsOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeExpressionsOrganisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeExpressionsOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
