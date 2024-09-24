import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RcmainComponent } from './rcmain/rcmain.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { RecivingComponent } from './reciving/reciving.component';
import { AboutComponent } from './about/about.component';
import { MainstoreComponent } from './mainstore/mainstore.component';
import { MastersComponent } from './masters/masters.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'changepassword', component:ChangepasswordComponent},
  {path:'newaccount', component:NewaccountComponent},
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path:'rcmain', component:RcmainComponent},
      {path:'receiving', component:RecivingComponent},
      {path:'about' , component:AboutComponent},
      {path:'masters', component:MastersComponent},
      {path:'mainstore', component:MainstoreComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
