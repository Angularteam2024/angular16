import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstackComponent } from './mainstack.component';

describe('MainstackComponent', () => {
  let component: MainstackComponent;
  let fixture: ComponentFixture<MainstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainstackComponent]
    });
    fixture = TestBed.createComponent(MainstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
