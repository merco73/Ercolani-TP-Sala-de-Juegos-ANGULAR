import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MarvelService } from 'src/app/servicios/marvel.service';
import { createImportSpecifier } from 'typescript';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {


// Llamada a la api
  constructor(private characterSvc: MarvelService) {

    this.characterSvc.getJson('https://gateway.marvel.com:443/v1/public/characters?apikey=da30b7f8cb45c6e9718ed4516df2bddc').subscribe((res:any)=>{
      // console.log(res.data.results[0]);
      this.arrayMarvel = res.data.results;
      // res.data.results;
        //  console.log(this.arrayMarvel[1]);
    });

    
  }



  // Imagen Marvel
  imgMarvel:string = '../../../../assets/imagenes/marvel.png';

  //  Resultado de la api 
  arrayMarvel:Object; 

  // Array de arrayMarvel
  card:any[]; 
  
  // Array de dos imagenes seleccionadas
  chosen = []; 

  // Estadisticas
  needWon:number = 6;
  won:number = 0;
  resultado:string="...";



  inicio(){
    this.won = 0;
    this.resultado="...";

    let img1 = `${this.arrayMarvel[0].thumbnail.path}.${this.arrayMarvel[0].thumbnail.extension}`;
    let img2 = `${this.arrayMarvel[1].thumbnail.path}.${this.arrayMarvel[1].thumbnail.extension}`;
    let img3 = `${this.arrayMarvel[2].thumbnail.path}.${this.arrayMarvel[2].thumbnail.extension}`;
    let img4 = `${this.arrayMarvel[3].thumbnail.path}.${this.arrayMarvel[3].thumbnail.extension}`;
    let img5 = `${this.arrayMarvel[4].thumbnail.path}.${this.arrayMarvel[4].thumbnail.extension}`;
    let img6 = `${this.arrayMarvel[10].thumbnail.path}.${this.arrayMarvel[10].thumbnail.extension}`;



    let cardArray =[
      {name:this.arrayMarvel[0].name, img:`${this.arrayMarvel[0].thumbnail.path}.${this.arrayMarvel[0].thumbnail.extension}`},
      {name:this.arrayMarvel[0].name, img:img1},

      {name:this.arrayMarvel[1].name, img:img2},
      {name:this.arrayMarvel[1].name, img:img2},

      {name:this.arrayMarvel[2].name, img:img3},
      {name:this.arrayMarvel[2].name, img:img3},

      {name:this.arrayMarvel[3].name, img:img4},
      {name:this.arrayMarvel[3].name, img:img4},

      {name:this.arrayMarvel[4].name, img:img5},
      {name:this.arrayMarvel[4].name, img:img5},

      {name:this.arrayMarvel[10].name, img:img6},
      {name:this.arrayMarvel[10].name, img:img6},
    ]


    cardArray.sort(this.inSort);
    // console.log(typeof cardArray);
    this.card = cardArray;
    console.log(this.card);
  }





// Numero random para desordenar array
  inSort(){
      let inside1 = 0.5 - Math.random();
      return inside1;
    }






// Sirve para obtener el id de un elemento y cambiar imagen al hacer click
  seleccion(event) {
    // console.log((event.target as Element).id)
    console.log(event.target.id); 
    let id = event.target.id;
    console.log(this.card[id].name); 
    event.target.src = this.card[id].img;
    this.chosen.push(id);
    if(this.chosen.length == 2){
      setTimeout(()=>{
        this.checkMatch(event, id);
      },200)
    }
 }






// Funcion que chequea las imagenes seleccionadas
 checkMatch(event, id){
   console.log(this.chosen[0] + " " + this.chosen[1]);
     //  obtiene las dos imagenes seleccionadas
     let imgSelect1 = this.card[this.chosen[0]].name;
     let imgSelect2 = this.card[this.chosen[1]].name;
     console.log(`${imgSelect1} + ${imgSelect2}`);

   if(this.chosen[0] == this.chosen[1]){
    //  Cambia la imagen al clickear dos veces la misma
    event.target.src = '../../../../assets/imagenes/marvel.png';
     this.chosen = [];
     this.resultado = 'Seleccionaste la misma imagen 2 veces';
   }else if(imgSelect1 != imgSelect2){
    let eleccion1 = this.chosen[0];
    let eleccion2 = this.chosen[1];
    document.getElementById(eleccion1).setAttribute("src",this.imgMarvel);
    document.getElementById(eleccion2).setAttribute("src",this.imgMarvel);
    this.resultado = 'No hay match!';
    this.chosen = [];
   }else if(imgSelect1 == imgSelect2){
    this.resultado = 'Match!';
    this.chosen = []; 
    this.won++;
    if(this.won == this.needWon){
      this.resultado = 'GANASTE!';
    }
   }

 }



//!Termina el juego





  ngOnInit(): void {

    setTimeout(() => {
      this.inicio();
     }, 1500);

  }



}
