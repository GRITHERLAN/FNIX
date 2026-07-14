import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosReactivos } from './formularios-reactivos';

describe('FormulariosReactivos', () => {
  let component: FormulariosReactivos;
  let fixture: ComponentFixture<FormulariosReactivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosReactivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosReactivos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
