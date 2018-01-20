import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPageComponent } from './admin-add-page.component';

describe('AdminAddPageComponent', () => {
  let component: AdminAddPageComponent;
  let fixture: ComponentFixture<AdminAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
