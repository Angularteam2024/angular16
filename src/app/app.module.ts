import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MastersComponent } from './masters/masters.component';
import { RcmainComponent } from './rcmain/rcmain.component';
import { RecivingComponent } from './reciving/reciving.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { MainstackComponent } from './mainstack/mainstack.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainstoreComponent } from './mainstore/mainstore.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],


  declarations: [
    AppComponent,LoginComponent,HeaderComponent,
    HomeComponent,
    MastersComponent,
    RcmainComponent,
    RecivingComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    NewaccountComponent,
    MainstackComponent, 
    MainstoreComponent,
    AboutComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
