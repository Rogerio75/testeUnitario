import { Investiments } from './../../model/investiments';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports : [HttpClientModule]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it ('(U) should list investimentes',() => {
   let Investiments = component.investiments;
  expect (Investiments.length).toBe(0);

})




});
