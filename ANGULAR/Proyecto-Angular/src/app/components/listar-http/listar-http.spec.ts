import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHttp } from './listar-http';

describe('ListarHttp', () => {
  let component: ListarHttp;
  let fixture: ComponentFixture<ListarHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
