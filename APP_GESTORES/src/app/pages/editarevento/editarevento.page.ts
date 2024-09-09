import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarevento',
  templateUrl: './editarevento.page.html',
  styleUrls: ['./editarevento.page.scss'],
})
export class EditarEventoPage {
  titulo: string = '';
  fecha: string = '';
  lugar: string = '';
  descripcion: string = '';
  tipo: string = '';
  capacidad: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  // Método para guardar cambios
  async guardarCambios() {
    const alert = await this.alertController.create({
      header: 'Cambios Guardados',
      message: 'Los cambios en el evento se han guardado con éxito.',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            console.log('Cambios guardados');
            this.router.navigate(['/inicio']);
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para eliminar el evento
  async eliminarEvento() {
    const alert = await this.alertController.create({
      header: 'Eliminar Evento',
      message: '¿Estás seguro de que deseas eliminar este evento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          },
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Evento eliminado');
            this.router.navigate(['/inicio']);
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.titulo = '';
    this.fecha = '';
    this.lugar = '';
    this.descripcion = '';
    this.tipo = '';
    this.capacidad = '';
  }
}
