import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseCardComponent } from './customise-card.component';

describe('CustomiseCardComponent', () => {
  let component: CustomiseCardComponent;
  let fixture: ComponentFixture<CustomiseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomiseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomiseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
