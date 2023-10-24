import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//interface
import { map } from 'rxjs/operators';
import { Investiments } from './../model/investiments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListInvestimentService {
private url: string =
"https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json"

  constructor(private http: HttpClient ) { }

public list (): Observable<Array<Investiments>>   {
return this.http.get<Array<Investiments>>(this.url).pipe(
map(res => res )

)
;

};

}
