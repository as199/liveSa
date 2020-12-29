import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeReservationComponent } from './edite-reservation.component';

describe('EditeReservationComponent', () => {
  let component: EditeReservationComponent;
  let fixture: ComponentFixture<EditeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
