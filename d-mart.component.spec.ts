import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMartComponent } from './d-mart.component';

describe('DMartComponent', () => {
  let component: DMartComponent;
  let fixture: ComponentFixture<DMartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DMartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
