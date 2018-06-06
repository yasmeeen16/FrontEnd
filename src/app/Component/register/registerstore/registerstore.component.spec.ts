import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterstoreComponent } from './registerstore.component';

describe('RegisterstoreComponent', () => {
  let component: RegisterstoreComponent;
  let fixture: ComponentFixture<RegisterstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
