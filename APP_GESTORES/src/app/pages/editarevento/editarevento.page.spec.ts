import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditareventoPage } from './editarevento.page';

describe('EditareventoPage', () => {
  let component: EditareventoPage;
  let fixture: ComponentFixture<EditareventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditareventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
