import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOuEditarComponent } from './registrar-ou.editar.component';

describe('RegistrarOuEditarComponent', () => {
  let component: RegistrarOuEditarComponent;
  let fixture: ComponentFixture<RegistrarOuEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarOuEditarComponent]
    });
    fixture = TestBed.createComponent(RegistrarOuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
