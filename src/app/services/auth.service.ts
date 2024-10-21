import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumnos,AlumnosM } from 'src/interfaces/alumnos';
import { environment } from 'src/environments/environment';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  GetAllUsers():Observable<Alumnos[]>{
    return this.httpclient.get<Alumnos[]>(`${environment.apiUrl}/alumnos`);
  }

  GetUserByAlmuno(alumno:any):Observable<Alumnos>{
    return this.httpclient.get<Alumnos>(`${environment.apiUrl}/alumnos/?email=${alumno}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }

  PostAlumno(newAlumno:AlumnosM):Observable<AlumnosM>{
    return this.httpclient.post<Alumnos>(`${environment.apiUrl}/alumnos/`,newAlumno);
  }
  
  GetAlumnoByrut(rut:string):Observable<Alumnos>{
    return this.httpclient.get<Alumnos>(`${environment.apiUrl}/alumnos/?rut=${rut}`);
  
  }

}



