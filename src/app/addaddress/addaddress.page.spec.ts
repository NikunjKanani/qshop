import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { addaddressPage } from './addaddress.page';

describe('addaddressPage', () => {
  let component: addaddressPage;
  let fixture: ComponentFixture<addaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addaddressPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(addaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
