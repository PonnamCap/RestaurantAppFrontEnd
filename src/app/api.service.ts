import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http : HttpClient) { }
 
  postOrder(data : any){
    return this.http.post<any>("http://localhost:8080/api/v1/addOrder", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  

  getAllOrders(){
    return this.http.get<any>("http://localhost:8080/api/v1/findallOrders")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateOrder(data : any,id:string){
    return this.http.put<any>("http://localhost:8080/api/v1/update/{id}", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteOrder(id:string){
    return this.http.delete<any>("http://localhost:8080/api/v1/del/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
  

