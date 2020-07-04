import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingViewPage } from './testing-view.page';

describe('TestingViewPage', () => {
  let component: TestingViewPage;
  let fixture: ComponentFixture<TestingViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
