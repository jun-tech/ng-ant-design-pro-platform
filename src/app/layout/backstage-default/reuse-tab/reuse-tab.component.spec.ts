import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseTabComponent } from './reuse-tab.component';

describe('ReuseTabComponent', () => {
  let component: ReuseTabComponent;
  let fixture: ComponentFixture<ReuseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
