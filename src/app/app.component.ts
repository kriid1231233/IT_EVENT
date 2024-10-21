import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
      icon:'person-outline',
      name:'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon:'power',
      name:'Cerrar Sesión',
      redirecTo:'/login'

    }

  ]

  constructor(private router: Router) {}

  cerrarsesion(){
    sessionStorage.clear();
    console.log("FUNCIONA?")
    this.router.navigate(['/login']);
  }
  
}
