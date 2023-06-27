import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelBillMainComponent } from './fuel-bill-main.component';

describe('FuelBillMainComponent', () => {
  let component: FuelBillMainComponent;
  let fixture: ComponentFixture<FuelBillMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelBillMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelBillMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
