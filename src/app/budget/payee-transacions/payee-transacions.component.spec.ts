import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeTransacionsComponent } from './payee-transacions.component';

describe('PayeeTransacionsComponent', () => {
  let component: PayeeTransacionsComponent;
  let fixture: ComponentFixture<PayeeTransacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeTransacionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeTransacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
