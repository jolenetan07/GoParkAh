import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarparkDetailPage } from './carpark-detail.page';

describe('CarparkDetailPage', () => {
  let component: CarparkDetailPage;
  let fixture: ComponentFixture<CarparkDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarparkDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarparkDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
