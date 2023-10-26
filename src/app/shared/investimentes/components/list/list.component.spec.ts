import { Investiments } from './../../model/investiments';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentService } from '../../services/list-investiment.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentService;
  const mockList: Array <Investiments> = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports : [HttpClientModule]
    });
    service = TestBed.inject(ListInvestimentService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it ('(U) should list investimentes',() => {
     spyOn(service,'list').and.returnValue(of(mockList));
     component.ngOnInit();
     fixture.detectChanges();

     expect (service.list).toHaveBeenCalledWith();
     expect(component.investiments.length).toEqual(5);
     expect(component.investiments[0].name).toEqual('Itaú');
     expect(component.investiments[0].value).toEqual(100);
     expect(component.investiments[4].name).toEqual('Banco 5');
     expect(component.investiments[4].value).toEqual(100);

})

  it ('(I)should list investiments', () =>{
    spyOn(service, 'list').and.returnValue(of(mockList));

  component.ngOnInit();
  fixture.detectChanges();
  let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

   expect (investiments.length).toBe(0);
  // expect (investiments[0].textContent.trim()).toEqual ('Itaú | 100');
  //expect (investiments[0].textContent.trim()).toEqual ('Banco | 100');
});




});
