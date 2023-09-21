import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigeComponent } from './sige.component';

describe('SigeComponent', () => {
  let component: SigeComponent;
  let fixture: ComponentFixture<SigeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigeComponent]
    });
    fixture = TestBed.createComponent(SigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
