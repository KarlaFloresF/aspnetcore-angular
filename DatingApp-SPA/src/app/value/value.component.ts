import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values: any;
  // using dependency injection
  // Once we have access to this http client 
  // we can make http request to out API server
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  // observable: stream of data that we're getting from our API
  getValues(){
    this.http.get('https://localhost:44372/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
