import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniestudiantePageRoutingModule } from './iniestudiante-routing.module';

import { IniestudiantePage } from './iniestudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniestudiantePageRoutingModule
  ],
  declarations: [IniestudiantePage]
})
export class IniestudiantePageModule {}
