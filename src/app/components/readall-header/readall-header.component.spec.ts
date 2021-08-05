import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadallHeaderComponent } from './readall-header.component';

describe('ReadallHeaderComponent', () => {
  let component: ReadallHeaderComponent;
  let fixture: ComponentFixture<ReadallHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadallHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
