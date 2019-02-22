import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorUnkonwComponent } from './error-unkonw.component';

describe('ErrorUnkonwComponent', () => {
  let component: ErrorUnkonwComponent;
  let fixture: ComponentFixture<ErrorUnkonwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorUnkonwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorUnkonwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
