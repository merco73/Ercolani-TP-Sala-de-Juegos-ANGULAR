import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuHomeService {

  private mPrincipal: Principal[] = [
    {
      img: "./assets/imagenes/saladejuegos.png",
      nombre: "Juegos",
      descripcion:
        "Accede a los mejores juegos.",
      link: "/juegos/sala-juegos"
    },
    {
      img: "./assets/imagenes/listado.png",
      nombre: "Listados de resultados",
      descripcion: "Los listados de los resultados con ordenamiento y busqueda",
      link: "/Listado"
    },
    // {
    //   img: "./assets/imagenes/Configuracion.png",
    //   nombre: "Configuración",
    //   descripcion: "Ajustes de la aplicacion y los métodos de autentificación",
    //   link: "/Juegos"
    // },
    {
      img: "./assets/imagenes/jugadores.png",
      nombre: "Jugadores",
      descripcion: "Listado de jugadores",
      link: "/Jugadores"
    }
  ];



  constructor() {
    console.log("Servicio listo para usar");
  }

  getMenuPrincipal() {
    return this.mPrincipal;
  }
}



export interface Principal {
  img: string;
  nombre: string;
  descripcion: string;
  link: string;
}