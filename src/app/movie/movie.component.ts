import { Component, OnInit } from '@angular/core';
import { Movie } from "src/app/movie/movie";
import { TodoServiceService } from "src/app/todo-service.service";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
 
  
  // todoService: Todo;
  movies: Movie[];
  

  constructor(private todoService:TodoServiceService) { }
  // movies:Movie;
  
  ngOnInit(): void {
    this.todoService.getTodosHttp1().subscribe(data=>{this.movies=data
    });
    // axios.get("https://localhost:44395/api/movie").then(rep => {console.log(rep)});
     // this.todoService.postTodosHttp2().subscribe(data=>{this.movies=data;
     // this.todoService.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      // this.postId = data.id;
      // console.log("hej");      
      };
    }
