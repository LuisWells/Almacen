import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoObjetoComponent } from './listado-objeto.component';

describe('ListadoObjetoComponent', () => {
  let component: ListadoObjetoComponent;
  let fixture: ComponentFixture<ListadoObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoObjetoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListadoObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
