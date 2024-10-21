import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { EventosM } from 'src/interfaces/eventos';




@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {

  evento:any;

  qrdata:string;
  rut:any;
  email:any;
  idUsuario:any;

  newEvento: EventosM={
    imagen:"",
    nombreEvento:"",
    lugar:"",
    fecha:"",
    descripcion:"",
  }
  constructor( private apiCrud: ApicrudService,
               private activated : ActivatedRoute,
               private router : Router) {
                this.activated.queryParams.subscribe(param=>{
                  this.evento = JSON.parse(param['evento'])
                })
                this.qrdata='';
                this.evento= sessionStorage.getItem('evento');
                this.rut= sessionStorage.getItem('rut');
                this.email= sessionStorage.getItem('email');
                }

  ngOnInit() {
  }

  generarQr(){
    this.qrdata='';
    this.qrdata =  this.newEvento.nombreEvento  +  this.newEvento.lugar +  this.newEvento.fecha + this.rut.slice(0, 8) + this.email ;
    console.log(this.qrdata);
  }

  ionViewWillEnter(){
    this.newEvento = this.evento;
    console.log(this.evento.id)
  }
  volver(){
    this.router.navigate(["/iniestudiante"])
    this.limpiarQr();
  }
  limpiarQr() {
    this.qrdata = ''; // Limpia el contenido de qrdata
    console.log('qrdata ha sido limpiado:', this.qrdata);
}
}
