import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { orderModel } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  registrationForm !: FormGroup;
  orderModelObj : orderModel = new orderModel();
  orderData : any;
  showAdd :boolean;
  showUpdate :boolean;
  index:any;
 /* edit = false;
   getOrder = ""; */
 
  constructor(private formbuilder:FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.registrationForm = this.formbuilder.group({
      id : [''],
      itemName : [''],
      quantity : ['']
      
    })
    this.getAllOrders();
  }
 
  
  clickAddOrder(){
    this.registrationForm.reset();
    this.showAdd=true;
    this.showUpdate=false;
    
  }
  pay(){
    console.log("Payment successful")
  }
  postOrderDetails(){
    this.orderModelObj.id = this.registrationForm.value.id;
    this.orderModelObj.itemName = this.registrationForm.value.itemName;
    this.orderModelObj.quantity = this.registrationForm.value.quantity;
   

    this.api.postOrder(this.orderModelObj)
    .subscribe(res=>{
      console.log(res);
      alert('Order Added Successfully')
      let ref = document.getElementById('cancel')
      ref?.click();
      this.registrationForm.reset();
      this.getAllOrders();
    },
    err=>{
        alert("Something Went wrong");
    })
  }

  getAllOrders(){
    this.api.getAllOrders()
    .subscribe((res: any)=>{
      this.orderData = res;
    })
  }
  deleteOrder(row : any){
    this.api.deleteOrder(row.id)
    .subscribe((res: any)=>{
      alert("Employee Deleted");
      this.getAllOrders();
    })
  } 
 
  onEdit(row: any){
    this.showAdd=false;
    this.showUpdate=true;
    this.orderModelObj.id=row.id;
    this.registrationForm.controls['id'].setValue(row.id);
    this.registrationForm.controls['itemName'].setValue(row.itemName);
    this.registrationForm.controls['quantity'].setValue(row.quantity);
   

  }
  updateOrderDetails(){
    this.orderModelObj.id = this.registrationForm.value.id;
    this.orderModelObj.itemName = this.registrationForm.value.itemName;
    this.orderModelObj.quantity = this.registrationForm.value.quantity;
   
    this.api.updateOrder(this.orderModelObj,this.orderModelObj.id)
    .subscribe((res: any)=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.registrationForm.reset();
      this.getAllOrders();
    })
  }
}