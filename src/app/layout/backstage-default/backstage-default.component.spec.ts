import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackstageDefaultComponent } from './backstage-default.component';

describe('BackstageDefaultComponent', () => {
  let component: BackstageDefaultComponent;
  let fixture: ComponentFixture<BackstageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackstageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackstageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
