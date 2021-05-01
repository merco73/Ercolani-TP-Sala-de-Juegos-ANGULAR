import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {


  constructor(private afs: AngularFirestore) { }



  getUsers() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').valueChanges().subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }



  getResults() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/results').valueChanges().subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }




  addResult(game: any, points: any, win: any) {
    const date = new Date();
    const result = {
      createdAt: date.toLocaleDateString(),
      game: game,
      idUser: localStorage.getItem('email'),
      points: points,
      win: win
    }
    const id = this.afs.createId();
    return this.afs.collection('/results').doc(id).set(result);
  }



  addUser(email: any) {
    const date = new Date();
    const user = {
      createdAt: date.toLocaleDateString(),
      id: Math.floor(Math.random() * Math.floor(6)),
      name: email.split('@')[0],
      mail: email
    }
    const id = this.afs.createId();
    return this.afs.collection('/users').doc(id).set(user);
  }





  //! Metodo para listar todos los usuarios

    // constructor(private firestore: AngularFirestore) { 
  // }

  // getUserGame(){
  //   return this.firestore.collection("usuarios").snapshotChanges();
  // }

  // crearUserGame(usergame:any){
  //   return this.firestore.collection("usuarios").add(usergame);
  // }

  
  // updateUserGame(id:any, usergame:any)){
  //   return this.firestore.collection("usuarios").doc(id).update(usergame);
  // }

  // deleteUserGame(id:any){
  //   return this.firestore.collection("usuarios").doc(id).delete();
  // }


}
