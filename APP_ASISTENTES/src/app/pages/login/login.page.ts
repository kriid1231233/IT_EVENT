import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu:MenuController,
    private alertcontroller: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  async mensajeInicioS(){
    //crea caja de dialogo utilizando el objeto alertcontroller
     const alert = await this.alertcontroller.create({
       header: 'Sesion iniciada correctamente',
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
             this.router.navigate(['/inicio']);   //nos permite navegar hacia un page a partir de un método
           },
         },
       ],
     });
 
     await alert.present();      //activa la ventana del alertcontroller
    
 
     
   }
}
