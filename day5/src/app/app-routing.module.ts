import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'Login',component:LoginComponent},
  {path:'Details/:id',component:DetailsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardGuard]},
  {path:'**',component:NotFoundpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
