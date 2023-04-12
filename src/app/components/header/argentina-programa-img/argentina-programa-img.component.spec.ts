import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgentinaProgramaImgComponent } from './argentina-programa-img.component';

describe('ArgentinaProgramaImgComponent', () => {
  let component: ArgentinaProgramaImgComponent;
  let fixture: ComponentFixture<ArgentinaProgramaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgentinaProgramaImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgentinaProgramaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
