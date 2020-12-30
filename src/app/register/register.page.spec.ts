import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { registerPage } from './register.page';

describe('registerPage', () => {
  let component: registerPage;
  let fixture: ComponentFixture<registerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [registerPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(registerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});