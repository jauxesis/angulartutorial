import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbuyerbiddetailsComponent } from './getbuyerbiddetails.component';

describe('GetbuyerbiddetailsComponent', () => {
  let component: GetbuyerbiddetailsComponent;
  let fixture: ComponentFixture<GetbuyerbiddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetbuyerbiddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbuyerbiddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
