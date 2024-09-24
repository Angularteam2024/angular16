import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcmainComponent } from './rcmain.component';

describe('RcmainComponent', () => {
  let component: RcmainComponent;
  let fixture: ComponentFixture<RcmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcmainComponent]
    });
    fixture = TestBed.createComponent(RcmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
