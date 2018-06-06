import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServicesService {


  constructor(public  http: Http) {

  }

  getStore() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');

    const options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:9090/stores/getall', options).pipe(map(res => res.json()));
  }

}
