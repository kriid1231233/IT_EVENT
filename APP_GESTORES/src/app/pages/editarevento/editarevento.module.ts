import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarEventoPageRoutingModule } from './editarevento-routing.module';
import { EditarEventoPage } from './editarevento.page'; // Importa el componente correctamente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEventoPageRoutingModule, // Importa el módulo de enrutamiento correctamente
  ],
  declarations: [EditarEventoPage], // Declara el componente aquí
})
export class EditareventoPageModule {}
