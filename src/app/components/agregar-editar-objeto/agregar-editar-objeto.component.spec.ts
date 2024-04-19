import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarObjetoComponent } from './agregar-editar-objeto.component';

describe('AgregarEditarObjetoComponent', () => {
  let component: AgregarEditarObjetoComponent;
  let fixture: ComponentFixture<AgregarEditarObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarObjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
