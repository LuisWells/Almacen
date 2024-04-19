import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerObjetoComponent } from './ver-objeto.component';

describe('VerObjetoComponent', () => {
  let component: VerObjetoComponent;
  let fixture: ComponentFixture<VerObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerObjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
