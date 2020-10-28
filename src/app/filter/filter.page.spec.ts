import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { filterPage } from './filter.page';

describe('filterPage', () => {
  let component: filterPage;
  let fixture: ComponentFixture<filterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [filterPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(filterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
