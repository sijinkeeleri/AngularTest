import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmdlComponent } from './testmdl.component';

describe('TestmdlComponent', () => {
  let component: TestmdlComponent;
  let fixture: ComponentFixture<TestmdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
