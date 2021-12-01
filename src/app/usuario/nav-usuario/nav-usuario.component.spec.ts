import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUsuarioComponent } from './nav-usuario.component';

describe('NavUsuarioComponent', () => {
  let component: NavUsuarioComponent;
  let fixture: ComponentFixture<NavUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
