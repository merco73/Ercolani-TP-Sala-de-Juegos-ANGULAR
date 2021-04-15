import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
// 0 = piedra
// 1 = papel
// 2 = tijera

 imgMachine:string = '../../../../assets/imagenes/piedra.jpeg';
 imgUser:string = '../../../../assets/imagenes/piedra.jpeg';

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

      }else if(maquina == 2){

         this.resultado = 'Ganaste :)';

      }

    //* Si el usuario elige papel
    } else if(ppt == 1){

      if(maquina == 0){

        this.resultado = 'Ganaste :)';

      }else if(maquina == 2){

        this.resultado = 'Perdiste :(';

      }

    //* Si el usuario elige tijera
    } else if(ppt == 2){

      if(maquina == 0){

        this.resultado = 'Perdiste :(';

      }else if(maquina == 1){

        this.resultado = 'Ganaste :)';

      }

    }

  

  }





  constructor() { }

  ngOnInit(): void {
  }

}
