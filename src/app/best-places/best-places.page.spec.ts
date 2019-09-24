import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlacesPage } from './best-places.page';

describe('BestPlacesPage', () => {
  let component: BestPlacesPage;
  let fixture: ComponentFixture<BestPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPlacesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
