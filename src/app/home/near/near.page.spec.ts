import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearPage } from './near.page';

describe('NearPage', () => {
  let component: NearPage;
  let fixture: ComponentFixture<NearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
