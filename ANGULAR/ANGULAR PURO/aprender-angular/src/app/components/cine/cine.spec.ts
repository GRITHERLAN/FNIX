import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cine } from './cine';

describe('Cine', () => {
  let component: Cine;
  let fixture: ComponentFixture<Cine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
