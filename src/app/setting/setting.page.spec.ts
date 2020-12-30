import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { settingPage } from './setting.page';

describe('settingPage', () => {
  let component: settingPage;
  let fixture: ComponentFixture<settingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [settingPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(settingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
