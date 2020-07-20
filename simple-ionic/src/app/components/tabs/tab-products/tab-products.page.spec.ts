import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabProductPage } from './tab-products.page';
import { ListCardProductsModule } from 'src/app/components/products/list-card-products/list-card-products.module';

describe('TabProductPage', () => {
  let component: TabProductPage;
  let fixture: ComponentFixture<TabProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabProductPage],
      imports: [IonicModule.forRoot(), ListCardProductsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
