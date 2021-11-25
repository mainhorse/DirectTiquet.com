import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworksSocialsComponent } from './networks-socials.component';

describe('NetworksSocialsComponent', () => {
  let component: NetworksSocialsComponent;
  let fixture: ComponentFixture<NetworksSocialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworksSocialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworksSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
