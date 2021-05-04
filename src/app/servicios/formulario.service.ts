import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  //! Metodo para listar todos los usuarios

     constructor(private firestore: AngularFirestore) {}

   getUserGame(){
     return this.firestore.collection("formulario").snapshotChanges();
   }

   crearUserGame(formulario:any){
     return this.firestore.collection("formulario").add(formulario);
   }

  
  // updateUserGame(id:any, usergame:any)){
  //   return this.firestore.collection("usuarios").doc(id).update(usergame);
  // }

  // deleteUserGame(id:any){
  //   return this.firestore.collection("usuarios").doc(id).delete();
  // }
  
}
