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
      img: "./assets/imagenes/jugadores.png",
      nombre: "Listados de resultados",
      descripcion: "Los listados de los resultados con ordenamiento y busqueda",
      link: "/juegos/listado"
    },
    {
      
      img: "./assets/imagenes/listado.png",
      nombre: "Encuesta",
      descripcion: "Encuesta para jugadores",
      link: "/juegos/encuesta"
    },
    {
      img: "./assets/imagenes/Configuracion.png",
      nombre: "Quien soy?",
      descripcion: "Descripcion del juego",
      link: "/quien-soy"
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