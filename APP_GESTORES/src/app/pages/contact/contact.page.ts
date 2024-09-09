import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  nombre: string = "";
  email: string = "";
  telefono: string = "";
  departamento: string = "";
  notas: string = "";

  constructor(
    private menu: MenuController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {}

  async guardarPerfil() {
    // Alerta personalizada cuando el perfil es modificado con éxito
    const alert = await this.alertController.create({
      header: 'Perfil Modificado',
      message: '¡Tu perfil ha sido modificado con éxito!',
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            console.log('Perfil modificado y datos enviados');
            this.router.navigate(['/inicio']); // Navega a la página de inicio o a la que prefieras
            this.limpiar(); // Llama al método para limpiar los campos
          },
        },
      ],
    });

    await alert.present(); // Presenta la alerta
  }

  limpiar() {
    this.nombre = "";
    this.email = "";
    this.telefono = "";
    this.departamento = "";
    this.notas = "";
  }
}
