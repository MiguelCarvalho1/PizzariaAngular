import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoExistComponent } from './page-no-exist.component';

describe('PageNotExistComponent', () => {
  let component: PageNoExistComponent;
  let fixture: ComponentFixture<PageNoExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNoExistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNoExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
