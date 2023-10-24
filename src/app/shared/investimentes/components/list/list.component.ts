//services
import { ListInvestimentService } from './../../services/list-investiment.service';
import { Component, OnInit } from '@angular/core';
//Model
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public investiments: Array <Investiments> = [

]
 constructor(private listInvestimentService : ListInvestimentService ){}

  ngOnInit(): void {
  this.listInvestimentService
  .list()
  .subscribe ((res) =>(this.investiments = res));

  }




}
