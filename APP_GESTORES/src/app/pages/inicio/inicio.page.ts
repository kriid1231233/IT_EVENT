import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 

  constructor(private menu:MenuController,
              private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menu.open('first');
  }

 async mensaje(){
   //crea caja de dialogo utilizando el objeto alertcontroller
    const alert = await this.alertcontroller.create({
      header: '¿Escanear Qr?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alerta canceleda');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alerta confirmada');
            this.router.navigate(['/alert']);   //nos permite navegar hacia un page a partir de un método
          },
        },
      ],
    });

    await alert.present();      //activa la ventana del alertcontroller
   

    
  }
  async mensajecard(){
    //crea caja de dialogo utilizando el objeto alertcontroller
     const alert = await this.alertcontroller.create({
       header: '¿Registrar Evento?',
       buttons: [
         {
           text: 'Cancelar',
           role: 'cancel',
           handler: () => {
             console.log('Alerta canceleda');
           },
         },
         {
           text: 'OK',
           role: 'confirm',
           handler: () => {
             console.log('Alerta confirmada');
             this.router.navigate(['/card']);   //nos permite navegar hacia un page a partir de un método
           },
         },
       ],
     });
 
     await alert.present();      //activa la ventana del alertcontroller
    
}




}
