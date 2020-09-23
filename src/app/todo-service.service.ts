import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie/movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService implements OnInit{
  
  ngOnInit():void {
   
  } 
  movies:Movie[];
  movie:Movie;
  url = 'https://jsonplaceholder.typicode.com/todos'
  url1 = 'https://localhost:44395/api/movie'
  constructor(private http:HttpClient) { 
  
  }
  
  getTodosHttp1():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url1)
  }

  postTodosHttp2(movies1:any):Observable<Movie>{
    return this.http.post<Movie>(this.url1,movies1,httpOptions);
  }
  
}
