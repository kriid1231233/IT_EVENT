import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa AlertController
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {
  nombre: string = ''; // Inicializa la propiedad
  email: string = ''; // Inicializa la propiedad
  password: string = ''; // Inicializa la propiedad
  confirmPassword: string = ''; // Inicializa la propiedad

  constructor(private alertController: AlertController, private router: Router) { } // Inyecta AlertController y Router

  ngOnInit() {
    // Aquí puedes inicializar cualquier dato o llamar a servicios necesarios al cargar la página
  }

  // Método personalizado para crear un usuario con una alerta
  async crearUsuario() {
    if (this.password !== this.confirmPassword) {
      // Muestra un mensaje de error si las contraseñas no coinciden
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Alerta personalizada cuando el usuario es creado con éxito
    const alert = await this.alertController.create({
      header: 'Usuario Creado',
      message: `¡Bienvenido, ${this.nombre}! Tu cuenta ha sido creada con éxito.`,
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            console.log('Usuario creado y datos enviados');
            this.router.navigate(['/inicio']); // Navega a la página de inicio o a la que prefieras
            this.limpiar(); // Llama al método para limpiar los campos
          },
        },
      ],
    });

    await alert.present(); // Presenta la alerta
  }

  // Método para limpiar los campos del formulario
  limpiar() {
    this.nombre = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
