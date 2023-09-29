import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddlugarPage } from './addlugar.page';

describe('AddlugarPage', () => {
  let component: AddlugarPage;
  let fixture: ComponentFixture<AddlugarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddlugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
