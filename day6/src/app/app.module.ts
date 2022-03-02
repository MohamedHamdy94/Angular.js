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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { CounterComponent } from './counter/counter.component';
import { RequestInterceptor } from './request.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderService } from './services/loader.service';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner' ;
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
    CounterComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //  MatProgressSpinnerModul
  ],
  providers: [LoaderService ,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
