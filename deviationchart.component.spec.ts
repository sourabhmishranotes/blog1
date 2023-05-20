import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationchartComponent } from './deviationchart.component';

describe('DeviationchartComponent', () => {
  let component: DeviationchartComponent;
  let fixture: ComponentFixture<DeviationchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationchartComponent]
    });
    fixture = TestBed.createComponent(DeviationchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
