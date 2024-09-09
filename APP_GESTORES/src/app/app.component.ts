import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name:string;
  redirecTo:string;
} 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[]=[
    {
      icon:'qr-code-outline',
      name:'Escanear QR',
      redirecTo: '/alert'
    },
    {
      icon:'color-wand-outline',
      name:'Registrar Evento',
      redirecTo: '/card'
    },
    {
      icon:'person-outline',
      name:'Editar Perfil',
      redirecTo: '/contact'
    },
    {
      icon:'create-outline',
      name:'Editar Evento',
      redirecTo: '/editarevento'
    },
    

  ]

  constructor() {}
  
}
