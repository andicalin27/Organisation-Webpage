import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionorgComponent } from './introductionorg.component';

describe('IntroductionorgComponent', () => {
  let component: IntroductionorgComponent;
  let fixture: ComponentFixture<IntroductionorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionorgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
