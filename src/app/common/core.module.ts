import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpRoutingService } from './services/http-routing.service';
import { CommonDataService } from './services/common-data.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    
  ],
  providers:[CommonDataService,HttpRoutingService]
})
export class CoreModule { }
