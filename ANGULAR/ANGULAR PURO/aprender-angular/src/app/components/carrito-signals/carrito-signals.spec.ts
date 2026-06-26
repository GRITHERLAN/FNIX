import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoSignals } from './carrito-signals';

describe('CarritoSignals', () => {
  let component: CarritoSignals;
  let fixture: ComponentFixture<CarritoSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
