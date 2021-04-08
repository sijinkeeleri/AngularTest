import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtest2mdlcmpntComponent } from './newtest2mdlcmpnt.component';

describe('Newtest2mdlcmpntComponent', () => {
  let component: Newtest2mdlcmpntComponent;
  let fixture: ComponentFixture<Newtest2mdlcmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newtest2mdlcmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newtest2mdlcmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
