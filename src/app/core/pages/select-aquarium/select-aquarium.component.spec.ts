import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAquariumComponent } from './select-aquarium.component';

describe('SelectAquariumComponent', () => {
  let component: SelectAquariumComponent;
  let fixture: ComponentFixture<SelectAquariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAquariumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
