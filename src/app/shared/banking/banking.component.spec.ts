import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investimentes/components/list/list.component';
import { HttpClientModule } from '@angular/common/http';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent]
    }).compileComponents();
  });
   beforeEach (async () =>{
   await TestBed.configureTestingModule ({
   declarations: [BankingComponent, ListComponent],
   imports : [HttpClientModule],
  }).compileComponents();

   } );


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent]
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`(u)  getPoupanca(): shoud poupanca have 10`, () => {
    expect(component.getPoupanca).toEqual (10);

 } );

it (`(U) geCarteira(): shoud have carteira = 50`,()=>{
 expect(component.getCarteira).toEqual(50);
}

);

it (`(U) setSacar(): shoud transferia de poupanca da carteira= 50`, () =>{
component.setSacar('10');
fixture.detectChanges ();

expect (component.getPoupanca).toEqual(0);
expect (component.getCarteira).toEqual(60);
});

it (`(U) setSacar(): shoud tranfer poupaca have string (isNan)
or poupanca < value`
,()=>{
expect(component.setSacar('string')).not.toBeTruthy() ;
expect(component.setSacar('100')).not.toBeTruthy();
expect (component.getPoupanca).toEqual(10);
expect (component.getCarteira).toEqual(50);

});

it (`(U) setDepositar(): shoud transferia carteira para Poupanca`, () =>{
  component.setDepositar('50');
  expect(component.getCarteira).toEqual(0);
  expect(component.getPoupanca).toEqual(60);
  });

  it (`(U) setDepositar(): shoud tranfer carteira have string (isNan)
  or carteira < value`
  ,()=>{
  expect(component.setDepositar('string')).not.toBeTruthy() ;
  expect(component.setDepositar('100')).not.toBeTruthy();
  expect (component.getPoupanca).toEqual(10);
  expect (component.getCarteira).toEqual(50);

  });
  it(`(I) setSacar(): shoud transfer poupanca from carteira `, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
  });


  it(`(I) setDepositar(): shoud transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });






});
