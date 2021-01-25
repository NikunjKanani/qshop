import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { shippingaddressPage } from './shippingaddress.page';

describe('shippingaddressPage', () => {
  let component: shippingaddressPage;
  let fixture: ComponentFixture<shippingaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [shippingaddressPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(shippingaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
