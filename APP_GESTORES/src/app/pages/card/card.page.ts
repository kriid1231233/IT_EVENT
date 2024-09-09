import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  tipo: string;
  capacidad: string;
  constructor() {
    this.titulo = '';
    this.fecha = '';
    this.lugar = '';
    this.descripcion = '';
    this.tipo = '';
    this.capacidad = '';
   }

   limpiar(){
    this.titulo="";
    this.fecha="";
    this.lugar="";
    this.descripcion="";
    this.tipo="";
    this.capacidad="";

  }
  ngOnInit() {
  }

}
