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

  jugar(ppt:number){ 


    let maquina = Math.floor(Math.random()*3)
    console.log(maquina);

    


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
    



    setTimeout(function(){

      

    if(ppt == maquina){

      console.log('empate');

    //* Si el usuario elige piedra
    } else if(ppt == 0){

      console.log('(Usuario) Piedra');

      if(maquina == 1){

        console.log('(Maquina) Papel: Perdiste');

      }else if(maquina == 2){

        console.log('(Maquina) Tijera: Ganaste');

      }

    //* Si el usuario elige papel
    } else if(ppt == 1){

      console.log('(Usuario) Papel');

      if(maquina == 0){

        console.log('(Maquina) Piedra: Ganaste');

      }else if(maquina == 2){

        console.log('(Maquina) Tijera: Perdiste');

      }

    //* Si el usuario elige tijera
    } else if(ppt == 2){

      console.log('(Usuario) Tijera');

      if(maquina == 0){

        console.log('(Maquina) Piedra: Perdiste');

      }else if(maquina == 1){

        console.log('(Maquina) Papel: Ganaste');

      }

    }

  }, 3000);

  }





  constructor() { }

  ngOnInit(): void {
  }

}
