import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CountPipePipe } from './count-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductListComponent,
    CountPipePipe,
    LoginComponent,
    RegisterComponent,
    NotFoundpageComponent,
    DetailsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
