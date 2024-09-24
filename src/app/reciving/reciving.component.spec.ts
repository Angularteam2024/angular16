import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivingComponent } from './reciving.component';

describe('RecivingComponent', () => {
  let component: RecivingComponent;
  let fixture: ComponentFixture<RecivingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivingComponent]
    });
    fixture = TestBed.createComponent(RecivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
