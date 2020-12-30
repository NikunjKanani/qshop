import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { myorderPage } from './myprofile.page';

describe('myorderPage', () => {
  let component: myorderPage;
  let fixture: ComponentFixture<myorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [myorderPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(myorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
