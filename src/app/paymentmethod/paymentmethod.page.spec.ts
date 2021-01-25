import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { paymentmethodPage } from './paymentmethod.page';

describe('paymentmethodPage', () => {
  let component: paymentmethodPage;
  let fixture: ComponentFixture<paymentmethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [paymentmethodPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(paymentmethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
