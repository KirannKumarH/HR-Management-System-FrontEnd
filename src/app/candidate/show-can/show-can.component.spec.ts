import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCanComponent } from './show-can.component';

describe('ShowCanComponent', () => {
  let component: ShowCanComponent;
  let fixture: ComponentFixture<ShowCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
