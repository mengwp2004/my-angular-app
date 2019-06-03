import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponenlstComponent } from './mycomponenlst.component';

describe('MycomponenlstComponent', () => {
  let component: MycomponenlstComponent;
  let fixture: ComponentFixture<MycomponenlstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomponenlstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponenlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
