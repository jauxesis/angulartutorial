import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyercontractlistComponent } from './buyercontractlist.component';

describe('BuyercontractlistComponent', () => {
  let component: BuyercontractlistComponent;
  let fixture: ComponentFixture<BuyercontractlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyercontractlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyercontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
