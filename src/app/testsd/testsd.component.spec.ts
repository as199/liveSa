import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsdComponent } from './testsd.component';

describe('TestsdComponent', () => {
  let component: TestsdComponent;
  let fixture: ComponentFixture<TestsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
