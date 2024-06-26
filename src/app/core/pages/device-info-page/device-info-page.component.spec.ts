import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInfoPageComponent } from './device-info-page.component';

describe('DeviceInfoPageComponent', () => {
  let component: DeviceInfoPageComponent;
  let fixture: ComponentFixture<DeviceInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
