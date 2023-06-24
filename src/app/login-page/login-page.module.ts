import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './component/about/about.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../common/core.module';
import { LoginServiceService } from './service/login-service.service';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule,
  ],
  providers:[LoginServiceService]
})
export class LoginPageModule { }
