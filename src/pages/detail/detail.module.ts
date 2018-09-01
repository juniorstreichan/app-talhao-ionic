import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [

    IonicPageModule.forChild(DetailPage),
  ],
})
export class DetailPageModule {}
