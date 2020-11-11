import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildcatPage } from './childcat.page';

describe('ChildcatPage', () => {
  let component: ChildcatPage;
  let fixture: ComponentFixture<ChildcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
