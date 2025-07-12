import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xo } from './xo';

describe('Xo', () => {
  let component: Xo;
  let fixture: ComponentFixture<Xo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
