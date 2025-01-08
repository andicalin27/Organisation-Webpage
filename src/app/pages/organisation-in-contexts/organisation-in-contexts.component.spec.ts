import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationInContextsComponent } from './organisation-in-contexts.component';

describe('OrganisationInContextsComponent', () => {
  let component: OrganisationInContextsComponent;
  let fixture: ComponentFixture<OrganisationInContextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationInContextsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationInContextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
