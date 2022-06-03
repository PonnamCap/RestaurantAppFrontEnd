import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PaymentComponent } from './payment/payment.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'order-list',component:OrderListComponent},
  {path:'findallOrders',component:OrderListComponent},
  {path:'create-order',component:CreateOrderComponent},
  {path:'', redirectTo: 'findallOrders', pathMatch: 'full'},
  {path:'update-order/:id',component:UpdateOrderComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'restaurants', component:RestaurantsComponent} ,
  {path: 'payment', component:PaymentComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
