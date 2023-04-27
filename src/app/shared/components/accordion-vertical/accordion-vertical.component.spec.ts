import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionVerticalComponent } from './accordion-vertical.component';

describe('AccordionVerticalComponent', () => {
  let component: AccordionVerticalComponent;
  let fixture: ComponentFixture<AccordionVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
