import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHrComponent } from './show-hr.component';

describe('ShowHrComponent', () => {
  let component: ShowHrComponent;
  let fixture: ComponentFixture<ShowHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
