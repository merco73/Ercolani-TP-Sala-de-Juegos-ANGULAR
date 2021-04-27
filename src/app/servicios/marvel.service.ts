import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {


  constructor(public http:HttpClient) { }
 
  getJson(url:string){
    return this.http.get(url);
  }
 
 
  // PUBLIC_KEY = '';
  // HASH = '';
  // URL_API=`https://gateway.marvel.com:443/v1/public/characters?apikey=da30b7f8cb45c6e9718ed4516df2bddc`;

  // constructor(public http:HttpClient) { }

  // getAllCharacters(): Observable<any>{
  //   return this.http.get<any>(this.URL_API)
  //           .pipe(map((data:any) =>data.data.results))
  // }

}
