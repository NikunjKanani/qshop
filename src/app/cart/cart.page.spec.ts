import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { cartPage } from './cart.page';

describe('cartPage', () => {
  let component: cartPage;
  let fixture: ComponentFixture<cartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [cartPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(cartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
