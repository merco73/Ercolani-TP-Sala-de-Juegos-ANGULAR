import { Component, OnInit } from '@angular/core';

import { Usergame } from 'src/app/interfaces/usergame';
import { ListadoService } from 'src/app/servicios/listado.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  listado: Array<any>;
  isLoading: boolean = false;
  constructor(public firebaseService: ListadoService) {
  }

  ngOnInit() {
    this.obtenerResultados();
  }

  obtenerResultados() {
    this.isLoading = true;
    this.firebaseService.getResults()
      .then(result => {
        this.isLoading = false;
        console.log(result);
        this.listado = result;
      });
  }






  // public nombreUser = localStorage.getItem('email');
  // collection = {count:60, data:[]};

  // constructor(private firebaseListado:ListadoService) { }

  

  // //+Guarda Usuario
  // guardar(){
  //   let date:Date = new Date();
  //   let stringDate = date.getHours() + ":" + date.getMinutes()

  //   // Falta el UID del usuario
  //   let uGame: Usergame ={
  //     usuario:this.nombreUser,
  //     puntos:10,
  //     fecha:new Date().getTime(),
  //     hora:stringDate
  //   }

  //   this.firebaseListado.crearUserGame(uGame).then(resp=>{
  //     console.log(resp);
  //   }).catch(error=>{
  //     console.error(error);
  //   })
  
  // }
  
  
  // ngOnInit(): void {

  //   //+ Trae automaticamente la colleccion desde firebase
  //   this.firebaseListado.getUserGame().subscribe(resp=>{
  //     this.collection.data = resp.map((e:any)=>{
  //       return {
  //         usuario:e.payload.doc.data().usuario,
  //         puntos:e.payload.doc.data().puntos,
  //         fecha:e.payload.doc.data().fecha,
  //         hora:e.payload.doc.data().hora
  //       }
  //     })
  //   },
  //     error=>{
  //       console.error(error);
  //     }
  //   );

  //  this.firebaseListado.updateUserGame();

  // }


}
