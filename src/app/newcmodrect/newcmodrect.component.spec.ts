import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcmodrectComponent } from './newcmodrect.component';

describe('NewcmodrectComponent', () => {
  let component: NewcmodrectComponent;
  let fixture: ComponentFixture<NewcmodrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcmodrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcmodrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
