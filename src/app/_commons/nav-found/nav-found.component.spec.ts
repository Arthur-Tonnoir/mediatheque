import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFoundComponent } from './nav-found.component';

describe('NavFoundComponent', () => {
  let component: NavFoundComponent;
  let fixture: ComponentFixture<NavFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
