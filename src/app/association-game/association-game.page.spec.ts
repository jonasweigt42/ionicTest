import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssociationGamePage } from './association-game.page';

describe('AssociationGamePage', () => {
  let component: AssociationGamePage;
  let fixture: ComponentFixture<AssociationGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
