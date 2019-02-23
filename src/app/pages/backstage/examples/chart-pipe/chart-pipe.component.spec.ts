import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPipeComponent } from './chart-pipe.component';

describe('ChartPipeComponent', () => {
  let component: ChartPipeComponent;
  let fixture: ComponentFixture<ChartPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
