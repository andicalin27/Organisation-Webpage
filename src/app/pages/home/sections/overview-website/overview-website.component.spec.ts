import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWebsiteComponent } from './overview-website.component';

describe('OverviewWebsiteComponent', () => {
  let component: OverviewWebsiteComponent;
  let fixture: ComponentFixture<OverviewWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
