import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { orderdetailPage } from './myprofile.page';

describe('orderdetailPage', () => {
  let component: orderdetailPage;
  let fixture: ComponentFixture<orderdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [orderdetailPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(orderdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
