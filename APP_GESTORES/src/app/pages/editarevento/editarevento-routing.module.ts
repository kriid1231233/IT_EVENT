import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEventoPage } from './editarevento.page'; // Importa el componente sin crear dependencias circulares

const routes: Routes = [
  {
    path: '',
    component: EditarEventoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEventoPageRoutingModule {}
