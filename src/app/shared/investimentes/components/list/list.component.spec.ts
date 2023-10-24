import { Investiments } from './../../model/investiments';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
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
  expect (Investiments.length).toBe(4);
  expect (Investiments[0].name).toContain('Itaú');
  expect (Investiments[3].name).toContain('Inter');
});

it('(I) Should list investiments',()=>{
 let Investiments =
 fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
expect(Investiments.length).toBe(4);
expect (Investiments[0].textContent.trim()).toEqual('Itaú | 100');
expect (Investiments[3].textContent.trim()).toEqual('Inter | 100');

});




});
