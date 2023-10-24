import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ListInvestimentService } from './list-investiment.service';
import { Investiments } from '../model/investiments';


describe('ListInvestimentService', () => {
  let service: ListInvestimentService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  const mockList: Array <Investiments> = [
    {
     name:'Itaú',
     value: 100
    },
    {
      name:'Banco do Brasil',
      value: 100
     },
     {
      name:'Bradesco',
      value: 100
     },
     {
      name:'Nubank',
      value: 100
     },
     {
      name:'Banco 5',
      value: 100
     }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

      ],

    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestimentService);
  });
 afterEach (() => {
  httpTestingController.verify()
 });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});