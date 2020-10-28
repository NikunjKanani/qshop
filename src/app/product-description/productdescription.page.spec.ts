import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { productdescriptionPage } from './productdescription.page';

describe('productdescriptionPage', () => {
  let component: productdescriptionPage;
  let fixture: ComponentFixture<productdescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [productdescriptionPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(productdescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
