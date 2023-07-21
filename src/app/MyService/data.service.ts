import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api : HttpClient ) { }

  getDataFun()
  {
    return this.api.get('https://jsonplaceholder.typicode.com/posts');
  }
}
