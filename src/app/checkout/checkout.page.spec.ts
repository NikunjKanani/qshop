import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { checkoutPage } from './checkout.page';

describe('checkoutPage', () => {
  let component: checkoutPage;
  let fixture: ComponentFixture<checkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [checkoutPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(checkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
