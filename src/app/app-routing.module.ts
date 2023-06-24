import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './login-page/component/home/home.component';
import { AboutComponent } from './login-page/component/about/about.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path: 'login',component:HomeComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
