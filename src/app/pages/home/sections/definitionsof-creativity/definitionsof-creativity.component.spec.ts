import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsofCreativityComponent } from './definitionsof-creativity.component';

describe('DefinitionsofCreativityComponent', () => {
  let component: DefinitionsofCreativityComponent;
  let fixture: ComponentFixture<DefinitionsofCreativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefinitionsofCreativityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinitionsofCreativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
