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
      name:'Qr',
      redirecTo: '/alert'
    },
    {
      icon:'color-wand-outline',
      name:'Registrarse a evento',
      redirecTo: '/card'
    },
    {
      icon:'build',
      name:'Contacto',
      redirecTo: '/contact'
    },
    {
      icon:'person-outline',
      name:'Perfil',
      redirecTo: '/perfil'
    },

  ]

  constructor() {}
  
}
