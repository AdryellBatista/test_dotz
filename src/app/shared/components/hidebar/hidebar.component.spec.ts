import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidebarComponent } from './hidebar.component';

describe('HidebarComponent', () => {
  let component: HidebarComponent;
  let fixture: ComponentFixture<HidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
