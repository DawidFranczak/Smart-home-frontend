import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceSelectComponent } from './add-device-select.component';

describe('AddDeviceSelectComponent', () => {
  let component: AddDeviceSelectComponent;
  let fixture: ComponentFixture<AddDeviceSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeviceSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDeviceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
