

export interface Alumnos{
    idUsuario:string;
    rut:string;
    nombre:string;
    imagen: string;
    isactive:boolean;
    password:string;
    email: string;

}

//petición post
export interface AlumnosM{
    nombre:string;
    password:string;
    email: string;
    imagen:string;
}