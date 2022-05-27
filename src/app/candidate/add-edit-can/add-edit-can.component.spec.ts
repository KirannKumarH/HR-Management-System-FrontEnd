import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCanComponent } from './add-edit-can.component';

describe('AddEditCanComponent', () => {
  let component: AddEditCanComponent;
  let fixture: ComponentFixture<AddEditCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
