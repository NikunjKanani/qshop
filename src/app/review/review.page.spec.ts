import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { reviewPage } from './review.page';

describe('reviewPage', () => {
  let component: reviewPage;
  let fixture: ComponentFixture<reviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [reviewPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(reviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
