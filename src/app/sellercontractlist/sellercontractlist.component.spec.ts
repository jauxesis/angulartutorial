import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellercontractlistComponent } from './sellercontractlist.component';

describe('SellercontractlistComponent', () => {
  let component: SellercontractlistComponent;
  let fixture: ComponentFixture<SellercontractlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellercontractlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellercontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
