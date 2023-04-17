import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOptionListComponent } from './navbar-option-list.component';

describe('NavbarOptionListComponent', () => {
  let component: NavbarOptionListComponent;
  let fixture: ComponentFixture<NavbarOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
