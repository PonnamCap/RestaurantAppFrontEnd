import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get("http://localhost:8080/api/v1/findAllMenus");
    response.subscribe((data)=>this.menus=data)
    
  }
}