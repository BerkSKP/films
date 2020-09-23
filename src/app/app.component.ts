import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import { TodoServiceService } from "../app/todo-service.service";
import { Movie } from './movie/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'films';
  constructor(private todoService:TodoServiceService) { }
  ngOnInit():void{
    
  }
  movies:Movie[];
  movies1 = new FormGroup({
    movieName: new FormControl(''),
    img: new FormControl('')
  });
 
  
  // onSubmit() {

    // const uploadData = new FormData();
    // uploadData.append('img', this.selectedFile, this.selectedFile.name);
    // uploadData.append('name', document.getElementById('movieName').nodeValue);

    // console.log(uploadData);
  //   this.test1= this.movies1.get('movieName').value;
  //   console.log(this.movies1.value);
  //   this.todoService.postTodosHttp2(this.movies1.value).subscribe(Data => {
  //     console.log(Data + "Her tester jeg");      
  //   });
  // }
  // test1:string=" ";
  // url = "";
  // selectFile(event) {
  //   if(event.target.files) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0])
  //     reader.onload = (event:any) => {
  //       this.url = event.target.result
  //     }
  //   }
    
  // }
}