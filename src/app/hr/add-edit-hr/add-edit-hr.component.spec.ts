import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHrComponent } from './add-edit-hr.component';

describe('AddEditHrComponent', () => {
  let component: AddEditHrComponent;
  let fixture: ComponentFixture<AddEditHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
