import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarHttp } from './guardar-http';

describe('GuardarHttp', () => {
  let component: GuardarHttp;
  let fixture: ComponentFixture<GuardarHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
