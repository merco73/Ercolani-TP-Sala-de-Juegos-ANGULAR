import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css']
})
export class MiJuegoComponent implements OnInit {

  puntos:number = 0;
  randNum:number;
  randNum2:number;
  tiempo:number = 15;
  resultado:string="En juego...";
  cartelResultado:boolean = false;


  interval = setInterval(() => {
    if(this.tiempo > 0 && this.puntos < 14){
      this.restarTiempo();
    }
  },1000);

// Reiniciar juego
  juegoNuevo(){
    this.puntos = 0;
    this.tiempo = 14;
    this.resultado = "En juego...";
    this.cartelResultado = false;
    this.interval;
  }

  sumarPuntos() {
    if(this.puntos<14 && this.tiempo > 0){
      this.puntos++;

      if (window.matchMedia("(min-width: 400px)").matches) {
        /* La pantalla tiene al menos 400 píxeles de ancho */
        this.randNum = Math.round(Math.random()*470);
        this.randNum2 = Math.round(Math.random()*470);
      } else {
        /* La pantalla tiene menos de 400 píxeles de ancho */
        this.randNum = Math.round(Math.random()*300);
        this.randNum2 = Math.round(Math.random()*300);
      }

      if(this.puntos == 14){
        // clearInterval(this.interval);
        this.resultado = "GANASTE!";
        this.puntos = 14;
        this.cartelResultado = true;
      }
    }
  }

  restarTiempo(){
    this.tiempo--;
    // console.log(this.tiempo);
    if(this.tiempo == 0){
      this.resultado = "GAME OVER";
      this.cartelResultado = true;
    }
  }



  constructor() {
   }

  ngOnInit(): void {
  }

}
