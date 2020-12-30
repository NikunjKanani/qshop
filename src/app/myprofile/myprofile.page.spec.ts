import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { myprofilePage } from './myprofile.page';

describe('myprofilePage', () => {
  let component: myprofilePage;
  let fixture: ComponentFixture<myprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [myprofilePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(myprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
