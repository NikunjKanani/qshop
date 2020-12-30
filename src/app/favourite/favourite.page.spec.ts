import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { favouritePage } from './favourite.page';

describe('favouritePage', () => {
  let component: favouritePage;
  let fixture: ComponentFixture<favouritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [favouritePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(favouritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
