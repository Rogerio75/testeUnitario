import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
private poupanca : number = 10;
private carteira : number = 50;

ngOnInit(): void {

}

get getPoupanca(): number {
   return this.poupanca;
}

get getCarteira(): number {
   return this.carteira;

}

  public setSacar(value: string): number  {
   const  sacar = Number (value);
   if() {

   }
   console.log (sacar);
   return sacar;
    }

public setDepositar (value : string ) : number {
 const depositar = Number (value);
 return depositar;

}







}
