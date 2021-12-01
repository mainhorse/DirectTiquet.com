import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOptionsUserComponent } from './home-options-user.component';

describe('HomeOptionsUserComponent', () => {
  let component: HomeOptionsUserComponent;
  let fixture: ComponentFixture<HomeOptionsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOptionsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOptionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
