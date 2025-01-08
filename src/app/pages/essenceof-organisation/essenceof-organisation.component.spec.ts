import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceofOrganisationComponent } from './essenceof-organisation.component';

describe('EssenceofOrganisationComponent', () => {
  let component: EssenceofOrganisationComponent;
  let fixture: ComponentFixture<EssenceofOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssenceofOrganisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssenceofOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
