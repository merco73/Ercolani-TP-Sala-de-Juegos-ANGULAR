import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {


  constructor(public firebaseService: ListadoService) { }


// 0 = piedra
// 1 = papel
// 2 = tijera

 imgMachine:string = '../../../../assets/imagenes/piedra.jpeg';
 imgUser:string = '../../../../assets/imagenes/piedra.jpeg';
 contador:number = 0;
 needWon:number = 3;
 contadorCpu:number = 0;

//  resultados
  resultado:string = 'Resultado...';

  jugar(ppt:number){ 


    let maquina = Math.floor(Math.random()*3)
    // console.log(maquina);


    switch (ppt) {
      case 0:
        this.imgUser = '../../../../assets/imagenes/piedra.jpeg';
        break;

        case 1:
          this.imgUser = '../../../../assets/imagenes/papel.jpeg';
          break;

          case 2:
            this.imgUser = '../../../../assets/imagenes/tijera.jpeg';
            break;
      
    
      default:
        break;
    }

    


    switch (maquina) {
      case 0:
        this.imgMachine = '../../../../assets/imagenes/piedra.jpeg';
        break;

        case 1:
          this.imgMachine = '../../../../assets/imagenes/papel.jpeg';
          break;

          case 2:
            this.imgMachine = '../../../../assets/imagenes/tijera.jpeg';
            break;
      
    
      default:
        break;
    }
    





    if(ppt == maquina){

      this.resultado = 'Empate :|';

    //* Si el usuario elige piedra
    } else if(ppt == 0){

      if(maquina == 1){

        this.resultado = 'Perdiste :(';
        this.contadorCpu++;

      }else if(maquina == 2){

         this.resultado = 'Ganaste :)';
         this.contador++;


      }

    //* Si el usuario elige papel
    } else if(ppt == 1){

      if(maquina == 0){

        this.resultado = 'Ganaste :)';
        this.contador++;

      }else if(maquina == 2){

        this.resultado = 'Perdiste :(';
        this.contadorCpu++;

      }

    //* Si el usuario elige tijera
    } else if(ppt == 2){

      if(maquina == 0){

        this.resultado = 'Perdiste :(';
        this.contadorCpu++;

      }else if(maquina == 1){

        this.resultado = 'Ganaste :)';
        this.contador++;

      }

    }

  
    if(this.contador == 3){
      this.loadResult();
      this.reiniciarJuego();
    }

    if(this.contadorCpu == 3){
      this.loadResult();
      this.reiniciarJuego();
    }

  }

  reiniciarJuego(){
    this.contador = 0;
    this.contadorCpu = 0;
  }



 loadResult() {
  this.firebaseService.addResult('Piedra, Papel o Tijera', this.contador, (this.contador == this.needWon))
    .then(result => {
      console.log("insert result");
    });
}



  ngOnInit(): void {
  }

}
