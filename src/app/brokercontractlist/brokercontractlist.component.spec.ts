import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokercontractlistComponent } from './brokercontractlist.component';

describe('BrokercontractlistComponent', () => {
  let component: BrokercontractlistComponent;
  let fixture: ComponentFixture<BrokercontractlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokercontractlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokercontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
