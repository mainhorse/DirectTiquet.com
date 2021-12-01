import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOptionChooseComponent } from './home-option-choose.component';

describe('HomeOptionChooseComponent', () => {
  let component: HomeOptionChooseComponent;
  let fixture: ComponentFixture<HomeOptionChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOptionChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOptionChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
