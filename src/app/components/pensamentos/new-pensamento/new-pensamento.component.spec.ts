import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPensamentoComponent } from './new-pensamento.component';

describe('NewPensamentoComponent', () => {
  let component: NewPensamentoComponent;
  let fixture: ComponentFixture<NewPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
